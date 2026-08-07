
"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface FaqItem {
  q: string;
  a: string;
}

export default function Faq() {
  const { t } = useLocale();
  const items = t('faq.items') as FaqItem[];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-bg-light text-text-main relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
            {t('faq.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-primary mt-1">
            {t('faq.title') as string}
          </h2>
        </div>

        {/* Full Container Width Accordion */}
        <div className="flex flex-col gap-4">
          {items &&
            items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border hairline-border rounded overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg uppercase text-primary hover:text-accent transition-colors"
                  >
                    <span>{item.q}</span>
                    <span className="text-accent font-mono text-xl leading-none">
                      {isOpen ? '[ - ]' : '[ + ]'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-text-muted leading-relaxed border-t hairline-border pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
