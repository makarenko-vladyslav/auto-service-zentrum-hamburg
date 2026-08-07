
"use client";

import { useLocale } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-primary text-white">
      {/* Background Video Layer with Dark Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={t('hero.heroVideoPoster') as string}
          className="w-full h-full object-cover scale-105 filter brightness-90"
        >
          <source src={t('hero.heroVideo') as string} type="video/mp4" />
        </video>
        {/* Dark Scrim overlay for strong contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-black/70" />
      </div>

      {/* Giant Background Watermark Word */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="font-display font-black text-[18vw] uppercase leading-none tracking-tighter text-white/[0.03] whitespace-nowrap">
          MEISTERBETRIEB
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {/* Kicker Label with Real Meta */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-accent/20 border border-accent/40 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
                {t('hero.kicker') as string}
              </span>
            </div>

            {/* Poster Multi-Line H1 with expressive italic serif word */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-[0.95] text-white uppercase">
              {t('hero.titleMain') as string}{' '}
              <span className="font-serif italic font-normal text-accent uppercase">
                KFZ-Meister
              </span>
            </h1>

            {/* Subtitle / Lede */}
            <p className="text-base sm:text-xl text-white/90 max-w-2xl font-normal leading-relaxed">
              {t('hero.titleSub') as string}
            </p>

            {/* CTA Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="https://wa.me/4917680008000?text=Доброго%20дня!%20Хочу%20дізнатися%20вартість%20обслуговування"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-display font-black uppercase text-base tracking-wider rounded shadow-2xl transition-all transform hover:-translate-y-0.5 text-center"
              >
                {t('hero.ctaPrimary') as string}
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-bold uppercase text-base tracking-wider rounded backdrop-blur-sm transition-colors text-center"
              >
                {t('hero.ctaSecondary') as string}
              </a>
            </div>

            {/* 3-Item Meta Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15 text-xs text-white/80">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase text-accent tracking-widest">АДРЕСА МАТЕРНІ</span>
                <span className="font-semibold text-white mt-0.5">{t('hero.addressBadge') as string}</span>
              </div>
              <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-white/15 pt-2 sm:pt-0 sm:pl-3">
                <span className="text-[10px] font-bold uppercase text-accent tracking-widest">ГОДИНИ РОБОТИ</span>
                <span className="font-semibold text-white mt-0.5">{t('hero.hoursText') as string}</span>
              </div>
              <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-white/15 pt-2 sm:pt-0 sm:pl-3">
                <span className="text-[10px] font-bold uppercase text-accent tracking-widest">СЕРТИФІКОВАНИЙ РЕЙТИНГ</span>
                <span className="font-semibold text-white mt-0.5">{t('hero.ratingText') as string}</span>
              </div>
            </div>
          </div>

          {/* Right Flanking Section: Circular Pure Text Seal + Mini Copy Card */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-end">
            {/* Pure CSS Circular Rotating Text Seal */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-accent/40 animate-[spin_12s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[9.5px] font-display font-black uppercase tracking-widest fill-accent">
                    <textPath href="#circlePath">
                      GEPRÜFTER · KFZ-MEISTERBETRIEB · HAMBURG · EST 2014 ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="w-16 h-16 rounded-full bg-accent text-primary flex flex-col items-center justify-center text-center p-1 font-display font-black leading-none">
                <span className="text-[10px] uppercase tracking-tighter">ASZ</span>
                <span className="text-xs uppercase font-extrabold mt-0.5">2014</span>
              </div>
            </div>

            {/* Floating Meister Information Box */}
            <div className="bg-primary-tint/90 border border-white/15 p-5 rounded-lg shadow-2xl backdrop-blur-md w-full max-w-sm flex flex-col gap-3">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <img
                  src="https://aszhh.de/wp-content/uploads/2020/07/11987160_487026658133162_2622021430123409528_n-400x400.jpg"
                  alt="KFZ-Meister Nawabi"
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent shrink-0"
                />
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-display font-bold text-accent tracking-wider">
                    {t('hero.masterName') as string}
                  </span>
                  <span className="text-[11px] text-white/70 font-mono mt-0.5">
                    Kieler Straße 207, Hamburg
                  </span>
                </div>
              </div>

              {/* Two Flanking Mini-Copy Bullets */}
              <div className="flex flex-col gap-2 text-xs text-white/80 leading-snug">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">—</span>
                  <span>{t('hero.leftMiniCopy') as string}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">—</span>
                  <span>{t('hero.rightMiniCopy') as string}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Base Ticker Bar */}
      <div className="relative z-10 bg-black/40 border-t border-white/10 py-2.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between text-[11px] font-display font-bold uppercase tracking-widest text-white/70">
          <span>HAMBURG-STELLINGEN</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">3D ACHSVERMESSUNG</span>
          <span>·</span>
          <span>HU / AU TÜV SERVICE</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">REIFEN.COM PARTNER</span>
        </div>
      </div>

      {/* Classic Scroll Cue */}
      <div className="relative z-10 text-center pt-3 opacity-70">
        <div className="text-[9px] font-display font-bold uppercase tracking-widest text-white/60 mb-1">
          SCROLL
        </div>
        <div className="w-0.5 h-5 bg-accent mx-auto animate-pulse" />
      </div>
    </section>
  );
}
