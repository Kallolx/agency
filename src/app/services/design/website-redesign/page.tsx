import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { RefreshCw, TrendingUp, Zap, Users, Target, Sparkles } from "lucide-react";

export default function WebsiteRedesignPage() {
  const features = [
    {
      icon: <RefreshCw size={32} />,
      title: "Modern Makeover",
      description: "Transform outdated designs into modern, fresh experiences that align with current design trends and best practices.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Improved Performance",
      description: "Redesigns focused on faster load times, better user experience, and higher conversion rates.",
    },
    {
      icon: <Zap size={32} />,
      title: "Enhanced Usability",
      description: "Streamlined navigation and improved user flows that make it easier for visitors to find what they need.",
    },
    {
      icon: <Users size={32} />,
      title: "User-Driven Approach",
      description: "Data and user feedback guide our redesign decisions, ensuring we solve real user pain points.",
    },
    {
      icon: <Target size={32} />,
      title: "Goal Alignment",
      description: "Every redesign element serves your business objectives, whether it's increasing leads, sales, or engagement.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Brand Evolution",
      description: "Refresh your visual identity while maintaining brand recognition and trust with your audience.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit & Analysis",
      description: "Comprehensive review of your current website, analyzing analytics, user behavior, and identifying areas for improvement.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Creating a redesign strategy based on insights, defining goals, target audience needs, and success metrics.",
    },
    {
      number: "03",
      title: "Design Exploration",
      description: "Multiple design concepts and directions to explore different approaches before committing to the final direction.",
    },
    {
      number: "04",
      title: "Redesign & Testing",
      description: "Full redesign implementation with user testing to ensure improvements in usability and conversion metrics.",
    },
    {
      number: "05",
      title: "Launch & Optimization",
      description: "Smooth transition to the new design with monitoring and optimization based on real-world performance data.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Design"
        title="Website Redesign"
        description="Breathe new life into your website. Our redesign services combine fresh aesthetics with improved functionality to boost engagement, conversions, and user satisfaction."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Time for a website refresh?"
        description="Let's transform your outdated website into a modern, high-performing digital experience."
      />
    </main>
  );
}
