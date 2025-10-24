"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
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
  const [isMobile, setIsMobile] = useState(false);
  const [dragDirection, setDragDirection] = useState(0);

  useEffect(() => {
    // Detect mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only enable scroll functionality on desktop
    if (isMobile) return;
    
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
  }, [isMobile]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold && activeStep > 0) {
      // Swiped right - go to previous
      setActiveStep(activeStep - 1);
      setDragDirection(-1);
    } else if (info.offset.x < -swipeThreshold && activeStep < steps.length - 1) {
      // Swiped left - go to next
      setActiveStep(activeStep + 1);
      setDragDirection(1);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-start px-4 sm:px-6 lg:px-8 ${
        isMobile ? 'min-h-screen' : 'h-[250vh]'
      }`}
    >
      <div className={`w-full max-w-7xl mx-auto py-24 ${
        isMobile ? 'relative' : 'sticky top-24'
      }`}>
        {isMobile ? (
          // Mobile Layout - Swipeable Single Card
          <div className="space-y-8">
            {/* Swipeable Content */}
            <motion.div
              key={activeStep}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: dragDirection * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dragDirection * 100 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Text Content */}
              <div className="space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                  {steps[activeStep].title}
                </h2>

                <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Single Card - Different shades */}
              <div className="flex items-center justify-center py-8">
                <div className="relative w-[280px] sm:w-[320px] h-[350px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                      transition={{ duration: 0.4 }}
                      className={`w-full h-full rounded-3xl shadow-2xl ${
                        ['bg-[#8B8B8B]', 'bg-[#6B6B6B]', 'bg-[#4B4B4B]'][activeStep]
                      }`}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Progress Indicators with Navigation */}
            <div className="flex gap-3 justify-center items-center">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDragDirection(index > activeStep ? 1 : -1);
                    setActiveStep(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === activeStep
                      ? "w-16 bg-primary"
                      : "w-8 bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to ${steps[index].title}`}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            <p className="text-center text-sm text-foreground/50">
              Swipe left or right to navigate
            </p>
          </div>
        ) : (
          // Desktop Layout - Stacked Rotating Cards
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
                  const offset = index - activeStep;
                  
                  // Different shades for each card
                  const cardColors = [
                    'bg-[#8B8B8B]', // Card 1 - lightest gray
                    'bg-[#6B6B6B]', // Card 2 - medium gray
                    'bg-[#4B4B4B]', // Card 3 - darkest gray
                  ];
                  
                  // All cards stay visible, just rotate and offset
                  let rightOffset = 0;
                  let scale = 1;
                  let rotation = 0;
                  let zIndex = steps.length - Math.abs(offset);
                  
                  if (offset < 0) {
                    // Past cards: rotate to the left and stack behind
                    rightOffset = offset * 40;
                    rotation = offset * 8;
                    scale = 1 - (Math.abs(offset) * 0.05);
                    zIndex = steps.length + offset;
                  } else if (offset === 0) {
                    // Active card: front and center
                    rightOffset = 0;
                    rotation = 0;
                    scale = 1;
                    zIndex = steps.length;
                  } else {
                    // Future cards: rotate to the right and stack behind
                    rightOffset = offset * 40;
                    rotation = offset * 8;
                    scale = 1 - (offset * 0.05);
                    zIndex = steps.length - offset;
                  }

                  return (
                    <div
                      key={step.id}
                      className="absolute top-0 right-0 transition-all duration-700 ease-out"
                      style={{
                        transform: `translateX(${rightOffset}px) scale(${scale}) rotate(${rotation}deg)`,
                        transformOrigin: 'center center',
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
        )}
      </div>
    </section>
  );
}
