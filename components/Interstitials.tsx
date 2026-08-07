"use client";

import { useLocale } from "@/lib/i18n";

export function MarqueeTicker() {
  const { t } = useLocale();
  const tickerItems = (t("ticker") as string[]) || [];

  return (
    <div className="w-full bg-[hsl(215_45%_15%)] border-y border-[hsl(215_35%_25%)] py-3 overflow-hidden select-none">
      <div className="flex gap-8 whitespace-nowrap animate-[marquee_28s_linear_infinite]">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <span className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white/90">
              {item}
            </span>
            <span className="text-[hsl(24_95%_53%)] font-bold">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WatermarkBand({ text = "3D LASER ACHSVERMESSUNG", label = "ТЕХНІЧНИЙ РЕГЛАМЕНТ ЄС" }: { text?: string; label?: string }) {
  return (
    <div className="relative w-full py-6 bg-[hsl(215_35%_8%)] border-y border-white/10 overflow-hidden select-none flex items-center justify-between px-6">
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[hsl(24_95%_53%)] relative z-10">
        {label}
      </span>
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none aria-hidden">
        <span className="font-display font-black text-6xl sm:text-8xl tracking-tighter text-white whitespace-nowrap uppercase">
          {text}
        </span>
      </div>
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 relative z-10">
        KIELER STR. 207 · HAMBURG
      </span>
    </div>
  );
}

export function StatementBand() {
  return (
    <div className="w-full bg-[hsl(24_95%_53%)] text-white py-4 px-6 text-center select-none shadow-inner">
      <p className="font-display font-extrabold text-sm sm:text-base uppercase tracking-wider max-w-5xl mx-auto">
        Збереження офіційної гарантії автовиробника за стандартом ЄС GVO 461/2010 · Фіксована норма-година 89 €
      </p>
    </div>
  );
}
