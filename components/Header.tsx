"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappText = String(t("nav.cta") || "Termin via WhatsApp");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-2xl"
          : "bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo & Meister Mark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-extrabold text-slate-950 text-xl tracking-tighter shadow-lg shadow-accent/20 group-hover:scale-105 transition-transform">
            ASZ
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none font-display">
              AUTO SERVICE ZENTRUM
            </span>
            <span className="text-[10px] tracking-widest text-accent uppercase font-bold mt-1">
              KFZ-Meisterbetrieb · Hamburg
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-300">
          <a href="#services" className="hover:text-accent transition-colors">
            {String(t("nav.services"))}
          </a>
          <a href="#rechner" className="hover:text-accent transition-colors">
            {String(t("nav.calculator"))}
          </a>
          <a href="#meister" className="hover:text-accent transition-colors">
            {String(t("nav.meister"))}
          </a>
          <a href="#detailing" className="hover:text-accent transition-colors">
            {String(t("nav.detailing"))}
          </a>
          <a href="#bewertungen" className="hover:text-accent transition-colors">
            {String(t("nav.reviews"))}
          </a>
          <a href="#galerie" className="hover:text-accent transition-colors">
            {String(t("nav.gallery"))}
          </a>
          <a href="#kontakt" className="hover:text-accent transition-colors">
            {String(t("nav.contact"))}
          </a>
        </nav>

        {/* Actions & Phone / WhatsApp CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+49405401050"
            className="text-xs font-extrabold text-slate-300 hover:text-accent transition-colors uppercase tracking-wider hidden xl:block"
          >
            040 540 10 50
          </a>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-full p-1 text-xs">
            <button
              onClick={() => setLocale("de")}
              className={`px-2.5 py-1 rounded-full font-bold transition-all ${
                locale === "de"
                  ? "bg-accent text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 rounded-full font-bold transition-all ${
                locale === "en"
                  ? "bg-accent text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="https://wa.me/491724715522?text=Hallo%20ASZ%20Hamburg,%20ich%20m%C3%B6chte%20einen%20Termin%20anfragen."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2.5 rounded-full font-extrabold text-xs uppercase tracking-wide flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
            <span>{whatsappText}</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setLocale(locale === "de" ? "en" : "de")}
            className="text-xs font-bold px-2.5 py-1 bg-slate-800 text-slate-200 rounded border border-slate-700"
          >
            {locale.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Hauptmenü öffnen"
            className="p-2 text-slate-200 hover:text-accent focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-slate-950/98 backdrop-blur-xl border-t border-slate-800 z-40 flex flex-col justify-between p-6">
          <nav className="flex flex-col gap-4 text-base font-extrabold uppercase tracking-wider text-slate-200 mt-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-800/80 hover:text-accent"
            >
              {String(t("nav.services"))}
            </a>
            <a
              href="#rechner"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-800/80 hover:text-accent"
            >
              {String(t("nav.calculator"))}
            </a>
            <a
              href="#meister"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-800/80 hover:text-accent"
            >
              {String(t("nav.meister"))}
            </a>
            <a
              href="#detailing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-800/80 hover:text-accent"
            >
              {String(t("nav.detailing"))}
            </a>
            <a
              href="#bewertungen"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-800/80 hover:text-accent"
            >
              {String(t("nav.reviews"))}
            </a>
            <a
              href="#galerie"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-800/80 hover:text-accent"
            >
              {String(t("nav.gallery"))}
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-800/80 hover:text-accent"
            >
              {String(t("nav.contact"))}
            </a>
          </nav>

          <div className="flex flex-col gap-3 mb-6">
            <a
              href="https://wa.me/491724715522?text=Hallo%20ASZ%20Hamburg,%20ich%20m%C3%B6chte%20einen%20Termin%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 text-slate-950 font-extrabold py-3.5 rounded-xl text-center text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20"
            >
              WhatsApp Direct (+49 172 471 55 22)
            </a>
            <a
              href="tel:+49405401050"
              className="w-full bg-slate-900 text-white font-extrabold py-3.5 rounded-xl text-center text-xs uppercase tracking-wider border border-slate-700"
            >
              Anrufen: 040 540 10 50
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
