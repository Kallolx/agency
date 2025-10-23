"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<"entering" | "intact" | "loading" | "closing" | "exiting" | "hidden">("entering");
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if loader has already been shown in this session
    const hasShownLoader = sessionStorage.getItem("loaderShown");
    
    if (hasShownLoader) {
      // Don't show loader, skip directly to hidden
      setStage("hidden");
      return;
    }

    // Mark loader as shown for this session
    sessionStorage.setItem("loaderShown", "true");
    setShouldShow(true);

    // Stage 1: Slide down entrance - logo intact
    setTimeout(() => {
      setStage("intact");
      
      // Stage 2: Split the logo
      setTimeout(() => {
        setStage("loading");
        
        // Stage 3: Start loading progress
        setTimeout(() => {
          const duration = 2500;
          const interval = 30;
          const increment = 100 / (duration / interval);

          const timer = setInterval(() => {
            setProgress((prev) => {
              if (prev >= 100) {
                clearInterval(timer);
                // Stage 4: Start closing - logos come together
                setTimeout(() => {
                  setStage("closing");
                  
                  // Stage 5: Slide up exit
                  setTimeout(() => {
                    setStage("exiting");
                  }, 1000);
                }, 300);
                return 100;
              }
              return Math.min(prev + increment, 100);
            });
          }, interval);
        }, 400); // Wait for percentage pop-in
      }, 700); // Wait before split
    }, 700); // Wait for entrance animation
  }, []);

  if (stage === "hidden" || !shouldShow) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-transform duration-700 ease-in-out ${
        stage === "entering" 
          ? "-translate-y-full" 
          : stage === "exiting" 
          ? "-translate-y-full" 
          : "translate-y-0"
      }`}
      onTransitionEnd={() => {
        if (stage === "exiting") {
          // Component will be unmounted after animation
        }
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Full Logo with clip-path animation */}
        <div className="relative">
          {/* Top half of logo */}
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{
              clipPath: "inset(0 0 50% 0)",
              transform: stage === "loading" && progress < 100 ? "translateY(-30px)" : "translateY(0)"
            }}
          >
            <Image
              src="/logo.svg"
              alt="Softune Logo"
              width={100}
              height={100}
              className="w-[100px] h-auto"
            />
          </div>

          {/* Bottom half of logo */}
          <div
            className="transition-transform duration-700 ease-out"
            style={{
              clipPath: "inset(50% 0 0 0)",
              transform: stage === "loading" && progress < 100 ? "translateY(30px)" : "translateY(0)"
            }}
          >
            <Image
              src="/logo.svg"
              alt="Softune Logo"
              width={80}
              height={80}
              className="w-[80px] h-auto"
            />
          </div>
        </div>

        {/* Progress percentage with pop animation */}
        <div
          className={`absolute transition-all duration-300 ${
            stage === "loading" && progress > 0 && progress < 100
              ? "opacity-100 scale-100"
              : progress === 100
              ? "opacity-0 scale-50"
              : "opacity-0 scale-50"
          }`}
        >
          <div className="text-4xl font-bold text-foreground tracking-tighter">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
