"use client";

import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  const title1 = String(t("hero.titlePart1") || "Präzision in");
  const title2 = String(t("hero.titlePart2") || "Transparenter Service für alle Marken.");
  const subtitle = String(t("hero.subtitle"));
  const ctaPrimary = String(t("hero.ctaPrimary"));
  const ctaSecondary = String(t("hero.ctaSecondary"));
  const priceTag = String(t("hero.priceTag"));

  return (
    <section className="relative min-h-[100svh] pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-slate-950">
      {/* Background High-Performance Video Stack + Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/18101981/pexels-photo-18101981.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105 filter brightness-40 contrast-125"
        >
          <source
            src="https://videos.pexels.com/video-files/18101981/18101981-hd_1280_720_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-80" />
      </div>

      {/* Giant Decorative Watermark Layer */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <span className="text-[18vw] font-black tracking-tighter text-slate-100/[0.03] uppercase font-display leading-none whitespace-nowrap">
          HAMBURG
        </span>
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-6 my-auto">
        {/* Top Kicker Row with REAL Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-800/80 pb-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-xs font-extrabold tracking-widest text-accent uppercase font-display">
              EST. 2015 — KIELER STR. 207, HAMBURG EIMSBÜTTEL
            </span>
          </div>

          <span className="text-xs font-bold text-slate-400 tracking-wider uppercase hidden md:inline">
            INHABER HERR NAWABI · CERTIFIED MASTER WORKSHOP
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Value Proposition Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              <span>{title1}</span>{" "}
              <span className="font-body italic text-accent font-normal underline decoration-accent/40 decoration-wavy decoration-2">
                Meisterhand
              </span>
              .<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-amber-400">
                {title2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-body leading-relaxed mb-8">
              {subtitle}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="https://wa.me/491724715522?text=Hallo%20ASZ%20Hamburg,%20ich%20m%C3%B6chte%20einen%20Termin%20anfragen."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider text-center shadow-2xl shadow-accent/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <span>{ctaPrimary}</span>
                <span className="text-base">→</span>
              </a>

              <a
                href="#rechner"
                className="bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/80 px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center backdrop-blur-md transition-all hover:border-accent/50"
              >
                {ctaSecondary} →
              </a>
            </div>

            {/* Flanking Mini-Copy Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-800/80 text-xs text-slate-400 w-full max-w-2xl">
              <div>
                <span className="font-bold text-white block mb-1 uppercase tracking-wider">
                  Herstellergarantie
                </span>
                <p className="leading-relaxed">
                  Digitale Serviceheft-Eintragung und Inspektion streng nach offiziellen Herstellervorgaben.
                </p>
              </div>
              <div>
                <span className="font-bold text-white block mb-1 uppercase tracking-wider">
                  3D-Laser & Detailing
                </span>
                <p className="leading-relaxed">
                  Fahrwerksgeometrie per 3D-Laser & tiefenwirksame Ozonbehandlung im hauseigenen Studio.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Hero Card with Text-Only Seal */}
          <div className="lg:col-span-5 relative">
            {/* Circular Rotating Text Seal */}
            <div className="absolute -top-6 -right-6 z-20 w-24 h-24 hidden sm:block pointer-events-none select-none">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10px] font-extrabold uppercase fill-accent tracking-widest">
                  <textPath href="#circlePath">
                    KFZ-MEISTERBETRIEB NAWABI • HAMBURG EIMSBÜTTEL •
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  Direkte Meister-Hotline
                </span>
                <span className="text-xs font-extrabold px-3 py-1 rounded bg-accent/10 text-accent border border-accent/30">
                  {priceTag}
                </span>
              </div>

              {/* Real Client Photo Display */}
              <div className="relative h-56 rounded-xl overflow-hidden mb-4 border border-slate-700/60">
                <img
                  src="https://aszhh.de/wp-content/uploads/2020/09/83406573_m.jpg"
                  alt="Auto Service Zentrum Hamburg Werkstatt"
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-extrabold text-white">Werkstattbühne Kieler Str. 207</span>
                  <span className="text-accent font-bold">Hamburg Eimsbüttel</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">HU / AU Hauptuntersuchung:</span>
                  <span className="font-extrabold text-white">ab 145 €</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">3D-Laser Achsvermessung:</span>
                  <span className="font-extrabold text-white">ab 89 €</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Profi Autoreinigung & Ozon:</span>
                  <span className="font-extrabold text-white">ab 119 €</span>
                </div>
              </div>

              <a
                href="tel:+49405401050"
                className="mt-5 w-full bg-slate-800 hover:bg-slate-700 text-white font-extrabold py-3.5 rounded-xl text-center text-xs uppercase tracking-wider block border border-slate-700 transition-colors"
              >
                Anrufen: 040 540 10 50
              </a>
            </div>
          </div>
        </div>

        {/* 3-Item Meta Strip */}
        <div className="mt-12 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs text-slate-400 font-bold uppercase tracking-wider">
          <div className="py-1">Mo – Fr 08:00 – 18:00 Uhr · Sa nach Vereinbarung</div>
          <div className="py-1 border-y md:border-y-0 md:border-x border-slate-800">Kieler Straße 207, 22525 Hamburg-Eimsbüttel</div>
          <div className="py-1 text-accent">4.8 von 5 Google Rating · 250+ Bewertungen</div>
        </div>
      </div>

      {/* Hero Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-6 pointer-events-none">
        <span className="text-[9px] font-extrabold tracking-[0.3em] text-slate-400 uppercase mb-2">
          SCROLL
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-accent via-accent/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
