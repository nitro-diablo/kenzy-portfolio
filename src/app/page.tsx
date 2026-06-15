import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueProps />
      <Portfolio />
      <Services />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  );
}
