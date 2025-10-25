import ServiceHero from "@/components/services/ServiceHero";
import CategoryServicesGrid from "@/components/services/CategoryServicesGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DesignPage() {
  const services = [
    {
      title: "Web App Design",
      description: "Transform your ideas into stunning, user-friendly web applications with intuitive interfaces that drive engagement.",
      href: "/services/design/web-app-design",
    },
    {
      title: "Mobile App Design",
      description: "Create mobile experiences that users love with beautiful, intuitive designs for iOS and Android platforms.",
      href: "/services/design/mobile-app-design",
    },
    {
      title: "Website Design",
      description: "Elevate your online presence with professionally designed websites that captivate visitors and drive conversions.",
      href: "/services/design/website-design",
    },
    {
      title: "Website Redesign",
      description: "Breathe new life into your website with modern designs that improve user experience and boost performance.",
      href: "/services/design/website-redesign",
    },
    {
      title: "Brand Identity",
      description: "Build a powerful brand with distinctive visual identities that capture your essence and connect with your audience.",
      href: "/services/design/brand-identity",
    },
    {
      title: "Graphic Design",
      description: "Bring your vision to life with impactful visual content for all your marketing and communication needs.",
      href: "/services/design/graphic-design",
    },
  ];

  return (
    <main>
      <Navbar />
      <ServiceHero
        category="Services"
        title="Design"
        description="We create beautiful, functional designs that captivate users and drive business growth. From web and mobile apps to brand identities, our design services combine aesthetics with strategy."
      />
      <CategoryServicesGrid services={services} />
      <ServiceCTA
        title="Ready to elevate your design?"
        description="Let's create something amazing together. Our design team is ready to bring your vision to life."
      />
      <Footer />
    </main>
  );
}
