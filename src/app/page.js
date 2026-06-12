'use client';
import LandingPage from "@/app/components/home/LandingPage"
import ClientSuccessStories from "@/app/components/home/ClientSuccessStories"
import ProofItWorks from "./components/home/ProofItWorks";
import WinsAndProof from "./components/home/WinsAndProof";
import ZeroToHero from "./components/home/ZeroToHero";
import FAQ from "./components/home/FAQ";
import CTACalendar from "./components/home/CTACalendar";
export default function Home() {
  
  return (
    <>
    <LandingPage/>
    <ClientSuccessStories/>
    <ProofItWorks/>
    <WinsAndProof/>
    <ZeroToHero/>
    <FAQ/>
    <CTACalendar/>
     
    </>
  );
}
