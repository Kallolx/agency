import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Sparkles, Palette, Users, Zap, Target, Repeat } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebAppDesignPage() {
  const features = [
    {
      icon: <Sparkles size={32} />,
      title: "User-Centric Design",
      description: "We prioritize user experience, creating intuitive interfaces that engage and delight your users.",
    },
    {
      icon: <Palette size={32} />,
      title: "Modern Aesthetics",
      description: "Clean, bold, and contemporary designs that align with your brand identity and stand out.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative Process",
      description: "We work closely with you throughout the design journey to ensure your vision comes to life.",
    },
    {
      icon: <Zap size={32} />,
      title: "Rapid Prototyping",
      description: "Quick iterations and interactive prototypes to validate ideas before development.",
    },
    {
      icon: <Target size={32} />,
      title: "Goal-Oriented",
      description: "Every design decision is made with your business objectives and user needs in mind.",
    },
    {
      icon: <Repeat size={32} />,
      title: "Iterative Refinement",
      description: "Continuous improvement based on feedback and testing to achieve perfection.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Research",
      description: "We dive deep into understanding your business, users, and goals. Through workshops and research, we uncover insights that drive meaningful design decisions.",
    },
    {
      number: "02",
      title: "Wireframing & Architecture",
      description: "We create low-fidelity wireframes to establish the information architecture and user flows, ensuring a solid foundation for your web app.",
    },
    {
      number: "03",
      title: "Visual Design",
      description: "Our designers craft beautiful, modern interfaces that reflect your brand while prioritizing usability and accessibility.",
    },
    {
      number: "04",
      title: "Prototyping & Testing",
      description: "Interactive prototypes bring the design to life. We conduct user testing to validate and refine the experience before development.",
    },
    {
      number: "05",
      title: "Handoff & Support",
      description: "Comprehensive design documentation and developer handoff ensure smooth implementation. We're here to support the development phase.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Design"
        title="Web App Design"
        description="Transform your ideas into stunning, user-friendly web applications. Our expert designers create intuitive interfaces that drive engagement and deliver exceptional user experiences."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Ready to create an amazing web app?"
        description="Let's collaborate to design a web application that your users will love and that drives your business forward."
      />
    </main>
  );
}
