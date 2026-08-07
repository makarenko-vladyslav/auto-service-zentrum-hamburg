"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function ServicesSection() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<string>("Усі послуги");

  const categories = (t("servicesSection.categories") as string[]) || ["Усі послуги"];
  const services = (t("servicesSection.items") as Array<{
    id: string;
    category: string;
    title: string;
    price: string;
    unit?: string;
    desc: string;
    image: string;
    tag?: string;
    bullets: string[];
  }>) || [];

  const filteredServices = activeTab === "Усі послуги"
    ? services
    : services.filter((s) => s.category === activeTab);

  const signatureService = services.find((s) => s.id === "achsvermessung") || services[0];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-[hsl(215_20%_97%)] text-[hsl(215_30%_14%)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal className="mb-10">
          <span className="text-xs font-bold tracking-widest text-[hsl(24_95%_53%)] uppercase block mb-2">
            {t("servicesSection.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold max-w-3xl leading-tight mb-4">
            {t("servicesSection.h2") as string}
          </h2>
          <p className="text-base sm:text-lg text-[hsl(215_15%_45%)] max-w-2xl">
            {t("servicesSection.sub") as string}
          </p>
        </Reveal>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gray-200">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === cat
                  ? "bg-[hsl(215_45%_15%)] text-white shadow"
                  : "bg-white text-[hsl(215_15%_45%)] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Price List (Rows with Dotted Leaders) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="divide-y divide-gray-100">
              {filteredServices.map((s) => (
                <div key={s.id} className="py-4 first:pt-0 last:pb-0 group">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-base sm:text-lg text-[hsl(215_30%_14%)] group-hover:text-[hsl(24_95%_53%)] transition-colors">
                        {s.title}
                      </h3>
                      {s.tag && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-[hsl(24_95%_53%/0.1)] text-[hsl(24_95%_53%)]">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    {/* Dotted Leader Line */}
                    <div className="flex-grow mx-2 border-b border-dotted border-gray-300 hidden sm:block" />
                    <div className="font-display font-extrabold text-base sm:text-lg text-[hsl(24_95%_53%)] whitespace-nowrap tabular-nums">
                      {s.unit ? `${s.unit} ` : ""}{s.price}
                    </div>
                  </div>
                  <p className="text-xs text-[hsl(215_15%_45%)] leading-relaxed max-w-xl">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Footnote Line */}
            <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[hsl(215_15%_45%)]">
              <span>{t("servicesSection.footnote") as string}</span>
              <a
                href="https://wa.me/494085370890"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[hsl(24_95%_53%)] hover:underline whitespace-nowrap"
              >
                Уточнити ціну на деталь →
              </a>
            </div>
          </div>

          {/* Signature Featured Service Card */}
          <div className="lg:col-span-4 bg-[hsl(215_35%_8%)] text-white rounded-2xl border border-white/10 p-6 shadow-xl sticky top-24">
            <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-black">
              <img
                src={signatureService.image}
                alt={signatureService.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("img-fallback");
                }}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-[hsl(24_95%_53%)] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                Флагманська послуга
              </div>
            </div>

            <h3 className="font-display font-extrabold text-2xl text-white mb-2">
              {signatureService.title}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              {signatureService.desc}
            </p>

            <div className="p-3 rounded bg-white/5 border border-white/10 mb-6">
              <span className="text-[10px] uppercase font-bold text-[hsl(24_95%_53%)] block mb-1">
                Ключові технології:
              </span>
              <ul className="space-y-1 text-xs text-white/80">
                {signatureService.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(24_95%_53%)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-white/60 uppercase font-bold">Фіксований тариф:</span>
              <span className="font-display font-extrabold text-2xl text-[hsl(24_95%_53%)] tabular-nums">
                {signatureService.price}
              </span>
            </div>

            <a
              href="https://wa.me/494085370890"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 bg-[hsl(24_95%_53%)] hover:bg-[hsl(24_95%_45%)] text-white font-bold text-xs uppercase tracking-wider rounded text-center transition-all shadow"
            >
              Записатися на 3D Laser
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
