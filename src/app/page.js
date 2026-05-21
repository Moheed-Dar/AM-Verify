import LandingPage from "./components/LandingPage";
import HeroSection from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import OurWork from "./components/OurWork";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <LandingPage />
      <WhyChooseUs />
      <OurWork />
      <Services />
      <Packages />
      <Testimonials />
      <CTASection />
    </>
  );
}