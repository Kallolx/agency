import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Palette, Eye, Heart, Layers, BookOpen, Award } from "lucide-react";

export default function BrandIdentityPage() {
  const features = [
    {
      icon: <Palette size={32} />,
      title: "Unique Visual Identity",
      description: "Distinctive brand elements including logos, color palettes, and typography that set you apart from competitors.",
    },
    {
      icon: <Eye size={32} />,
      title: "Memorable Design",
      description: "Creating visual identities that leave a lasting impression and build instant brand recognition.",
    },
    {
      icon: <Heart size={32} />,
      title: "Emotional Connection",
      description: "Designs that resonate with your target audience and evoke the right emotions aligned with your brand values.",
    },
    {
      icon: <Layers size={32} />,
      title: "Complete Brand System",
      description: "Comprehensive brand guidelines covering logo usage, colors, typography, imagery, and more.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Brand Story",
      description: "Articulating your brand narrative and positioning to create meaningful connections with your audience.",
    },
    {
      icon: <Award size={32} />,
      title: "Professional Quality",
      description: "Polished, professional brand assets that elevate your business and inspire confidence.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Brand Discovery",
      description: "Deep dive into your business, values, target audience, and market landscape to understand what makes you unique.",
    },
    {
      number: "02",
      title: "Strategy & Positioning",
      description: "Defining your brand personality, voice, positioning, and key messages that will guide all visual decisions.",
    },
    {
      number: "03",
      title: "Visual Exploration",
      description: "Creating multiple design directions and concepts to explore different visual approaches for your brand.",
    },
    {
      number: "04",
      title: "Refinement & System",
      description: "Developing the chosen direction into a complete brand identity system with all necessary assets and variations.",
    },
    {
      number: "05",
      title: "Guidelines & Launch",
      description: "Comprehensive brand guidelines documentation and support for implementing your new identity across all touchpoints.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Design"
        title="Brand Identity"
        description="Build a powerful brand that stands out. We create distinctive, memorable brand identities that capture your essence and connect with your audience on a deeper level."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Ready to define your brand?"
        description="Let's create a brand identity that tells your story and positions you for success in your market."
      />
    </main>
  );
}
