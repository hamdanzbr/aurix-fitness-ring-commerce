import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { ProductShowcase } from "./sections/ProductShowcase";
import { Testimonials } from "./sections/Testimonials";
import { links } from "./constants/landing.constants";

export function LandingPage() {
  return (
    <>
      <Navbar links={links}/>
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <Testimonials />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
