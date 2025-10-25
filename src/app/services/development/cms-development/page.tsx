import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { FileEdit, Zap, Users, Smartphone, Search, Shield } from "lucide-react";

export default function CMSDevelopmentPage() {
  const features = [
    {
      icon: <FileEdit size={32} />,
      title: "Easy Content Management",
      description: "Intuitive admin interfaces that make it simple for your team to update and manage content.",
    },
    {
      icon: <Zap size={32} />,
      title: "Headless CMS",
      description: "Modern headless CMS solutions with WordPress, Contentful, Sanity, or Strapi for maximum flexibility.",
    },
    {
      icon: <Users size={32} />,
      title: "User Roles & Permissions",
      description: "Granular control over who can create, edit, and publish content across your organization.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Omnichannel Delivery",
      description: "Deliver content seamlessly across websites, mobile apps, and other digital platforms.",
    },
    {
      icon: <Search size={32} />,
      title: "SEO Friendly",
      description: "Built-in SEO tools and optimization features to help your content rank higher in search results.",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure & Reliable",
      description: "Regular updates, security patches, and backup systems to keep your content safe.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirements Gathering",
      description: "Understanding your content needs, workflows, user roles, and integration requirements.",
    },
    {
      number: "02",
      title: "CMS Selection",
      description: "Choosing the right CMS platform based on your needs, whether WordPress, headless CMS, or custom solution.",
    },
    {
      number: "03",
      title: "Custom Development",
      description: "Building custom themes, plugins, and features tailored to your specific requirements.",
    },
    {
      number: "04",
      title: "Migration & Setup",
      description: "Migrating existing content, setting up workflows, and configuring all necessary integrations.",
    },
    {
      number: "05",
      title: "Training & Support",
      description: "Comprehensive training for your team and ongoing support to ensure smooth operations.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Development"
        title="CMS Development"
        description="Take control of your content. We develop custom content management systems that empower your team to manage and publish content easily and efficiently."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Need a better CMS solution?"
        description="Let's build a content management system that fits your workflow and makes content management a breeze."
      />
    </main>
  );
}
