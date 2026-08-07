import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { MarqueeTicker, WatermarkBand, StatementBand } from "@/components/Interstitials";
import ServicesSection from "@/components/ServicesSection";
import CalculatorSection from "@/components/CalculatorSection";
import TrustSection from "@/components/TrustSection";
import TechShowcase from "@/components/TechShowcase";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import FaqSection from "@/components/FaqSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MarqueeTicker />
        <ServicesSection />
        <WatermarkBand text="3D LASER ACHSVERMESSUNG" label="ТЕХНІЧНИЙ РЕГЛАМЕНТ ЄС" />
        <CalculatorSection />
        <TrustSection />
        <StatementBand />
        <TechShowcase />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <WhatsAppBanner />
        <FaqSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
