"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";

interface HeroImage {
  src: string;
  alt?: string;
}

interface ServiceHeroProps {
  category: string;
  title: string;
  description: string;
  /** Optional images to show inside the laptop mockup on the right */
  images?: HeroImage[];
}

export default function ServiceHero({ category, title, description, images = [] }: ServiceHeroProps) {
  const [active, setActive] = useState(0);

  // Auto-advance images if provided
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const t = setInterval(() => {
      setActive((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(t);
  }, [images]);

  return (
  <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <Navbar />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Text */}
          <div className="text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
                {category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl -mt-4 sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tighter max-w-4xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-3xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              <Button variant="primary">Get Started</Button>
              <Button variant="default">View Our Work</Button>
            </motion.div>
          </div>

          {/* Right - Laptop mockup with images (only on large screens) */}
          <div className="hidden lg:flex items-center justify-end">
            <motion.div className="relative w-full max-w-[540px] perspective-1000" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="relative">
                <motion.div className="relative bg-[#1a1a1a] rounded-t-[12px] p-2 shadow-2xl">
                  {/* Camera notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[50px] h-[12px] bg-[#0d0d0d] rounded-full z-20 flex items-center justify-center">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#2a2a2a] border border-[#404040]" />
                  </div>

                  {/* Screen area */}
                  <div className="relative w-full h-[340px] bg-black rounded-[12px] overflow-hidden">
                    {images && images.length > 0 ? (
                      images.map((img, idx) => (
                        <motion.div
                          key={img.src + idx}
                          initial={false}
                          animate={{
                            y: idx === active ? 0 : idx < active ? '-100%' : '100%',
                            opacity: idx === active ? 1 : 0,
                          }}
                          transition={{ y: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                          className="absolute inset-0"
                        >
                          <div className="relative w-full h-full">
                            <Image src={img.src} alt={img.alt ?? ''} fill className="object-cover" sizes="(max-width: 1024px) 380px, 580px" priority={idx === 0} />
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                        <span className="text-foreground/50 text-sm">Preview</span>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Laptop base */}
                <div className="relative h-[18px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-[12px] shadow-lg mt-2">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-black/40" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
