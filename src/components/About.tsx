"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "About Softune",
    description:
      "Softune is a modern full-service digital agency empowering brands through design, development, marketing, AI, and automation. We blend creativity with technology to craft experiences that inspire and perform.",
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "Our mission is to help businesses grow with impactful design, intelligent development, and innovative digital strategies. We aim to make high-quality digital transformation accessible to every brand, regardless of size.",
  },
  {
    id: 3,
    title: "Our Vision",
    description:
      "To become a global leader in creative technology—where every product we build reflects innovation, precision, and purpose. At Softune, we envision a future where digital solutions drive both success and sustainability.",
  }
];


export default function About() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(sectionHeight, viewportHeight - rect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      
      // Progress through the section (0 to 1)
      const progress = Math.max(0, Math.min(1, visibleTop / (sectionHeight - viewportHeight)));
      setScrollProgress(progress);

      // Determine active step based on scroll progress
      const stepIndex = Math.min(
        Math.floor(progress * steps.length),
        steps.length - 1
      );
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[250vh] flex items-start px-4 sm:px-6 lg:px-8"
    >
      <div className="sticky top-24 w-full max-w-7xl mx-auto py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
              {steps[activeStep].title}
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground leading-tighter tracking-tight font-medium">
              {steps[activeStep].description}
            </p>

            {/* Progress Bars */}
            <div className="flex gap-2 pt-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full overflow-hidden transition-all duration-500 ${
                    index === activeStep
                      ? "w-24 bg-foreground"
                      : "w-12 bg-foreground/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Stacked Cards */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] h-full" style={{ marginRight: '80px' }}>
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;
                const isFuture = index > activeStep;
                
                // Stack cards from back to front
                // Active card is in front, past cards fade out, future cards stack behind
                let rightOffset = 0;
                let scale = 0.95;
                let opacity = 1;
                let zIndex = 1;
                
                // Different shades for each card
                const cardColors = [
                  'bg-[#8B8B8B]', // Card 1 - lightest gray
                  'bg-[#6B6B6B]', // Card 2 - medium gray
                  'bg-[#4B4B4B]', // Card 3 - darkest gray
                ];
                
                if (isPast) {
                  // Past cards: fade out and move slightly left
                  rightOffset = -50;
                  opacity = 0;
                  zIndex = 0;
                  scale = 0.9;
                } else if (isActive) {
                  // Active card: front and center
                  rightOffset = 0;
                  opacity = 1;
                  zIndex = 10;
                  scale = 1;
                } else if (isFuture) {
                  // Future cards: stacked behind with visible right edge
                  const futureIndex = index - activeStep;
                  rightOffset = futureIndex * 35;
                  opacity = 1;
                  zIndex = 5 - futureIndex;
                  scale = 1 - (futureIndex * 0.05);
                }

                return (
                  <div
                    key={step.id}
                    className="absolute top-0 right-0 transition-all duration-700 ease-out"
                    style={{
                      transform: `translateX(${rightOffset}px) scale(${scale})`,
                      transformOrigin: 'right center',
                      opacity,
                      zIndex,
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <div className={`w-full h-full ${cardColors[index]} rounded-3xl shadow-2xl`}>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
