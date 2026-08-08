"use client";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-accent via-amber-400 to-amber-500 text-slate-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest bg-slate-950 text-accent px-3.5 py-1 rounded-full inline-block mb-3 font-display">
            SCHNELLER MEISTER-SERVICE IN EIMSBÜTTEL
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Sichern Sie sich Ihren Werkstatt-Termin
          </h2>
          <p className="text-sm sm:text-base font-bold max-w-2xl mx-auto text-slate-900 font-body leading-relaxed">
            Senden Sie uns einfach ein Foto Ihres Fahrzeugscheins per WhatsApp für ein transparentes Festpreis-Angebot innerhalb von 30 Minuten.
          </p>
        </div>

        {/* Action Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://wa.me/491724715522?text=Hallo%20ASZ%20Hamburg,%20ich%20m%C3%B6chte%20ein%20Angebot%20f%C3%BCr%20mein%20Fahrzeug."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 hover:bg-slate-900 text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-3 shadow-2xl transition-transform hover:scale-105"
          >
            <span>Termin per WhatsApp anfragen</span>
            <span className="text-accent">→</span>
          </a>

          <a
            href="tel:+49405401050"
            className="text-xs font-extrabold text-slate-950 uppercase tracking-wider underline hover:text-white transition-colors"
          >
            Oder direkt anrufen: 040 540 10 50
          </a>
        </div>

        {/* Mini Hours & Address Row */}
        <div className="pt-6 border-t border-slate-950/20 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs font-extrabold uppercase tracking-wider text-slate-900">
          <div>Mo – Fr: 08:00 – 18:00 Uhr | Sa: nach Vereinbarung</div>
          <div>Kieler Straße 207, 22525 Hamburg-Eimsbüttel</div>
          <div>— Digitale Serviceheft-Eintragung · Keine versteckten Kosten</div>
        </div>
      </div>
    </section>
  );
}
