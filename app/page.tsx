import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CofounderSection from "@/components/CofounderSection";
import AboutSection from "@/components/AboutSection";
import WhatHeDoesSection from "@/components/WhatHeDoesSection";
import NeuroSection from "@/components/NeuroSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CofounderSection />
      <AboutSection />
      <WhatHeDoesSection />
      <NeuroSection />
      <ServicesSection />
      <ApproachSection />
      <ContactSection />
      <FinalCta />
      <Footer />
    </>
  );
}
