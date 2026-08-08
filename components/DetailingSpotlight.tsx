"use client";

import { useLocale } from "@/lib/i18n";

export default function DetailingSpotlight() {
  const { t } = useLocale();

  const kicker = String(t("detailingFeature.kicker"));
  const title = String(t("detailingFeature.title"));
  const subtitle = String(t("detailingFeature.subtitle"));
  const points = (t("detailingFeature.points") as string[]) || [];

  return (
    <section id="detailing" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Feature Text Left */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <span className="text-xs font-extrabold tracking-widest text-emerald-400 uppercase mb-2 block font-display">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-body leading-relaxed mb-8">
            {subtitle}
          </p>

          <ul className="space-y-4 mb-8">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-emerald-400 font-black text-sm shrink-0">
                  —
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  {pt}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/491724715522?text=Hallo%20ASZ%20Hamburg,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Profi-Autoreinigung."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all"
          >
            <span>Autoreinigung & Ozon anfragen →</span>
          </a>
        </div>

        {/* Feature Image Right */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
            <img
              src="https://aszhh.de/wp-content/uploads/2020/07/11018083_428208434014985_2545892715827016009_n.jpg"
              alt="Profi Autoreinigung Studio ASZ Hamburg"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('img-fallback');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-800">
              <span className="text-emerald-400 font-bold text-xs uppercase block mb-1">
                Profi-Autoreinigung Studio
              </span>
              <p className="text-slate-300 text-xs">
                Spezialisierte Tiefenreinigung & Ozon-Geruchsbeseitigung direkt im Haus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
