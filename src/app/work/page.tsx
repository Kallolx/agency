"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import Navbar from "@/components/Navbar";

// Work projects with comprehensive details
const workProjects = [
  {
    id: 1,
    title: "Global Tech Gadget Launch",
    category: "INFLUENCER MARKETING",
    description:
      "Executed a multi-platform influencer campaign that generated over 50 million impressions and drove a 300% surge in pre-orders for a cutting-edge smart gadget. Leveraging micro and macro influencers across TikTok, Instagram, and YouTube to create authentic product experiences.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop",
    liveUrl: "https://example.com/project1",
    stats: ["50M+ Impressions", "300% Pre-orders", "15 Influencers"],
  },
  {
    id: 2,
    title: "Heritage Automotive Brand",
    category: "BRAND STRATEGY & UX/UI",
    description:
      "We redefined the digital brand identity and completely redesigned the main corporate website, resulting in a 45% increase in lead generation and test drive bookings. Modern design language meets timeless automotive heritage.",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=800&fit=crop",
    liveUrl: "https://example.com/project2",
    stats: ["45% Lead Growth", "65% Engagement", "Award Winning"],
  },
  {
    id: 3,
    title: "Healthcare Patient Portal",
    category: "DATA & ANALYTICS",
    description:
      "Implemented an advanced data analytics pipeline and personalized ad strategy, reducing cost-per-acquisition by 60% and increasing patient enrollment by 75%. Real-time dashboards and predictive analytics for healthcare decision-making.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    liveUrl: "https://example.com/project3",
    stats: ["60% Lower CPA", "75% More Patients", "AI-Powered"],
  },
  {
    id: 4,
    title: "Next-Gen Fitness Platform",
    category: "MOBILE APP DEVELOPMENT",
    description:
      "Designed and developed a highly-rated mobile fitness application with integrated AI coaching, achieving over 1 million downloads in the first year. Features include personalized workout plans, nutrition tracking, and real-time performance analytics.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=800&fit=crop",
    liveUrl: "https://example.com/project4",
    stats: ["1M+ Downloads", "4.8★ Rating", "AI Coaching"],
  },
  {
    id: 5,
    title: "Fintech Thought Leadership",
    category: "CONTENT MARKETING",
    description:
      "Developed a comprehensive content strategy producing high-value whitepapers and webinars that positioned a Fintech client as a key industry leader, boosting B2B leads by 120%. Strategic storytelling that converts prospects into partners.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
    liveUrl: "https://example.com/project5",
    stats: ["120% B2B Leads", "15 Whitepapers", "Industry Leader"],
  },
  {
    id: 6,
    title: "E-commerce Revolution",
    category: "WEB DEVELOPMENT & UX",
    description:
      "Complete platform redesign resulting in a 350% increase in conversion rate. Streamlined checkout process, personalized product recommendations, and lightning-fast performance. Built with modern tech stack for scalability and future growth.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
    liveUrl: "https://example.com/project6",
    stats: ["350% Conversion", "2s Load Time", "99.9% Uptime"],
  },
];

export default function WorkPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-background pt-24 pb-20">
      <Navbar />
      {/* Hero Section */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2 lg:py-4 mb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tighter">
            Work That
            <br />
            <span className="text-primary">Delivers Results</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Real projects. Real impact. Real success stories.
          </p>
        </motion.div>
      </section>

      {/* Projects List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-20">
        {workProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
              index % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              className={`relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-muted ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
              />

              {/* View Project Button on Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0,
                  y: hoveredId === project.id ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Link href={project.liveUrl} target="_blank">
                  <Button>
                    <span>View Live Project</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block text-xs sm:text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  {project.category}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  {project.title}
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg lg:text-xl text-foreground/70 leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 pt-4"
              >
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                      {stat.split(" ")[0]}
                    </div>
                    <div className="text-xs sm:text-sm text-foreground/60 font-medium">
                      {stat.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <Link href={project.liveUrl} target="_blank">
                  <Button variant="primary" className="text-base px-6 py-3">
                    <span>Preview Live</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="default" className="text-base px-6 py-3">
                  <Play className="w-5 h-5" />
                  <span>Case Study</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 sm:p-12 lg:p-16 text-center">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Ready to see your vision come to life? Let's talk about your next
              big project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-white/90 transition-colors text-base">
                  Start Your Project
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors backdrop-blur-sm text-base">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </motion.section>
    </main>
  );
}
