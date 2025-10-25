"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CategoryService {
  title: string;
  description: string;
  href: string;
}

interface CategoryServicesGridProps {
  services: CategoryService[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CategoryServicesGrid({ services }: CategoryServicesGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              variants={itemVariants}
            >
              <Link href={service.href}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative h-full bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
                >
                  {/* Number badge */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="pr-16">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      Learn More
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
