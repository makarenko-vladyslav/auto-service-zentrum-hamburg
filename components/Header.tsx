
"use client";

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Typographic Logo & Master Mark */}
        <a href="#" className="group flex items-center gap-3 text-white focus:outline-none">
          <div className="w-10 h-10 rounded bg-accent flex items-center justify-center font-display font-black text-primary text-xl tracking-tighter group-hover:bg-accent-hover transition-colors">
            ASZ
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl sm:text-2xl tracking-wide leading-none text-white">
              AUTO SERVICE ZENTRUM
            </span>
            <span className="text-[10px] tracking-widest text-accent font-bold uppercase">
              KFZ-Meisterbetrieb · Hamburg
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
          <a href="#services" className="text-white/80 hover:text-accent transition-colors">
            {t('nav.services') as string}
          </a>
          <a href="#meister" className="text-white/80 hover:text-accent transition-colors">
            {t('nav.meister') as string}
          </a>
          <a href="#diagnostics" className="text-white/80 hover:text-accent transition-colors">
            {t('nav.diagnostics') as string}
          </a>
          <a href="#calculator" className="text-white/80 hover:text-accent transition-colors">
            {t('nav.calculator') as string}
          </a>
          <a href="#beforeAfter" className="text-white/80 hover:text-accent transition-colors">
            {t('nav.beforeAfter') as string}
          </a>
          <a href="#reviews" className="text-white/80 hover:text-accent transition-colors">
            {t('nav.reviews') as string}
          </a>
          <a href="#contact" className="text-white/80 hover:text-accent transition-colors">
            {t('nav.contact') as string}
          </a>
        </nav>

        {/* Right Section: Tel + Language + Direct WhatsApp CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+494085370777"
            className="hidden xl:inline-block text-xs font-mono font-bold text-white/90 hover:text-accent transition-colors"
          >
            +49 40 85370777
          </a>

          {/* Language Switcher */}
          <div className="flex items-center bg-white/10 p-0.5 rounded border border-white/15 text-xs font-bold text-white">
            <button
              onClick={() => setLocale('uk')}
              className={`px-2 py-1 rounded transition-colors ${
                locale === 'uk' ? 'bg-accent text-primary font-black' : 'hover:text-accent'
              }`}
            >
              UA
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-2 py-1 rounded transition-colors ${
                locale === 'en' ? 'bg-accent text-primary font-black' : 'hover:text-accent'
              }`}
            >
              EN
            </button>
          </div>

          {/* Direct Phone / WhatsApp Button */}
          <a
            href="https://wa.me/4917680008000?text=Вітаю!%20Хочу%20записатися%20на%20обслуговування%20в%20ASZ%20Hamburg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-accent hover:bg-accent-hover text-primary font-display font-black uppercase tracking-wide text-xs rounded shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            {t('nav.bookCta') as string}
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white hover:text-accent focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transform transition-transform ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transform transition-transform ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Full-Screen Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-primary/98 flex flex-col justify-between p-6 pt-24 lg:hidden">
          <div className="flex flex-col gap-5 text-xl font-display font-black uppercase text-white tracking-wider">
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-accent">
              {t('nav.services') as string}
            </a>
            <a href="#meister" onClick={() => setMenuOpen(false)} className="hover:text-accent">
              {t('nav.meister') as string}
            </a>
            <a href="#diagnostics" onClick={() => setMenuOpen(false)} className="hover:text-accent">
              {t('nav.diagnostics') as string}
            </a>
            <a href="#calculator" onClick={() => setMenuOpen(false)} className="hover:text-accent">
              {t('nav.calculator') as string}
            </a>
            <a href="#beforeAfter" onClick={() => setMenuOpen(false)} className="hover:text-accent">
              {t('nav.beforeAfter') as string}
            </a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-accent">
              {t('nav.reviews') as string}
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-accent">
              {t('nav.contact') as string}
            </a>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center justify-between text-white text-sm font-medium">
              <span>Мова / Language:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => { setLocale('uk'); setMenuOpen(false); }}
                  className={`px-3 py-1 rounded text-xs ${locale === 'uk' ? 'bg-accent text-primary font-bold' : 'bg-white/10'}`}
                >
                  UA
                </button>
                <button
                  onClick={() => { setLocale('en'); setMenuOpen(false); }}
                  className={`px-3 py-1 rounded text-xs ${locale === 'en' ? 'bg-accent text-primary font-bold' : 'bg-white/10'}`}
                >
                  EN
                </button>
              </div>
            </div>

            <a
              href="tel:+494085370777"
              className="w-full text-center py-2.5 bg-white/10 text-white font-mono font-bold text-sm rounded border border-white/10"
            >
              +49 40 85370777
            </a>

            <a
              href="https://wa.me/4917680008000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-accent text-primary font-display font-black text-base uppercase tracking-wider rounded"
            >
              {t('nav.bookCta') as string}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
