
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import MasterTrust from "@/components/MasterTrust";
import Services from "@/components/Services";
import Diagnostic3D from "@/components/Diagnostic3D";
import Calculator from "@/components/Calculator";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { MarqueeTicker, StatementBand, CertificationBar } from "@/components/Interstitials";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light text-text-main">
      <Header />
      <main className="flex-grow">
        <Reveal><Hero /></Reveal>
        <Reveal><SocialProof /></Reveal>
        <Reveal><MasterTrust /></Reveal>
        <Reveal><MarqueeTicker /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><CertificationBar /></Reveal>
        <Reveal><Diagnostic3D /></Reveal>
        <Reveal><Calculator /></Reveal>
        <Reveal><StatementBand /></Reveal>
        <Reveal><BeforeAfter /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal><VideoSection /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
