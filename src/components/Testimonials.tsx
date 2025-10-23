"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  achievements: string[];
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  sectionTitle?: string;
}

export default function Testimonials({
  testimonials,
  sectionTitle,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Navigation */}
        {sectionTitle && (
          <div className="flex items-center justify-between mb-12 lg:mb-16">
            {/* Title on Left */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
              {sectionTitle}
            </h2>

            {/* Arrows on Right */}
            <div className="flex items-center gap-3">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground/10 hover:bg-primary transition-all duration-300 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground/10 hover:bg-primary transition-all duration-300 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 lg:space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 lg:space-y-6"
              >
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {testimonials[currentIndex].title}
                </h2>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80">
                  {testimonials[currentIndex].subtitle}
                </p>

                {/* Achievements with star bullets */}
                <div className="space-y-3 lg:space-y-4 pt-4">
                  {testimonials[currentIndex].achievements.map(
                    (achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 lg:gap-4"
                      >
                        {/* Star Icon */}
                        <div className="flex-shrink-0 mt-1">
                          <svg
                            className="w-6 h-6 lg:w-7 lg:h-7 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-base sm:text-lg lg:text-xl text-foreground font-light leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Progress Indicators - centered */}
        <div className="flex justify-center pt-12">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
