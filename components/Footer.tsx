"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(215_35%_8%)] text-white pt-16 pb-12 px-4 sm:px-6 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Partner */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[hsl(24_95%_53%)] flex items-center justify-center font-extrabold text-white text-xs">
                ASZ
              </div>
              <span className="font-display font-extrabold text-lg text-white uppercase tracking-wider">
                AUTO SERVICE ZENTRUM
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              {t("footer.tagline") as string}
            </p>
            <div className="pt-2 text-xs text-[hsl(24_95%_53%)] font-semibold">
              {t("footer.partner") as string}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(24_95%_53%)] block">
              Навігація
            </span>
            <ul className="space-y-2 text-xs text-white/80">
              <li><a href="#services" className="hover:text-[hsl(24_95%_53%)] transition-colors">Послуги та прайс</a></li>
              <li><a href="#calculator" className="hover:text-[hsl(24_95%_53%)] transition-colors">Калькулятор робіт</a></li>
              <li><a href="#tech" className="hover:text-[hsl(24_95%_53%)] transition-colors">3D Laser Сервіс</a></li>
              <li><a href="#gallery" className="hover:text-[hsl(24_95%_53%)] transition-colors">Наші роботи</a></li>
              <li><a href="#faq" className="hover:text-[hsl(24_95%_53%)] transition-colors">Часті питання</a></li>
            </ul>
          </div>

          {/* Col 3: Hours & Contact */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(24_95%_53%)] block">
              Контакти & Графік
            </span>
            <div className="text-xs text-white/80 space-y-1">
              <p>Kieler Straße 207, 22525 Hamburg</p>
              <p className="font-mono text-white/90">Тел: +49 40 8537 0890</p>
              <p className="font-mono text-white/70">Email: info@aszhh.de</p>
              <p className="pt-1 text-white/60">Пн–Пт 08:00–18:00 | Сб 09:00–14:00</p>
            </div>
          </div>

          {/* Col 4: Master & Social Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(24_95%_53%)] block">
              Керівництво та ресурси
            </span>
            <p className="text-xs text-white/90">
              {t("footer.masterTitle") as string}<br />
              <strong className="text-white font-display text-sm">{t("footer.masterName") as string}</strong>
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <a
                href="https://wa.me/494085370890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(24_95%_53%)] underline"
              >
                WhatsApp
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://maps.google.com/?q=Auto+Service+Zentrum+Hamburg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(24_95%_53%)] underline"
              >
                Google Maps
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://reifen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(24_95%_53%)] underline"
              >
                reifen.com
              </a>
            </div>
          </div>
        </div>

        {/* Big Footer Wordmark Bleeding Off Bottom Edge */}
        <div className="py-8 border-y border-white/10 text-center overflow-hidden">
          <span className="font-display font-black text-4xl sm:text-7xl lg:text-9xl text-white/10 uppercase tracking-tighter whitespace-nowrap block select-none">
            {t("footer.wordmark") as string}
          </span>
        </div>

        {/* Legal & Credit Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © 2026 Auto Service Zentrum Hamburg. {t("footer.rights") as string}
          </div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(24_95%_53%)] transition-colors"
            >
              {t("footer.credit") as string}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
