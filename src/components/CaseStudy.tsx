"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./ui/Button";
import Image from "next/image";

interface CaseStudyProject {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  buttons?: {
    primary?: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
}

interface CaseStudyProps {
  projects: CaseStudyProject[];
  sectionTitle?: string;
}

export default function CaseStudy({ projects, sectionTitle }: CaseStudyProps) {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Safety check
  if (!projects || projects.length === 0) {
    return null;
  }

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to image index (for instant image changes)
  const activeImageIndex = useTransform(scrollYProgress, (progress) => {
    return Math.min(Math.floor(progress * projects.length), projects.length - 1);
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section (more sensitive)
      const visibleTop = Math.max(0, -rect.top);
      const progress = Math.max(
        0,
        Math.min(1, visibleTop / (sectionHeight - viewportHeight))
      );

      const adjustedProgress = progress * 1.2 - 0.1; // Adjust sensitivity
      
      // Determine active project based on adjusted progress
      const projectIndex = Math.max(
        0,
        Math.min(
          Math.floor(adjustedProgress * projects.length),
          projects.length - 1
        )
      );
      
      // Set direction based on whether we're moving forward or backward
      if (projectIndex > activeProject) {
        setDirection(1); // moving forward
      } else if (projectIndex < activeProject) {
        setDirection(-1); // moving backward
      }
      
      setActiveProject(projectIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: `${projects.length * 60}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div
          ref={containerRef}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Text that changes */}
            <div className="space-y-4 lg:space-y-8">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-3 lg:space-y-6"
              >
                <span className="text-xs sm:text-sm lg:text-base text-foreground/60 uppercase tracking-wider">
                  {projects[activeProject].category}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-foreground leading-tighter">
                  {projects[activeProject].title}
                </h3>

                <p className="text-sm sm:text-base lg:text-2xl text-foreground/80 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                {/* Buttons */}
                {projects[activeProject].buttons && (
                  <div className="flex flex-wrap gap-3 pt-2 lg:pt-4">
                    {projects[activeProject].buttons?.primary && (
                      <Button variant="primary">
                        {projects[activeProject].buttons.primary.text}
                      </Button>
                    )}
                    {projects[activeProject].buttons?.secondary && (
                      <Button variant="default">
                        {projects[activeProject].buttons.secondary.text}
                      </Button>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Progress Indicators */}
              <div className="flex gap-2 pt-2 lg:pt-4">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === activeProject
                        ? "w-12 lg:w-16 bg-primary"
                        : "w-6 lg:w-8 bg-foreground/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Laptop with Scrolling Images */}
            <div className="flex items-center justify-center lg:justify-end">
              <motion.div 
                className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[580px] perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Laptop Screen */}
                <div className="relative">
                  {/* Screen Frame */}
                  <motion.div 
                    className="relative bg-[#1a1a1a] rounded-t-[8px] sm:rounded-t-[12px] lg:rounded-t-[16px] p-1.5 sm:p-2 shadow-2xl"
                  >
                    {/* Camera Notch/Hole */}
                    <div className="absolute top-2 sm:top-3 lg:top-4 left-1/2 -translate-x-1/2 w-[40px] sm:w-[50px] lg:w-[60px] h-[12px] sm:h-[14px] lg:h-[16px] bg-[#0d0d0d] rounded-full z-20 flex items-center justify-center">
                      <motion.div 
                        className="w-[4px] sm:w-[5px] lg:w-[6px] h-[4px] sm:h-[5px] lg:h-[6px] rounded-full bg-[#2a2a2a] border border-[#404040]"
                      ></motion.div>
                    </div>
                    
                    {/* Screen Area with Images */}
                    <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[420px] bg-black rounded-[6px] sm:rounded-[8px] lg:rounded-[12px] overflow-hidden">
                      {/* Images - vertical slide transition effect */}
                      {projects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={false}
                          animate={{
                            y: index === activeProject ? 0 : index < activeProject ? '-100%' : '100%',
                            opacity: index === activeProject ? 1 : 0,
                          }}
                          transition={{
                            y: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                          }}
                          className="absolute inset-0"
                        >
                          <div className="relative w-full h-full">
                            {/* Image with Next.js Image component */}
                            {project.image ? (
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 580px"
                                priority={index === 0}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                                <span className="text-foreground/50 text-sm lg:text-lg">
                                  {project.title}
                                </span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Laptop Base/Keyboard */}
                  <div className="relative h-[14px] sm:h-[18px] lg:h-[24px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-[6px] sm:rounded-b-[8px] lg:rounded-b-[12px] shadow-lg">
                    {/* Hinge shadow */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] sm:h-[1.5px] lg:h-[2px] bg-black/40"></div>
                    {/* Trackpad indicator */}
                    <div className="absolute bottom-0.5 sm:bottom-1 left-1/2 -translate-x-1/2 w-[40px] sm:w-[60px] lg:w-[80px] h-[6px] sm:h-[8px] lg:h-[10px] bg-[#151515] rounded-sm"></div>
                  </div>
                  
                  {/* Laptop Bottom Stand */}
                  <div className="relative">
                    <div className="mx-auto w-[90%] h-[3px] sm:h-[4px] lg:h-[6px] bg-gradient-to-b from-[#1a1a1a] to-transparent rounded-b-[4px] sm:rounded-b-[6px]"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
