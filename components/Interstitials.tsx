"use client";

export function MarqueeTicker() {
  return (
    <div className="bg-accent text-slate-950 py-3.5 overflow-hidden whitespace-nowrap font-extrabold text-xs uppercase tracking-widest border-y border-amber-500/50">
      <div className="inline-flex gap-12 animate-marquee">
        <span>KFZ-MEISTERBETRIEB HERR NAWABI</span>
        <span>—</span>
        <span>3D-LASER-ACHSVERMESSUNG DIGITAL</span>
        <span>—</span>
        <span>HU / AU TAGES-CHECK</span>
        <span>—</span>
        <span>PROFI-AUTOREINIGUNG & OZON</span>
        <span>—</span>
        <span>INSPEKTION MIT HERSTELLERGARANTIE</span>
        <span>—</span>
        <span>KIELER STRASSE 207 HAMBURG</span>
        <span>—</span>
        <span>KFZ-MEISTERBETRIEB HERR NAWABI</span>
        <span>—</span>
        <span>3D-LASER-ACHSVERMESSUNG DIGITAL</span>
      </div>
    </div>
  );
}

export function StatementBand() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-12 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-accent block mb-2 font-display">
          WERKSTATT-PHILOSOPHIE
        </span>
        <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
          MEISTERQUALITÄT FÜR ALLE MARKEN — SEIT 2015 IN HAMBURG-EIMSBÜTTEL
        </h3>
      </div>
    </section>
  );
}

export function HairlineStrip() {
  return (
    <div className="py-4 bg-slate-950 border-y border-slate-800/80 text-center text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-400">
      HERSTELLERGARANTIE BLEIBT ERHALTEN · 3D-LASER-ACHSVERMESSUNG · PROFI-AUTOREINIGUNG STUDIO · KIELER STR. 207
    </div>
  );
}
