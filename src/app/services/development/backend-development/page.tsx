import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Server, Zap, Shield, Database, Cloud, Code } from "lucide-react";

export default function BackendDevelopmentPage() {
  const features = [
    {
      icon: <Server size={32} />,
      title: "RESTful APIs",
      description: "Well-designed, documented APIs that power your applications with reliable data and functionality.",
    },
    {
      icon: <Zap size={32} />,
      title: "High Performance",
      description: "Optimized backend systems built for speed, efficiency, and handling high traffic volumes.",
    },
    {
      icon: <Shield size={32} />,
      title: "Robust Security",
      description: "Enterprise-grade security with authentication, authorization, encryption, and vulnerability protection.",
    },
    {
      icon: <Database size={32} />,
      title: "Database Design",
      description: "Efficient database architecture with PostgreSQL, MongoDB, MySQL, and other modern databases.",
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Infrastructure",
      description: "Scalable deployment on AWS, Google Cloud, Azure, or other cloud platforms.",
    },
    {
      icon: <Code size={32} />,
      title: "Modern Tech Stack",
      description: "Built with Node.js, Python, Go, or other cutting-edge backend technologies.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirements Analysis",
      description: "Understanding your data models, business logic, integrations, and scalability requirements.",
    },
    {
      number: "02",
      title: "Architecture Planning",
      description: "Designing the system architecture, API structure, database schema, and technology selection.",
    },
    {
      number: "03",
      title: "Development",
      description: "Building robust backend services with clean code, comprehensive documentation, and best practices.",
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "Unit testing, integration testing, load testing, and performance optimization.",
    },
    {
      number: "05",
      title: "Deployment & Monitoring",
      description: "Production deployment with CI/CD pipelines, monitoring, logging, and ongoing maintenance.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Development"
        title="Backend Development"
        description="Power your applications with robust backend systems. We build scalable, secure server-side solutions that handle complex business logic and data operations."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Need a powerful backend?"
        description="Let's build a backend infrastructure that scales with your business and delivers exceptional performance."
      />
    </main>
  );
}
