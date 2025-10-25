import ServiceHero from "@/components/services/ServiceHero";
import CategoryServicesGrid from "@/components/services/CategoryServicesGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DevelopmentPage() {
  const services = [
    {
      title: "Web App Development",
      description: "Transform your ideas into powerful web applications with scalable, high-performance solutions that solve real problems.",
      href: "/services/development/web-app-development",
    },
    {
      title: "Mobile App Development",
      description: "Build high-quality iOS and Android applications that combine beautiful design with powerful functionality.",
      href: "/services/development/mobile-app-development",
    },
    {
      title: "Website Development",
      description: "Develop fast, secure, and SEO-friendly websites that look amazing and deliver measurable business results.",
      href: "/services/development/website-development",
    },
    {
      title: "Blockchain Development",
      description: "Build secure, scalable decentralized applications and smart contracts that revolutionize how business is done.",
      href: "/services/development/blockchain-development",
    },
    {
      title: "Backend Development",
      description: "Power your applications with robust backend systems that handle complex business logic and data operations.",
      href: "/services/development/backend-development",
    },
    {
      title: "CMS Development",
      description: "Develop custom content management systems that empower your team to manage and publish content easily.",
      href: "/services/development/cms-development",
    },
  ];

  return (
    <main>
      <Navbar />
      <ServiceHero
        category="Services"
        title="Development"
        description="We build robust, scalable applications that power your business. From web and mobile apps to blockchain solutions, our development services turn your vision into reality with cutting-edge technology."
      />
      <CategoryServicesGrid services={services} />
      <ServiceCTA
        title="Ready to build something amazing?"
        description="Let's transform your ideas into powerful applications. Our development team is ready to bring your project to life."
      />
      <Footer />  
    </main>
  );
}
