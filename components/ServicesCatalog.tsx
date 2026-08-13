"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface ServiceItem {
  category: string;
  title: string;
  price: string;
  tag: string;
  highlight?: boolean;
  image: string;
  desc: string;
}

export default function ServicesCatalog() {
  const { t } = useLocale();
  const categories = t("services.categories") as string[];
  const items = t("services.items") as ServiceItem[];
  const [activeTab, setActiveTab] = useState("Alle Leistungen");

  const filteredItems =
    activeTab === "Alle Leistungen" || activeTab === "All Services"
      ? items
      : items.filter((i) => i.category.toLowerCase() === activeTab.toLowerCase());

  const whatsapp = t("brand.whatsapp") as string;
  const whatsappClean = whatsapp.replace(/[^0-9]/g, "");

  return (
    <section id="services" className="py-20 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <Reveal>
            <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
              {t("services.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary">
              {t("services.heading") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-text-muted font-body">
              {t("services.subheading") as string}
            </p>
          </Reveal>
        </div>

        {/* Category Filter Tabs */}
        <Reveal delay={0.25}>
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border-subtle">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2.5 rounded-md font-display font-bold text-xs tracking-wider uppercase transition-all ${
                  activeTab === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-bg-card text-text-muted hover:text-primary hover:bg-white border border-border-subtle"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Price / Offer List Layout (Dotted Leaders + Highlighted Signature Card) */}
        <div className="space-y-4 mb-10">
          {filteredItems.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div
                className={`p-5 rounded-xl border transition-all ${
                  item.highlight
                    ? "bg-primary text-white border-accent shadow-lg"
                    : "bg-bg-card text-primary border-border-subtle hover:border-primary/40 shadow-xs"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Left: Title + Micro Tag + Description */}
                  <div className="space-y-1.5 flex-1 pr-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-display font-bold text-lg sm:text-xl">
                        {item.title}
                      </span>
                      <span
                        className={`text-[10px] font-display font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider ${
                          item.highlight
                            ? "bg-accent text-white"
                            : "bg-accent/15 text-accent"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Dotted Leader Line */}
                    <div className="hidden md:block w-full border-b border-dotted border-current opacity-20 my-1" />

                    <p
                      className={`text-xs sm:text-sm font-body max-w-2xl ${
                        item.highlight ? "text-white/80" : "text-text-muted"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Right: Tabular Price + Direct WhatsApp Link */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-current/10">
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-accent tabular-nums whitespace-nowrap">
                      {item.price}
                    </div>

                    <a
                      href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent(
                        `Hallo ASZ HH, ich interessiere mich für: ${item.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded font-display font-bold text-xs uppercase tracking-wider transition-colors ${
                        item.highlight
                          ? "bg-accent text-white hover:bg-accent-hover"
                          : "bg-primary text-white hover:bg-accent"
                      }`}
                    >
                      <span>Anfragen</span>
                      <span>→</span>
                    </a>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnote Line & Secondary CTA */}
        <Reveal delay={0.3}>
          <div className="pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body text-text-muted">
            <p className="italic">
              {t("services.footnote") as string}
            </p>

            <a
              href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent(
                "Hallo ASZ HH, ich möchte einen individuellen Kostenvoranschlag per Fahrzeugschein anfordern."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-primary hover:text-accent uppercase tracking-wider shrink-0 transition-colors"
            >
              Individuelles Angebot via Fahrzeugschein anfordern →
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
