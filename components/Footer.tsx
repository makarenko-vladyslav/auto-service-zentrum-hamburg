"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  const phone = t("brand.phone") as string;
  const email = t("brand.email") as string;
  const address = t("brand.address") as string;

  return (
    <footer className="bg-primary text-white pt-16 pb-12 border-t border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Description */}
          <div className="space-y-4">
            <img
              src="https://aszhh.de/wp-content/uploads/2020/07/ASZ-Logo-1.png"
              alt="Auto Service Zentrum Hamburg Logo"
              className="h-9 w-auto object-contain"
            />
            <p className="text-xs font-body text-white/70 leading-relaxed">
              {t("footer.aboutText") as string}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-accent uppercase tracking-wider">
              {t("footer.linksTitle") as string}
            </h4>
            <ul className="space-y-2 text-xs font-display text-white/80">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  {t("nav.services") as string}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-accent transition-colors">
                  {t("nav.calculator") as string}
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-accent transition-colors">
                  {t("nav.beforeAfter") as string}
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-accent transition-colors">
                  {t("nav.advantages") as string}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">
                  {t("nav.testimonials") as string}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  {t("nav.faq") as string}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Separate Contact Lines */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-accent uppercase tracking-wider">
              {t("footer.hoursTitle") as string}
            </h4>
            <div className="text-xs font-body text-white/80 space-y-1.5">
              <p>Montag - Freitag: 08:00 - 18:00</p>
              <p>Samstag: Nach Vereinbarung</p>
              <div className="pt-2 space-y-1">
                <p className="font-display font-bold text-white">{phone}</p>
                <p className="text-white/70">{email}</p>
                <p className="text-white/70">{address}</p>
              </div>
            </div>
          </div>

          {/* Col 4: Certifications & Text Social Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-accent uppercase tracking-wider">
              Zertifizierung & Medien
            </h4>
            <div className="text-xs font-body text-white/70 space-y-2">
              <p>✔ KFZ-Meisterbetrieb Handwerkskammer HH</p>
              <p>✔ Offizieller Partner von reifen.com</p>
              <p>✔ TÜV / DEKRA Prüfstützpunkt</p>
            </div>
            
            {/* Text Social Row */}
            <div className="pt-2 flex items-center gap-3 text-xs font-display font-bold text-accent uppercase tracking-wider">
              <a href="https://wa.me/4917643210987" target="_blank" rel="noopener noreferrer" className="hover:underline">
                WhatsApp
              </a>
              <span>·</span>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Google My Business
              </a>
            </div>
          </div>

        </div>

        {/* Giant Full-Width Brand Wordmark Bleeding off Bottom Edge */}
        <div className="pt-8 border-t border-white/10 text-center select-none pointer-events-none">
          <span className="text-5xl sm:text-8xl lg:text-[10rem] font-display font-black tracking-tighter text-white/5 uppercase block leading-none">
            ASZ HAMBURG
          </span>
        </div>

        {/* Legal & Developer Credit Row in Brand Voice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-white/60 pt-4 border-t border-white/10">
          <div>
            © 2026 Auto Service Zentrum Hamburg. {t("footer.rights") as string}
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="text-white/40 italic">
              KFZ-Meisterqualität in Hamburg-Stellingen
            </span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              {t("footer.impressum") as string}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t("footer.datenschutz") as string}
            </a>
            <span>•</span>
            <div>
              {t("footer.developerCredit") as string}{" "}
              <a
                href="https://makarich.framer.website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-bold"
              >
                Студія Тест
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
