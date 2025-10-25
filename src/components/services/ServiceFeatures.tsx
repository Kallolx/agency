"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

const FeatureCard = ({
  feature,
  index,
  progress,
  range,
  targetScale,
}: {
  feature: Feature;
  index: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Card colors - vibrant and modern like Services.tsx
  const cardColors = [
    "bg-primary",
    "bg-[#4A90E2]",
    "bg-[#50C878]",
    "bg-[#9B59B6]",
    "bg-[#E67E22]",
    "bg-[#E74C3C]",
  ];

  return (
    <div className="sticky top-0 flex items-center justify-center h-screen px-4">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={`relative w-full max-w-[95%] sm:max-w-[90%] lg:max-w-6xl ${
          cardColors[index % cardColors.length]
        } rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-16 origin-top`}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          {/* Left - Icon */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white [&>svg]:w-10 [&>svg]:h-10 sm:[&>svg]:w-12 sm:[&>svg]:h-12 lg:[&>svg]:w-16 lg:[&>svg]:h-16 [&>svg]:stroke-[1.5]">
              {feature.icon}
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 space-y-4 lg:space-y-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {feature.title}
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
              {feature.description}
            </p>
          </div>
        </div>

        {/* Card Number Badge */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-12 lg:right-12">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Key Features
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            Scroll to explore what makes this service exceptional
          </p>
        </motion.div>
      </div>

      {features.map((feature, i) => {
        // More aggressive scaling - cards scale down more as you scroll
        const targetScale = 1 - (features.length - i - 1) * 0.08;
        return (
          <FeatureCard
            key={i}
            feature={feature}
            index={i}
            progress={scrollYProgress}
            range={[i * (1 / features.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
