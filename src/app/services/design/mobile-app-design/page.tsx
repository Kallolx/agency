import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Smartphone, Layers, Zap, Users, RefreshCw, Shield } from "lucide-react";

export default function MobileAppDesignPage() {
  const features = [
    {
      icon: <Smartphone size={32} />,
      title: "Native Experience",
      description: "Designs optimized for iOS and Android platforms, following platform-specific guidelines and best practices.",
    },
    {
      icon: <Layers size={32} />,
      title: "Intuitive Navigation",
      description: "Seamless user journeys with clear navigation patterns that feel natural on mobile devices.",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Focused",
      description: "Lightweight designs that ensure fast loading times and smooth interactions on any device.",
    },
    {
      icon: <Users size={32} />,
      title: "User Testing",
      description: "Real user feedback and usability testing to validate and refine the mobile experience.",
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Cross-Platform Consistency",
      description: "Consistent brand experience across iOS, Android, and web while respecting platform conventions.",
    },
    {
      icon: <Shield size={32} />,
      title: "Accessibility First",
      description: "Inclusive designs that work for all users, meeting WCAG standards and platform accessibility guidelines.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy & Planning",
      description: "We start by understanding your target audience, business goals, and technical requirements to create a solid mobile strategy.",
    },
    {
      number: "02",
      title: "UX Research & Flows",
      description: "User research, persona creation, and user flow mapping to ensure we design for real user needs and behaviors.",
    },
    {
      number: "03",
      title: "UI Design & Prototyping",
      description: "High-fidelity designs for both iOS and Android, with interactive prototypes to demonstrate the user experience.",
    },
    {
      number: "04",
      title: "User Testing",
      description: "Usability testing with real users on actual devices to identify issues and opportunities for improvement.",
    },
    {
      number: "05",
      title: "Developer Handoff",
      description: "Detailed design specifications, assets, and ongoing support to ensure pixel-perfect implementation.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Design"
        title="Mobile App Design"
        description="Create mobile experiences that users love. We design beautiful, intuitive mobile apps for iOS and Android that engage users and drive business growth."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Let's build your next mobile app"
        description="Partner with us to design a mobile app that stands out in the app stores and delights your users."
      />
    </main>
  );
}
