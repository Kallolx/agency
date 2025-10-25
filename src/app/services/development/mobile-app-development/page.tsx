import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Smartphone, Zap, Users, Cloud, Bell, Lock } from "lucide-react";

export default function MobileAppDevelopmentPage() {
  const features = [
    {
      icon: <Smartphone size={32} />,
      title: "Native & Cross-Platform",
      description: "iOS, Android, or cross-platform solutions using React Native or Flutter for maximum reach.",
    },
    {
      icon: <Zap size={32} />,
      title: "Smooth Performance",
      description: "Optimized for native performance with smooth animations and responsive interactions.",
    },
    {
      icon: <Users size={32} />,
      title: "Intuitive UX",
      description: "User-friendly interfaces following platform guidelines for familiar, easy-to-use experiences.",
    },
    {
      icon: <Cloud size={32} />,
      title: "Backend Integration",
      description: "Seamless integration with APIs, databases, and cloud services for powerful functionality.",
    },
    {
      icon: <Bell size={32} />,
      title: "Push Notifications",
      description: "Engage users with timely push notifications and in-app messaging systems.",
    },
    {
      icon: <Lock size={32} />,
      title: "Security First",
      description: "Robust security measures including data encryption, secure authentication, and API protection.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy & Planning",
      description: "Defining app features, target platforms, technical requirements, and development approach.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating detailed mockups and interactive prototypes for both iOS and Android platforms.",
    },
    {
      number: "03",
      title: "Development",
      description: "Building the app with clean, maintainable code following best practices and platform guidelines.",
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing on real devices, performance optimization, and bug fixing for smooth operation.",
    },
    {
      number: "05",
      title: "Launch & Maintenance",
      description: "App store submission, launch support, and ongoing updates to keep your app running perfectly.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Development"
        title="Mobile App Development"
        description="Build mobile apps that users love. We develop high-quality iOS and Android applications that combine beautiful design with powerful functionality."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Let's create your mobile app"
        description="Partner with us to develop a mobile app that engages users and achieves your business goals."
      />
    </main>
  );
}
