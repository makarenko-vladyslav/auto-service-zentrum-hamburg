"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();
  const [activeIdx, setActiveIdx] = useState(0);

  const kicker = String(t("testimonials.kicker"));
  const title = String(t("testimonials.title"));
  const subtitle = String(t("testimonials.subtitle"));
  const items = (t("testimonials.items") as Array<{
    quote: string;
    author: string;
    role: string;
  }>) || [];

  return (
    <section id="bewertungen" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-accent uppercase mb-2 block font-display">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-body">
            {subtitle}
          </p>

          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-extrabold text-amber-300 uppercase tracking-widest">
            4.8 von 5 · Google Kundenzufriedenheit · 250+ Verifizierte Bewertungen
          </div>
        </div>

        {/* Featured Big Display Quote */}
        {items.length > 0 && (
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 sm:p-12 mb-12 relative overflow-hidden shadow-2xl">
            <span
              className="absolute top-2 left-6 text-8xl font-black text-slate-800/40 select-none pointer-events-none font-display"
              aria-hidden="true"
            >
              “
            </span>

            <div className="relative z-10 max-w-4xl">
              <p className="text-lg sm:text-2xl font-body italic text-slate-100 leading-relaxed mb-6">
                «{items[activeIdx].quote}»
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800 pt-6">
                <div>
                  <span className="text-base font-extrabold text-white block">
                    {items[activeIdx].author}
                  </span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    {items[activeIdx].role} — Stammkunde seit 2021
                  </span>
                </div>

                <div className="text-xs font-extrabold text-accent uppercase tracking-widest bg-slate-900 px-3 py-1.5 rounded border border-slate-800">
                  5.0 / 5.0 Google Rating
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Carousel Dot Indicators (NO ARROW BUTTONS!) */}
        <div className="flex justify-center items-center gap-2 mb-10">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Bewertung ${idx + 1} anzeigen`}
              className={`h-2.5 rounded-full transition-all ${
                activeIdx === idx
                  ? "w-8 bg-accent"
                  : "w-2.5 bg-slate-800 hover:bg-slate-700"
              }`}
            />
          ))}
        </div>

        {/* Compact Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`cursor-pointer rounded-2xl bg-slate-950 border p-6 flex flex-col justify-between transition-all ${
                activeIdx === idx
                  ? "border-accent shadow-xl scale-[1.01]"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="text-xs font-extrabold text-amber-400 mb-3 uppercase tracking-widest">
                  BEWERTUNG 5.0 / 5.0
                </div>
                <p className="text-xs text-slate-300 italic font-body leading-relaxed mb-6 line-clamp-4">
                  «{item.quote}»
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">
                    {item.author}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    {item.role}
                  </span>
                </div>
                <span className="text-[10px] bg-slate-900 text-slate-300 px-2.5 py-1 rounded font-mono font-bold">
                  Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
