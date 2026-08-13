"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phone = t("brand.phone") as string;
  const whatsapp = t("brand.whatsapp") as string;
  const whatsappClean = whatsapp.replace(/[^0-9]/g, "");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#before-after", label: t("nav.beforeAfter") as string },
    { href: "#advantages", label: t("nav.advantages") as string },
    { href: "#testimonials", label: t("nav.testimonials") as string },
    { href: "#faq", label: t("nav.faq") as string },
    { href: "#contact", label: t("nav.contact") as string },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg py-3 text-white border-b border-white/10"
            : "bg-gradient-to-b from-primary/80 via-primary/40 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img
              src="https://aszhh.de/wp-content/uploads/2020/07/ASZ-Logo-1.png"
              alt="Auto Service Zentrum Hamburg Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-display font-semibold tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/15 text-xs font-display font-semibold">
              <button
                onClick={() => setLocale("de")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  locale === "de"
                    ? "bg-accent text-white shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  locale === "en"
                    ? "bg-accent text-white shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Direct Phone / WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md font-display font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <span>{t("nav.bookAppointment") as string}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accent focus:outline-none"
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-opacity duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-primary/98 backdrop-blur-xl text-white flex flex-col justify-between p-6 sm:p-10 lg:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <img
              src="https://aszhh.de/wp-content/uploads/2020/07/ASZ-Logo-1.png"
              alt="ASZ Hamburg Logo"
              className="h-9 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-white hover:text-accent text-2xl font-display font-bold"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-5 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl sm:text-2xl font-display font-bold hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <a
              href={`https://wa.me/${whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-accent text-white py-3.5 rounded-md font-display font-bold text-sm tracking-wider uppercase shadow-lg"
            >
              {t("nav.bookAppointment") as string}
            </a>
            <div className="text-center text-xs text-white/70 font-body">
              <p>{phone}</p>
              <p>Kieler Straße 207, 22525 Hamburg</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
