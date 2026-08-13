"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function Hero() {
  const { t } = useLocale();

  const phone = t("brand.phone") as string;
  const whatsapp = t("brand.whatsapp") as string;
  const whatsappClean = whatsapp.replace(/[^0-9]/g, "");

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-primary text-white select-none">
      {/* Background Layer 1: Looping Muted Stock Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={t("hero.videoPoster") as string}
          className="w-full h-full object-cover scale-105 filter brightness-75"
        >
          <source src={t("hero.videoSrc") as string} type="video/mp4" />
        </video>
        {/* Background Layer 2: Dual Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
      </div>

      {/* Giant Decorative Watermark Word Layer (Pointer Events None) */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.03] text-[18vw] font-display font-extrabold uppercase tracking-tighter text-white whitespace-nowrap pointer-events-none"
      >
        MEISTERBETRIEB
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Layer 1: Kicker with REAL Meta */}
            <Reveal>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-display font-bold text-xs tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>{t("hero.kicker") as string}</span>
              </div>
            </Reveal>

            {/* Layer 2: Multi-line Poster Headline with Styled Accent Word */}
            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
                {t("hero.title") as string}{" "}
                <span className="font-body italic font-normal text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">
                  {t("hero.titleAccent") as string}
                </span>
              </h1>
            </Reveal>

            {/* Layer 3: 1-2 Line Subtitle */}
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl font-body leading-relaxed">
                {t("hero.subtitle") as string}
              </p>
            </Reveal>

            {/* Layer 4: CTA Pair */}
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/${whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-display font-bold text-sm tracking-wider uppercase transition-all shadow-xl hover:shadow-2xl active:scale-95"
                >
                  <span>{t("hero.ctaSecondary") as string}</span>
                  <span className="text-lg">→</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-md font-display font-bold text-sm tracking-wider uppercase transition-all backdrop-blur-sm"
                >
                  <span>{t("hero.ctaPrimary") as string}</span>
                </a>
              </div>
            </Reveal>

            {/* Layer 5: 3-Item Meta Strip with Hairline Separators */}
            <Reveal delay={0.4}>
              <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-display font-medium text-white/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>Mo - Fr: 08:00 - 18:00 Uhr</span>
                </div>
                <div className="flex items-center gap-2.5 border-t sm:border-t-0 sm:border-l border-white/15 pt-2 sm:pt-0 sm:pl-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>Kieler Straße 207, Stellingen</span>
                </div>
                <div className="flex items-center gap-2.5 border-t sm:border-t-0 sm:border-l border-white/15 pt-2 sm:pt-0 sm:pl-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>4.8★ Google (150+ Bewertungen)</span>
                </div>
              </div>
            </Reveal>

            {/* Layer 6: Flanking Mini-Copy Columns */}
            <Reveal delay={0.45}>
              <div className="grid grid-cols-2 gap-4 text-[11px] font-body text-white/60 pt-2">
                <div className="border-l-2 border-accent/60 pl-3">
                  {t("hero.flankLeft") as string}
                </div>
                <div className="border-l-2 border-accent/60 pl-3">
                  {t("hero.flankRight") as string}
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Hero Master Card + Rotating Text Seal */}
          <div className="lg:col-span-4 relative">
            
            {/* Layer 7: Text-Only Rotating Circular Seal (NO ICONS / NO GLYPHS) */}
            <div className="absolute -top-8 -right-4 z-20 hidden md:flex items-center justify-center w-28 h-28 rounded-full bg-primary/90 border border-accent/40 shadow-2xl backdrop-blur-md">
              <div className="relative w-full h-full flex items-center justify-center animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-24 h-24 text-accent fill-current">
                  <path id="sealPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[8px] font-display font-extrabold uppercase tracking-widest">
                    <textPath href="#sealPath" startOffset="0%">
                      {t("hero.sealText") as string}
                    </textPath>
                  </text>
                </svg>
              </div>
              <span className="absolute font-display font-extrabold text-xs text-white uppercase tracking-tighter">
                ASZ
              </span>
            </div>

            {/* Hero Master Card */}
            <Reveal delay={0.3}>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-white shadow-2xl relative overflow-hidden space-y-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-display font-bold uppercase text-accent tracking-widest block">
                    DIREKTER MEISTER-KONTAKT
                  </span>
                  <h3 className="text-xl font-display font-bold">
                    Herr Nawabi & Werkstatt-Team
                  </h3>
                  <p className="text-xs text-white/80 font-body">
                    Ansprechpartner Kieler Straße 207
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 text-xs font-body border-t border-white/10">
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-white/70">Meisterbetrieb:</span>
                    <span className="font-display font-bold text-accent">
                      Handwerkskammer HH
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-white/70">Google Bewertung:</span>
                    <span className="font-display font-bold text-accent">
                      4.8 / 5.0 ★★★★★
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-white/70">Ersatzwagen:</span>
                    <span className="font-display font-semibold text-white">
                      Vor Ort verfügbar
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-white/70">Kostenvoranschlag:</span>
                    <span className="font-display font-semibold text-accent">
                      Gratis via WhatsApp
                    </span>
                  </div>
                </div>

                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                  className="block w-full text-center bg-white text-primary hover:bg-bg-light py-3 rounded font-display font-extrabold text-xs tracking-wider uppercase transition-colors shadow"
                >
                  {phone}
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Layer 8: Scroll Cue Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-display font-bold tracking-widest text-white/80 uppercase">
          SCROLL
        </span>
        <span className="w-0.5 h-5 bg-accent animate-pulse" />
      </div>
    </section>
  );
}
