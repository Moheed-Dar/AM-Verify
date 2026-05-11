import Hero from "./components/Hero";
import About from "./components/About";
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
      {/* <Hero /> */}
      <WhyChooseUs/>
      <OurWork/>
      <Services/>
      <Packages/>
      <Testimonials/>
      <CTASection/>
      <Contact/>
    </>
  );
}