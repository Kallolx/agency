"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  // optional image URL to show beside the title/description
  image?: string;
}

interface ServiceProcessProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export default function ServiceProcess({
  title = "Our Process",
  subtitle = "A proven approach to delivering exceptional results",
  steps,
}: ServiceProcessProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Process steps - Desktop vertical timeline (centered column) */}
        <div className="hidden lg:block relative">
          {/* Connecting line - centered in parent */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2" />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative grid grid-cols-[1fr_80px_1fr] items-center py-8"
              >
                {/* Left content (for odd rows) */}
                {index % 2 === 0 ? (
                  <div className="text-right pr-12 relative">
                    <div className="flex items-center justify-end gap-6">
                      {/* Text block */}
                      <div className="max-w-[56ch]">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Image or placeholder - on the outside edge */}
                      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-primary" />
                    </div>

                    {/* connector to center */}
                    <span className="absolute right-0 top-1/2 w-[56px] h-[2px] bg-border transform translate-x-6 -translate-y-1/2" />
                  </div>
                ) : (
                  <div />
                )}

                {/* Center column - badge */}
                <div className="flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.15, duration: 0.45, type: "spring" }}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg ring-4 ring-background z-10"
                  >
                    <span className="text-base sm:text-lg font-bold text-white">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Right content (for even rows) */}
                {index % 2 === 1 ? (
                  <div className="pl-12 relative">
                    {/* connector to center */}
                    <span className="absolute left-0 top-1/2 w-[56px] h-[2px] bg-border transform -translate-x-6 -translate-y-1/2" />

                    <div className="flex items-center gap-6">
                      {/* Image or placeholder */}
                      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-primary" />

                      <div className="">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process steps - Mobile/Tablet horizontal flow */}
        <div className="lg:hidden relative">
          {/* Horizontal connecting line */}
          <div className="absolute top-8 left-8 right-8 h-0.5 bg-border" />

          <div className="relative space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex gap-6 items-start"
              >
                {/* Number badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.4, type: "spring" }}
                  className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg ring-4 ring-background z-10"
                >
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </motion.div>

                {/* Content (with small image on mobile stacked above text) */}
                <div className="flex-1 space-y-2 pt-1">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-primary" />

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
