"use client";

import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  const metrics = (t("hero.metrics") as Array<{ value: string; label: string }>) || [];
  const metaStrip = (t("hero.metaStrip") as string[]) || [];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 overflow-hidden bg-[hsl(215_35%_8%)] text-white select-none">
      {/* Background Stack Layer 1: Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={t("hero.videoPoster") as string}
          className="w-full h-full object-cover scale-105 opacity-30"
        >
          <source src={t("hero.videoSrc") as string} type="video/mp4" />
        </video>
        {/* Background Stack Layer 2: Dark Tinted Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215_35%_8%/0.9)] via-[hsl(215_35%_8%/0.75)] to-[hsl(215_35%_8%)]" />
      </div>

      {/* Background Stack Layer 3: Giant Watermark Type Layer */}
      <div
        className="absolute inset-0 pointer-events-none select-none aria-hidden overflow-hidden flex items-center justify-center z-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="font-display font-black text-[18vw] leading-none uppercase tracking-tighter text-white whitespace-nowrap">
          MEISTERBETRIEB
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6">
        {/* Kicker with REAL Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[hsl(24_95%_53%)] animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-white/90 uppercase">
              {t("hero.kicker") as string}
            </span>
          </div>
        </div>

        {/* Multi-line poster H1 with ONE word set differently */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white max-w-5xl leading-[0.93] tracking-tight mb-6">
          {t("hero.h1Prefix") as string}{" "}
          <span className="text-[hsl(24_95%_53%)] italic font-serif underline decoration-white/20 underline-offset-8">
            {t("hero.h1Accent") as string}
          </span>{" "}
          {t("hero.h1Suffix") as string}
        </h1>

        {/* 1-2 line Lead Subtitle */}
        <p className="text-base sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-8 font-normal">
          {t("hero.lead") as string}
        </p>

        {/* CTA Pair + Floating Text Seal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/494085370890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[hsl(24_95%_53%)] hover:bg-[hsl(24_95%_45%)] text-white font-bold text-sm uppercase tracking-wider rounded shadow-xl hover:shadow-2xl transition-all text-center"
            >
              {t("hero.ctaPrimary") as string}
            </a>
            <a
              href="#calculator"
              className="px-6 py-4 text-white/80 hover:text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-2 border-b border-white/20 hover:border-white"
            >
              <span>{t("hero.ctaSecondary") as string}</span>
              <span className="text-xs">→</span>
            </a>
          </div>

          {/* Floating Rotating Text Seal (NO ICONS) */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 hidden md:flex items-center justify-center">
            <svg
              className="w-full h-full animate-[spin_22s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <path
                id="textPath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9.5px] font-bold uppercase tracking-[0.2em] fill-white/60">
                <textPath href="#textPath">
                  · KFZ MEISTERBETRIEB · HAMBURG · ASZ SERVICE ·
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-display font-extrabold text-xs text-[hsl(24_95%_53%)] leading-tight">
                100%
              </span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-white/80">
                GARANTIE
              </span>
            </div>
          </div>
        </div>

        {/* 3-Item Meta Strip with Hairline Separators */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/75">
          {metaStrip.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span>{item}</span>
              {idx < metaStrip.length - 1 && (
                <span className="text-white/30 font-light">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Two Small Flanking Mini-Copy Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-white/10 text-xs text-white/70">
          <div>
            <span className="font-bold uppercase tracking-wider text-[hsl(24_95%_53%)] block mb-1">
              {t("hero.flankLeftTitle") as string}
            </span>
            <p className="leading-relaxed">{t("hero.flankLeftText") as string}</p>
          </div>
          <div>
            <span className="font-bold uppercase tracking-wider text-[hsl(24_95%_53%)] block mb-1">
              {t("hero.flankRightTitle") as string}
            </span>
            <p className="leading-relaxed">{t("hero.flankRightText") as string}</p>
          </div>
        </div>
      </div>

      {/* Hero Base Metrics Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((m, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-[hsl(24_95%_53%)] tabular-nums">
              {m.value}
            </span>
            <span className="text-xs text-white/70 font-medium">
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll Cue (tiny bottom-center indicator) */}
      <div className="relative z-10 pt-6 flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-bold tracking-[0.25em] text-white/70 uppercase mb-1">
          SCROLL
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[hsl(24_95%_53%)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
