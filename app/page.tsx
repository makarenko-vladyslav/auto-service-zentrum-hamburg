import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import TechSpotlight from "@/components/TechSpotlight";
import DetailingSpotlight from "@/components/DetailingSpotlight";
import Trust from "@/components/Trust";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { MarqueeTicker, StatementBand, HairlineStrip } from "@/components/Interstitials";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><MarqueeTicker /></Reveal>
        <Reveal><SocialProof /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><HairlineStrip /></Reveal>
        <Reveal><Calculator /></Reveal>
        <Reveal><TechSpotlight /></Reveal>
        <Reveal><DetailingSpotlight /></Reveal>
        <Reveal><StatementBand /></Reveal>
        <Reveal><Trust /></Reveal>
        <Reveal><ProcessSection /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal><VideoSection /></Reveal>
        <Reveal><CtaBanner /></Reveal>
        <Reveal><FaqSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
    </>
  );
}
