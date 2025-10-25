import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Layout, Palette, Rocket, Search, Monitor, TrendingUp } from "lucide-react";

export default function WebsiteDesignPage() {
  const features = [
    {
      icon: <Layout size={32} />,
      title: "Responsive Design",
      description: "Beautiful websites that look perfect on every device, from mobile phones to large desktop screens.",
    },
    {
      icon: <Palette size={32} />,
      title: "Brand Alignment",
      description: "Designs that perfectly reflect your brand identity and create a memorable impression on visitors.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Conversion Optimized",
      description: "Strategic design elements and clear CTAs that guide visitors toward taking action.",
    },
    {
      icon: <Search size={32} />,
      title: "SEO Friendly",
      description: "Designs structured for search engine optimization, helping your site rank higher in search results.",
    },
    {
      icon: <Monitor size={32} />,
      title: "Modern & Clean",
      description: "Contemporary aesthetics with clean layouts that provide excellent user experience and readability.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Scalable Structure",
      description: "Flexible design systems that grow with your business and adapt to future needs.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery Workshop",
      description: "We learn about your business, target audience, competitors, and goals to establish a clear direction for the website design.",
    },
    {
      number: "02",
      title: "Sitemap & Wireframes",
      description: "Creating the information architecture and basic layouts to establish the structure and content hierarchy of your website.",
    },
    {
      number: "03",
      title: "Visual Design",
      description: "Crafting beautiful, on-brand designs with careful attention to typography, color, imagery, and spacing.",
    },
    {
      number: "04",
      title: "Feedback & Refinement",
      description: "Collaborative review sessions where we refine the design based on your feedback and business objectives.",
    },
    {
      number: "05",
      title: "Final Delivery",
      description: "Complete design files, style guides, and assets ready for development, with ongoing support as needed.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Design"
        title="Website Design"
        description="Elevate your online presence with a professionally designed website. We create stunning, conversion-focused websites that captivate visitors and grow your business."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Ready for a website that converts?"
        description="Let's create a website that not only looks amazing but also drives results for your business."
      />
    </main>
  );
}
