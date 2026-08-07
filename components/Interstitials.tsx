
"use client";

export function MarqueeTicker() {
  return (
    <div className="bg-black text-white py-3 border-y border-white/10 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] text-xs font-display font-bold uppercase tracking-widest text-white/80">
        <span className="mx-4">KFZ-MEISTERBETRIEB HAMBURG</span>
        <span className="text-accent">—</span>
        <span className="mx-4">3D LAZER ACHSVERMESSUNG</span>
        <span className="text-accent">—</span>
        <span className="mx-4">HU / AU TÜV INSPEKTION</span>
        <span className="text-accent">—</span>
        <span className="mx-4">PROFI AUTOREINIGUNG & DETAILING</span>
        <span className="text-accent">—</span>
        <span className="mx-4">REIFEN.COM OFFICIAL PARTNER</span>
        <span className="text-accent">—</span>
        <span className="mx-4">KIELER STRASSE 207</span>
        <span className="text-accent">—</span>
      </div>
    </div>
  );
}

export function StatementBand() {
  return (
    <div className="bg-primary-tint py-10 border-y border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xs font-display font-bold uppercase tracking-widest text-accent border-l-2 border-accent pl-3">
          СЕРТИФІКОВАНА НІМЕЦЬКА ДІАГНОСТИКА · KIELER STR. 207
        </div>
        <div className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white text-center md:text-right">
          ЗБЕРЕЖЕННЯ ЗАВОДСЬКОЇ ГАРАНТІЇ ВИРОБНИКА ТА ПРЯМИЙ КОНТРОЛЬ MEISTER
        </div>
      </div>
    </div>
  );
}

export function CertificationBar() {
  return (
    <div className="bg-white py-6 border-y hairline-border text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-primary">
        <div className="flex items-center gap-2">
          <span className="text-accent font-mono font-black text-sm">4.8 / 5.0</span>
          <span>GOOGLE MAPS RATING</span>
        </div>
        <div className="hidden sm:block text-gray-300">•</div>
        <div className="flex items-center gap-2">
          <span className="text-accent font-mono font-black text-sm">TÜV / DEKRA</span>
          <span>ОФІЦІЙНИЙ ТЕХОГЛЯД</span>
        </div>
        <div className="hidden md:block text-gray-300">•</div>
        <div className="flex items-center gap-2">
          <span className="text-accent font-mono font-black text-sm">REIFEN.COM</span>
          <span>СЕРТИФІКОВАНИЙ ПАРТНЕР</span>
        </div>
      </div>
    </div>
  );
}
