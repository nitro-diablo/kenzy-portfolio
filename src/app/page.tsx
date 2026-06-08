import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FanFavorites from "@/components/FanFavorites";
import GlutenFree from "@/components/GlutenFree";
import Menu from "@/components/Menu";
import OrderCTA from "@/components/OrderCTA";
import Testimonials from "@/components/Testimonials";
import Reservations from "@/components/Reservations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FanFavorites />
        <GlutenFree />
        <Menu />
        <OrderCTA />
        <Testimonials />
        <Reservations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
