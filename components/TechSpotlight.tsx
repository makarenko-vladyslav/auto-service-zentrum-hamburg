"use client";

import { useLocale } from "@/lib/i18n";

export default function TechSpotlight() {
  const { t } = useLocale();

  const kicker = String(t("techFeature.kicker"));
  const title = String(t("techFeature.title"));
  const subtitle = String(t("techFeature.subtitle"));
  const points = (t("techFeature.points") as string[]) || [];

  return (
    <section id="meister" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Visual Media Cluster: 2 Overlapping Framed Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src="https://aszhh.de/wp-content/uploads/2020/07/11013421_428208404014988_354148914574248395_n.jpg"
                alt="3D Laser Achsvermessung Auto Service Zentrum Hamburg"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('img-fallback');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>

            {/* Tilted Overlapping Secondary Photo Frame */}
            <div className="absolute -bottom-6 -right-4 w-1/2 rounded-xl overflow-hidden border-2 border-slate-700 shadow-2xl hidden sm:block">
              <img
                src="https://aszhh.de/wp-content/uploads/2020/07/11140415_437242389778256_3874909097478851261_n-400x400.jpg"
                alt="KFZ Bremsen Reparatur Hamburg"
                className="w-full h-36 object-cover"
              />
            </div>

            <div className="mt-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
              — Werkstattbühne 1 & 3D-Laser-Messstand, Kieler Straße 207
            </div>
          </div>

          {/* Feature Copy & Pull Quote */}
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold tracking-widest text-accent uppercase mb-2 block font-display">
              {kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              {title}
            </h2>

            {/* Oversized Statement Pull Quote */}
            <blockquote className="border-l-2 border-accent pl-4 my-6 text-base sm:text-lg font-body italic text-amber-200 leading-relaxed">
              «Transparenz und technische Perfektion sind bei uns keine Floskeln, sondern tägliche Werkstattpraxis.»
            </blockquote>

            <p className="text-slate-300 text-sm sm:text-base font-body leading-relaxed mb-6">
              {subtitle}
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent font-black text-sm shrink-0">
                    —
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/491724715522?text=Hallo%20ASZ%20Hamburg,%20ich%20m%C3%B6chte%20einen%20Termin%20f%C3%BCr%20eine%203D-Achsvermessung."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-amber-400 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-accent/20 transition-all"
              >
                3D-Achsvermessung anfragen (ab 89 €) →
              </a>
            </div>
          </div>
        </div>

        {/* Person / Master Caption Bar */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-sm font-extrabold text-white block">
              Herr Nawabi — KFZ-Meister & Inhaber
            </span>
            <span className="text-xs text-slate-400">
              Persönliche Beratung & Diagnostik direkt auf der Hebebühne.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-300 font-bold uppercase tracking-wider">
            <div>100% Herstellungsgarantie</div>
            <div>3D Laser Messung</div>
            <div>11+ Jahre Eimsbüttel</div>
          </div>
        </div>
      </div>
    </section>
  );
}
