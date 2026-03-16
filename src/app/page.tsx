import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import OurServiceSection from "@/components/framer/OurServiceSection";
import Pricing from "@/components/sections/Pricing";
import Work from "@/components/sections/Work";
import Blog from "@/components/sections/Blog";
import Video from "@/components/sections/Video";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <OurServiceSection />
      <Video />
      <Work />
      <Pricing />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
