import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Code, Zap, Shield, Layers, Cloud, RefreshCw } from "lucide-react";

export default function WebAppDevelopmentPage() {
  const features = [
    {
      icon: <Code size={32} />,
      title: "Modern Tech Stack",
      description: "Built with cutting-edge technologies like React, Next.js, Node.js, and other industry-leading frameworks.",
    },
    {
      icon: <Zap size={32} />,
      title: "High Performance",
      description: "Optimized for speed and efficiency with fast loading times and smooth user interactions.",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security practices and robust architecture to protect your data and users.",
    },
    {
      icon: <Layers size={32} />,
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased traffic and features without compromise.",
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud-Native",
      description: "Deployed on modern cloud infrastructure for maximum reliability, performance, and scalability.",
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Agile Development",
      description: "Iterative development process with regular updates and continuous improvement based on feedback.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirements & Planning",
      description: "Detailed analysis of your needs, defining features, technical requirements, and project roadmap.",
    },
    {
      number: "02",
      title: "Architecture Design",
      description: "Planning the technical architecture, database structure, API design, and technology stack selection.",
    },
    {
      number: "03",
      title: "Development Sprints",
      description: "Agile development in iterative sprints, with regular demos and opportunities for feedback and adjustments.",
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Comprehensive testing including unit tests, integration tests, and end-to-end testing for quality assurance.",
    },
    {
      number: "05",
      title: "Deployment & Support",
      description: "Smooth deployment to production with monitoring, ongoing maintenance, and feature enhancements.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Development"
        title="Web App Development"
        description="Transform your ideas into powerful web applications. We build scalable, high-performance web apps that solve real problems and deliver exceptional user experiences."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Ready to build your web app?"
        description="Let's turn your vision into a robust, scalable web application that drives your business forward."
      />
    </main>
  );
}
