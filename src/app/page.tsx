import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import OurServiceSection from "@/components/framer/OurServiceSection";
import CurvedCarousel from "@/components/framer/CurvedCarousel";
import Pricing from "@/components/sections/Pricing";
import Work from "@/components/sections/Work";
import Blog from "@/components/sections/Blog";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import ClientMarquee from "@/components/ui/ClientMarquee";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <OurServiceSection />
      <CurvedCarousel />
      <ClientMarquee />
      <About />
      <Pricing />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
