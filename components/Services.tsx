
"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  price: string;
  tag: string;
  img: string;
}

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as ServiceItem[];
  const categories = (t('services.categories') as string[]) || ["Всі послуги"];
  const [activeCategory, setActiveCategory] = useState("Всі послуги");

  const filteredItems = activeCategory === "Всі послуги" || activeCategory === "All Services"
    ? items
    : items?.filter((i) => i.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-white text-text-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b hairline-border pb-6">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
              {t('services.kicker') as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-primary mt-1">
              {t('services.title') as string}
            </h2>
          </div>
          <p className="text-text-muted text-sm sm:text-base max-w-md">
            {t('services.subtitle') as string}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b hairline-border pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-display font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-bg-light text-text-muted hover:text-primary hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Offer List as Dense Rows with Dotted Leader */}
        <div className="flex flex-col gap-4">
          {filteredItems &&
            filteredItems.map((srv, idx) => {
              const isFeatured = idx === 0; // Highlight first signature item
              return (
                <div
                  key={srv.id}
                  className={`group flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-5 rounded border transition-all ${
                    isFeatured
                      ? 'bg-primary text-white border-accent shadow-xl'
                      : 'bg-bg-light hover:bg-white text-text-main hairline-border shadow-sm'
                  }`}
                >
                  {/* Left Section: Image + Title + Tag */}
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded object-cover border border-white/20 shrink-0"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-display font-bold uppercase px-2 py-0.5 rounded ${
                            isFeatured
                              ? 'bg-accent text-primary'
                              : 'bg-primary/10 text-primary'
                          }`}
                        >
                          {srv.tag}
                        </span>
                        <span className={`text-xs font-mono ${isFeatured ? 'text-white/60' : 'text-text-muted'}`}>
                          {srv.category}
                        </span>
                      </div>
                      <h3
                        className={`font-display font-black text-lg sm:text-xl uppercase mt-1 ${
                          isFeatured ? 'text-white' : 'text-primary'
                        }`}
                      >
                        {srv.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm mt-1 max-w-xl ${
                          isFeatured ? 'text-white/80' : 'text-text-muted'
                        }`}
                      >
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  {/* Middle Dotted Leader Line (Desktop) */}
                  <div className="hidden lg:block flex-grow mx-6 border-b border-dotted border-gray-400 opacity-40" />

                  {/* Right Section: Price + CTA */}
                  <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0 pt-3 md:pt-0 border-t md:border-t-0 hairline-border">
                    <div
                      className={`font-display font-black text-xl sm:text-2xl font-mono whitespace-nowrap ${
                        isFeatured ? 'text-accent' : 'text-primary'
                      }`}
                    >
                      {srv.price}
                    </div>

                    <a
                      href={`https://wa.me/4917680008000?text=Вітаю!%20Мене%20цікавить%20послуга:%20${encodeURIComponent(
                        srv.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded text-xs font-display font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                        isFeatured
                          ? 'bg-accent text-primary hover:bg-accent-hover'
                          : 'bg-primary text-white hover:bg-primary-tint'
                      }`}
                    >
                      Запис ->
                    </a>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Footnote & Secondary CTA */}
        <div className="mt-8 pt-6 border-t hairline-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p className="font-mono">
            * Нормо-година робіт становить від 89 € без ПДВ. Фінальний кошторис узгоджується до початку ремонтних робіт.
          </p>
          <a
            href="#calculator"
            className="font-display font-bold uppercase text-primary hover:text-accent tracking-wider whitespace-nowrap"
          >
            Розрахувати точний кошторис у калькуляторі ->
          </a>
        </div>
      </div>
    </section>
  );
}
