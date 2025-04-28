import { LandingNav } from "@/app/components/LandingNav";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import About from "@/app/components/About";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Gallery from "@/app/components/Gallery";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <LandingNav />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
