"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FaqSection() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const kicker = String(t("faq.kicker"));
  const title = String(t("faq.title"));
  const items = (t("faq.items") as Array<{
    question: string;
    answer: string;
  }>) || [];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold tracking-widest text-accent uppercase mb-2 block font-display">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between text-sm sm:text-base font-extrabold text-white hover:text-accent transition-colors"
                >
                  <span>{item.question}</span>
                  <span className="text-accent text-xl font-mono ml-4 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 font-body leading-relaxed border-t border-slate-800/60">
                    {item.answer}
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
