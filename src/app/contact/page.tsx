import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Contact />
      </main>
    </div>
  );
}
