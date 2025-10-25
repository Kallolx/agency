import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Palette, Sparkles, Image, FileText, Layout, Package } from "lucide-react";

export default function GraphicDesignPage() {
  const features = [
    {
      icon: <Palette size={32} />,
      title: "Creative Excellence",
      description: "Eye-catching designs that communicate your message effectively and leave a lasting impression.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Versatile Solutions",
      description: "From social media graphics to print materials, we cover all your graphic design needs.",
    },
    {
      icon: <Image size={32} />,
      title: "Visual Storytelling",
      description: "Compelling visuals that tell your story and convey complex ideas in an instantly understandable way.",
    },
    {
      icon: <FileText size={32} />,
      title: "Marketing Materials",
      description: "Brochures, flyers, presentations, and promotional materials that drive engagement and conversions.",
    },
    {
      icon: <Layout size={32} />,
      title: "Digital & Print",
      description: "Designs optimized for both digital platforms and print production with proper specifications.",
    },
    {
      icon: <Package size={32} />,
      title: "Brand Consistency",
      description: "All designs align with your brand guidelines to maintain a cohesive visual identity.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Brief & Requirements",
      description: "Understanding your project goals, target audience, message, and any specific requirements or constraints.",
    },
    {
      number: "02",
      title: "Concept Development",
      description: "Brainstorming creative concepts and developing initial design directions that align with your objectives.",
    },
    {
      number: "03",
      title: "Design Creation",
      description: "Crafting high-quality designs with attention to typography, color, imagery, and composition.",
    },
    {
      number: "04",
      title: "Review & Revisions",
      description: "Presenting designs for your feedback and making refinements to ensure complete satisfaction.",
    },
    {
      number: "05",
      title: "Final Delivery",
      description: "Delivering final files in all required formats, optimized for both digital use and print production.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Design"
        title="Graphic Design"
        description="Bring your vision to life with stunning graphic design. We create impactful visual content for all your marketing, branding, and communication needs."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Need amazing graphics?"
        description="Let's create compelling visual content that captures attention and communicates your message effectively."
      />
    </main>
  );
}
