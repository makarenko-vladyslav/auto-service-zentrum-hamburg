import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Advantages from "@/components/Advantages";
import ServicesCatalog from "@/components/ServicesCatalog";
import Calculator from "@/components/Calculator";
import BeforeAfter from "@/components/BeforeAfter";
import VideoShowcase from "@/components/VideoShowcase";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import LocationMap from "@/components/LocationMap";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { StatementBand, WatermarkBand, LabeledHairline } from "@/components/Interstitials";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Interstitial 1: Social Proof Marquee */}
        <SocialProof />
        
        {/* Section 2: Advantages / Craft */}
        <Advantages />
        
        {/* Interstitial 2: Statement Band */}
        <StatementBand />
        
        {/* Section 3: Services Catalog */}
        <ServicesCatalog />
        
        {/* Section 4: Cost Calculator */}
        <Calculator />
        
        {/* Interstitial 3: Watermark Band */}
        <WatermarkBand text="HAMBURG-STELLINGEN 22525" />
        
        {/* Section 5: Smart Repair Before / After */}
        <BeforeAfter />
        
        {/* Section 6: Video & Equipment Showcase */}
        <VideoShowcase />
        
        {/* Section 7: Process Workflow */}
        <Process />
        
        {/* Interstitial 4: Labeled Hairline */}
        <LabeledHairline label="HERSTELLERGARANTIE 100% ERHALTEN" />
        
        {/* Section 8: Testimonials / Reviews */}
        <Testimonials />
        
        {/* Section 9: Workshop Team */}
        <Team />
        
        {/* Section 10: FAQ */}
        <Faq />
        
        {/* Section 11: Location & Map */}
        <LocationMap />
        
        {/* Section 12: Booking & Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
