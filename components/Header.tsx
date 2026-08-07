"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#tech", label: t("nav.tech") as string },
    { href: "#trust", label: t("nav.about") as string },
    { href: "#gallery", label: t("nav.gallery") as string },
    { href: "#reviews", label: t("nav.reviews") as string },
    { href: "#faq", label: t("nav.faq") as string },
    { href: "#contact", label: t("nav.contact") as string },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[hsl(215_35%_8%/0.95)] backdrop-blur-md border-b border-[hsl(215_35%_20%)] py-3 shadow-xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Wordmark Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded bg-[hsl(24_95%_53%)] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 32 32">
                <path d="M7 23L16 6L25 23H20.5L16 14L11.5 23H7Z" />
                <path d="M12 20H20V23H12V20Z" fill="hsl(215, 45%, 15%)" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl leading-tight tracking-wide text-white uppercase">
                AUTO SERVICE ZENTRUM
              </span>
              <span className="text-[0.7rem] tracking-widest text-[hsl(24_95%_53%)] font-semibold uppercase">
                KFZ-MEISTERBETRIEB · HAMBURG
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[hsl(24_95%_53%)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Direct Call & WhatsApp */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+494085370890"
              className="text-xs font-semibold text-white/90 hover:text-white px-3 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              +49 40 8537 0890
            </a>
            <a
              href="https://wa.me/494085370890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[hsl(24_95%_53%)] hover:bg-[hsl(24_95%_45%)] rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              {t("nav.whatsapp") as string}
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden text-white p-2 focus:outline-none"
          >
            <svg className="w-7 h-7 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[hsl(215_35%_8%)] flex flex-col justify-between p-8 pt-24 lg:hidden">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-display font-bold text-white hover:text-[hsl(24_95%_53%)] transition-colors border-b border-white/10 pb-3"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href="tel:+494085370890"
              className="block w-full text-center py-3 rounded bg-white/10 text-white font-semibold text-sm"
            >
              +49 40 8537 0890 (Прямий дзвонок)
            </a>
            <a
              href="https://wa.me/494085370890"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3.5 rounded bg-[hsl(24_95%_53%)] text-white font-bold text-sm uppercase tracking-wider"
            >
              {t("nav.whatsapp") as string}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
