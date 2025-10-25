import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Globe, Zap, Search, Smartphone, Code, TrendingUp } from "lucide-react";

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      icon: <Globe size={32} />,
      title: "Modern Frameworks",
      description: "Built with Next.js, React, and other modern technologies for exceptional performance and user experience.",
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description: "Optimized for speed with fast loading times, improving user experience and search rankings.",
    },
    {
      icon: <Search size={32} />,
      title: "SEO Optimized",
      description: "Built with SEO best practices to help your website rank higher in search engine results.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Fully Responsive",
      description: "Perfect display on all devices from mobile phones to large desktop screens.",
    },
    {
      icon: <Code size={32} />,
      title: "Clean Code",
      description: "Well-structured, maintainable code following industry standards and best practices.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Conversion Focused",
      description: "Strategic implementation of CTAs and conversion optimization techniques to drive results.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your business, goals, and requirements to create a comprehensive development plan.",
    },
    {
      number: "02",
      title: "Design Integration",
      description: "Transforming approved designs into pixel-perfect, responsive HTML/CSS with attention to detail.",
    },
    {
      number: "03",
      title: "Development",
      description: "Building your website with clean, efficient code and integrating all necessary features and functionality.",
    },
    {
      number: "04",
      title: "Testing & Refinement",
      description: "Thorough testing across browsers and devices, fixing bugs, and optimizing performance.",
    },
    {
      number: "05",
      title: "Launch & Training",
      description: "Deploying your website, providing training on content management, and offering ongoing support.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Development"
        title="Website Development"
        description="Bring your website vision to life. We develop fast, secure, and SEO-friendly websites that look amazing and deliver measurable business results."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Ready to launch your website?"
        description="Let's build a high-performance website that represents your brand and achieves your goals."
      />
    </main>
  );
}
