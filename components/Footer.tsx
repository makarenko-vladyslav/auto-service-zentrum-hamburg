"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent text-slate-950 font-black flex items-center justify-center text-xl">
                ASZ
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight font-display">
                AUTO SERVICE ZENTRUM
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 mb-4 font-body">
              {String(t("footer.meisterbrief"))}
            </p>
            <span className="text-[11px] text-slate-400 font-bold block uppercase tracking-wider">
              Leitung: Herr Nawabi · Kieler Str. 207, 22525 Hamburg
            </span>
          </div>

          {/* Quick Nav */}
          <div>
            <span className="text-xs font-extrabold text-white uppercase tracking-wider block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  {String(t("nav.services"))}
                </a>
              </li>
              <li>
                <a href="#rechner" className="hover:text-accent transition-colors">
                  {String(t("nav.calculator"))}
                </a>
              </li>
              <li>
                <a href="#meister" className="hover:text-accent transition-colors">
                  {String(t("nav.meister"))}
                </a>
              </li>
              <li>
                <a href="#detailing" className="hover:text-accent transition-colors">
                  {String(t("nav.detailing"))}
                </a>
              </li>
              <li>
                <a href="#bewertungen" className="hover:text-accent transition-colors">
                  {String(t("nav.reviews"))}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <span className="text-xs font-extrabold text-white uppercase tracking-wider block mb-4">
              Kontakt
            </span>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">Kieler Straße 207</li>
              <li className="text-slate-300">22525 Hamburg-Eimsbüttel</li>
              <li className="pt-1">
                <a href="tel:+49405401050" className="text-slate-300 hover:text-accent font-bold">
                  Tel: 040 540 10 50
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/491724715522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline"
                >
                  WhatsApp: +49 172 471 55 22
                </a>
              </li>
              <li>
                <span className="text-slate-400">Email: info@aszhh.de</span>
              </li>
            </ul>
          </div>

          {/* Hours & Direct Links */}
          <div>
            <span className="text-xs font-extrabold text-white uppercase tracking-wider block mb-4">
              Öffnungszeiten & Direktlinks
            </span>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Montag – Freitag: 08:00 – 18:00 Uhr<br />
              Samstag: Nach Vereinbarung
            </p>

            <div className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider">
              <a
                href="https://wa.me/491724715522"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                WhatsApp Direct
              </a>
              <a
                href="https://maps.google.com/?q=Kieler+Straße+207+Hamburg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google Maps Anfahrt
              </a>
              <span className="text-slate-400">reifen.com Montagepartner</span>
            </div>
          </div>
        </div>

        {/* Legal & Developer Credit */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>{String(t("footer.rights"))}</div>

          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors"
            >
              Entwickelt von Студія Тест — Студія розробки преміальних сайтів
            </a>
          </div>
        </div>
      </div>

      {/* Giant Full-Width Bleeding Brand Wordmark */}
      <div
        className="w-full overflow-hidden pointer-events-none select-none text-center pt-8 opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="text-[11vw] font-black tracking-tighter text-slate-100 uppercase font-display leading-none whitespace-nowrap block">
          AUTO SERVICE ZENTRUM HAMBURG
        </span>
      </div>
    </footer>
  );
}
