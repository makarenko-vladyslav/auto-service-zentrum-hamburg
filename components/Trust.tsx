"use client";

import { useLocale } from "@/lib/i18n";

export default function Trust() {
  const { t } = useLocale();

  const kicker = String(t("trust.kicker"));
  const title = String(t("trust.title"));
  const subtitle = String(t("trust.subtitle"));
  const cards = (t("trust.cards") as Array<{ title: string; desc: string }>) || [];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-accent uppercase mb-2 block font-display">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-body leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-6 relative hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 text-accent font-black text-lg flex items-center justify-center mb-5 font-display">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-extrabold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 font-body leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[10px] font-extrabold uppercase tracking-widest text-accent">
                MEISTER-STANDARDEINTRAG
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
