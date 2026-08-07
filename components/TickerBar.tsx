"use client";

import { useLocale } from "@/lib/i18n";

export default function TickerBar() {
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
