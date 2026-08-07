
"use client";

import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Desc */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-accent flex items-center justify-center font-display font-black text-primary text-lg">
                ASZ
              </div>
              <span className="font-display font-black text-xl tracking-wide uppercase text-white">
                AUTO SERVICE ZENTRUM
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              {t('footer.desc') as string}
            </p>
            <div className="text-xs text-accent font-mono font-bold">
              KFZ-Meisterbetrieb · Kieler Str. 207, Hamburg
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase text-accent tracking-widest mb-4">
              {t('footer.quickLinks') as string}
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-white/80 font-medium uppercase tracking-wider">
              <li><a href="#services" className="hover:text-accent transition-colors">Послуги та ціни</a></li>
              <li><a href="#meister" className="hover:text-accent transition-colors">Про KFZ-Meister</a></li>
              <li><a href="#diagnostics" className="hover:text-accent transition-colors">3D Лазерний стенд</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Калькулятор робіт</a></li>
              <li><a href="#beforeAfter" className="hover:text-accent transition-colors">Деталінг результати</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Контакти</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase text-accent tracking-widest mb-4">
              {t('footer.contacts') as string}
            </h4>
            <div className="flex flex-col gap-2 text-xs text-white/80 font-mono">
              <p>Kieler Straße 207, 22525 Hamburg</p>
              <p>Тел: +49 40 85370777</p>
              <p>WhatsApp: +49 176 8000 8000</p>
              <p>Email: info@aszhh.de</p>
            </div>

            {/* Social Text Links */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3 text-[11px] font-bold text-accent">
              <a href="https://wa.me/4917680008000" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
              <span>·</span>
              <a href="https://www.google.com/maps?q=Kieler+Stra%C3%9Fe+207,+22525+Hamburg" target="_blank" rel="noopener noreferrer" className="hover:underline">Google Maps</a>
              <span>·</span>
              <a href="#services" className="hover:underline">Reifen.com</a>
            </div>
          </div>

          {/* Col 4: Hours */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase text-accent tracking-widest mb-4">
              {t('footer.workingHours') as string}
            </h4>
            <div className="text-xs text-white/80 leading-relaxed font-mono">
              <p>Понеділок — П'ятниця:</p>
              <p className="font-bold text-white mb-2">08:30 – 18:00</p>
              <p>Субота:</p>
              <p className="font-bold text-accent">За записом</p>
            </div>
          </div>
        </div>

        {/* Giant Typographic Brand Wordmark Bleeding Off Bottom */}
        <div className="pt-8 text-center select-none overflow-hidden">
          <div className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[110px] tracking-tighter text-white/[0.05] uppercase leading-none whitespace-nowrap">
            AUTO SERVICE ZENTRUM
          </div>
        </div>

        {/* Legal Row & Developer Credit */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © 2026 Auto Service Zentrum Hamburg. {t('footer.rights') as string}
          </div>
          <div className="text-[11px] text-white/50">
            Німецький сертифікований KFZ-Meisterbetrieb у Гамбурзі
          </div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent underline transition-colors"
            >
              {t('footer.studioCredit') as string}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
