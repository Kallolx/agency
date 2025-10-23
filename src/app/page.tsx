import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import { caseStudyProjects } from "@/data/caseStudies";
import Testimonials from "@/components/Testimonials";
import { testimonials } from "@/data/testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudy projects={caseStudyProjects}/>
        <Testimonials testimonials={testimonials} sectionTitle="Softune's Impact" />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
