"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface FaqItem {
  q: string;
  a: string;
}

export default function Faq() {
  const { t } = useLocale();
  const items = t("faq.items") as FaqItem[];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <Reveal>
            <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
              {t("faq.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary">
              {t("faq.heading") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-text-muted font-body">
              {t("faq.subheading") as string}
            </p>
          </Reveal>
        </div>

        <div className="max-w-4xl space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 font-display font-bold text-base sm:text-lg text-primary flex items-center justify-between gap-4 hover:text-accent transition-colors"
                  >
                    <span>{item.q}</span>
                    <span className="text-accent text-xl font-bold shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm font-body text-text-muted leading-relaxed border-t border-border-subtle/50 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
