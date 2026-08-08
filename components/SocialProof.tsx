"use client";

import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();

  const stats = (t("stats") as Array<{ number: string; label: string }>) || [];

  return (
    <section className="bg-slate-900 border-y border-slate-800 py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stat Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-4 md:pt-0 px-4 flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-accent font-display tracking-tight">
                {stat.number}
              </span>
              <span className="text-xs text-slate-300 font-bold mt-1.5 max-w-[200px] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Partner Seals Ticker */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-300 text-xs font-extrabold uppercase tracking-widest">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Offizieller reifen.com Montagepartner</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>3D Laser-Achsvermessung Digital</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Profi-Autoreinigung & Ozon Studio</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Zertifizierter KFZ-Meisterbetrieb</span>
          </div>
        </div>
      </div>
    </section>
  );
}
