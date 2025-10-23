"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const services = [
  {
    id: 1,
    title: "DESIGN",
    bgColor: "bg-primary",
    items: [
      "Web app design",
      "Mobile app design",
      "Website design",
      "SaaS design",
      "Website Redesign",
      "Brand Identity",
    ],
  },
  {
    id: 2,
    title: "DEVELOPMENT",
    bgColor: "bg-[#4A90E2]",
    items: [
      "Web development",
      "E-commerce",
      "API integration",
      "Mobile apps",
      "Custom software",
      "Cloud solutions",
    ],
  },
  {
    id: 3,
    title: "MARKETING",
    bgColor: "bg-[#50C878]",
    items: [
      "SEO optimization",
      "Content strategy",
      "Brand positioning",
      "Social media",
      "Email campaigns",
      "Analytics",
    ],
  },
  {
    id: 4,
    title: "STRATEGY",
    bgColor: "bg-[#9B59B6]",
    items: [
      "Business consulting",
      "Product strategy",
      "Digital transformation",
      "Market research",
      "Growth planning",
      "Innovation",
    ],
  },
];

const ServiceCard = ({
  service,
  index,
  progress,
  range,
  targetScale,
}: {
  service: typeof services[0];
  index: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center h-screen px-4">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={`relative w-full max-w-[95%] sm:max-w-[90%] lg:max-w-6xl ${service.bgColor} rounded-t-[50px] lg:rounded-t-[80px] rounded-b-[5px] lg:rounded-b-[10px] shadow-2xl p-8 sm:p-10 lg:p-12 origin-top`}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
          {/* Left Content */}
          <div className="flex-1 space-y-6 lg:space-y-8">
            {/* Circle Icon and Title */}
            <div className="flex items-center gap-4 lg:gap-5 -mt-10 mb-10">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white flex-shrink-0"></div>
              <h3 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white uppercase leading-none">
                {service.title}
              </h3>
            </div>

            {/* Service Items in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-3 lg:gap-y-4">
              {service.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 lg:w-5 lg:h-5 rounded-full bg-white flex-shrink-0"></div>
                  <span className="text-white text-base sm:text-xl lg:text-2xl font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="hidden lg:block w-full lg:w-[350px] h-[250px] lg:h-[280px]">
            <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center">
              <span className="text-white text-lg opacity-50">Service Image</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile horizontal scroll view
  if (isMobile) {
    return (
      <section className="relative bg-background py-16 sm:py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary text-center mb-8 sm:mb-12">
            Our Services
          </h2>
          
          {/* Horizontal scrollable container */}
          <div className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 sm:gap-6 min-w-max">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`${service.bgColor} rounded-3xl p-6 sm:p-8 shadow-xl w-[280px] sm:w-[320px] flex-shrink-0`}
                >
                  {/* Circle Icon and Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex-shrink-0"></div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Service Items */}
                  <div className="space-y-3">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
                        <span className="text-white text-sm sm:text-base font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop sticky scroll view
  return (
    <main ref={container} className="relative bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary text-center">
          Our Services
        </h2>
      </div>

      {services.map((service, i) => {
        const targetScale = Math.max(0.85, 1 - (services.length - i - 1) * 0.05);
        return (
          <ServiceCard
            key={service.id}
            service={service}
            index={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
