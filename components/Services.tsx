"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Services() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState("Alle Leistungen");

  const kicker = String(t("services.kicker"));
  const title = String(t("services.title"));
  const subtitle = String(t("services.subtitle"));
  const categories = (t("services.categories") as string[]) || ["Alle Leistungen"];
  const items = (t("services.items") as Array<{
    id: string;
    category: string;
    title: string;
    description: string;
    price: string;
    badge: string;
  }>) || [];

  const filteredItems =
    activeCategory === "Alle Leistungen" || activeCategory === "All Services"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-accent uppercase mb-2 block font-display">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-body leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-accent text-slate-950 shadow-lg shadow-accent/20"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Signature Box: 3D Achsvermessung */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-accent/40 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block px-3 py-1 rounded bg-accent/20 text-accent font-extrabold text-[10px] uppercase tracking-wider mb-3">
                HIGHLIGHT / MEISTER-SPEZIAL
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                3D-Laser-Achsvermessung & Spurverstellung
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body mb-6">
                Höchste Präzision durch digitale Laser-Sensorik. Verhindert ungleichmäßigen Reifenverschleiß, senkt Kraftstoffverbrauch und garantiert maximale Spurtreue auf nasser Fahrbahn.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-bold uppercase tracking-wider">
                <div>
                  Dauer: <span className="text-white">ca. 45 Min.</span>
                </div>
                <div>
                  Festpreis: <span className="text-accent font-extrabold text-base">ab 89 €</span>
                </div>
                <div>
                  Garantie: <span className="text-white">Messprotokoll inkl.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-48 sm:h-56 rounded-xl overflow-hidden border border-slate-800">
              <img
                src="https://aszhh.de/wp-content/uploads/2020/07/11013421_428208404014988_354148914574248395_n.jpg"
                alt="3D Achsvermessung Hamburg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* Dotted Leader Price List */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl mb-8 space-y-6">
          <div className="border-b border-slate-800 pb-4 flex items-center justify-between text-xs font-extrabold text-slate-400 uppercase tracking-widest">
            <span>Leistungsbezeichnung & Details</span>
            <span>Richtpreis</span>
          </div>

          <div className="space-y-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group flex flex-col gap-1">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-base sm:text-lg font-extrabold text-white group-hover:text-accent transition-colors font-display">
                    {item.title}
                  </span>
                  <span className="flex-1 border-b border-dotted border-slate-700/80 mx-2 hidden sm:block" />
                  <span className="text-base sm:text-lg font-black text-accent font-display whitespace-nowrap">
                    {item.price}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 font-body">
                  <p className="max-w-2xl">{item.description}</p>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 w-max shrink-0">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote Line */}
          <div className="pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span>
              * Alle Preise inkl. MwSt., Markenöl & Ersatzteile in Erstausrüsterqualität. Verbindlicher Festpreis nach Durchsicht.
            </span>
            <a
              href="https://wa.me/491724715522?text=Hallo%20ASZ%20Hamburg,%20ich%20m%C3%B6chte%20ein%20Angebot%20f%C3%BCr%20eine%20Inspektion."
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-extrabold uppercase text-xs tracking-wider whitespace-nowrap"
            >
              Kostenvoranschlag via WhatsApp anfordern →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
