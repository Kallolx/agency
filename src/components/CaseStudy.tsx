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
            <div className="space-y-6 lg:space-y-8">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 lg:space-y-6"
              >
                <span className="text-sm sm:text-base text-foreground/60 uppercase tracking-wider">
                  {projects[activeProject].category}
                </span>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tighter">
                  {projects[activeProject].title}
                </h3>

                <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                {/* Buttons */}
                {projects[activeProject].buttons && (
                  <div className="flex flex-wrap gap-4 pt-4">
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
              <div className="flex gap-2 pt-4">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === activeProject
                        ? "w-16 bg-primary"
                        : "w-8 bg-foreground/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Phone with Scrolling Images */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-[240px] sm:w-[280px] lg:w-[300px] h-[480px] sm:h-[560px] lg:h-[600px]">
                {/* Custom Phone Frame */}
                <div className="absolute inset-0 bg-[#1a1a1a] rounded-[40px] sm:rounded-[45px] lg:rounded-[50px] p-2.5 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-[#1a1a1a] rounded-b-[18px] z-20"></div>
                  
                  {/* Screen Area with Images */}
                  <div className="relative w-full h-full bg-black rounded-[32px] sm:rounded-[37px] lg:rounded-[42px] overflow-hidden">
                    {/* Images - only show active one */}
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === activeProject ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
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
                              sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 300px"
                              priority={index === 0}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                              <span className="text-foreground/50 text-lg">
                                {project.title}
                              </span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Power Button */}
                  <div className="absolute right-0 top-[100px] w-[3px] h-[60px] bg-[#0d0d0d] rounded-l-sm"></div>
                  
                  {/* Volume Buttons */}
                  <div className="absolute left-0 top-[80px] w-[3px] h-[40px] bg-[#0d0d0d] rounded-r-sm"></div>
                  <div className="absolute left-0 top-[130px] w-[3px] h-[40px] bg-[#0d0d0d] rounded-r-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
