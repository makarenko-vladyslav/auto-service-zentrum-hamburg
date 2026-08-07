"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function FaqSection() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const items = (t("faq.items") as Array<{ q: string; a: string }>) || [];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-[hsl(215_20%_97%)] text-[hsl(215_30%_14%)]">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-bold tracking-widest text-[hsl(24_95%_53%)] uppercase block mb-2">
            {t("faq.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold leading-tight">
            {t("faq.h2") as string}
          </h2>
        </Reveal>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left font-display font-bold text-lg text-[hsl(215_30%_14%)] flex justify-between items-center gap-4 focus:outline-none"
              >
                <span>{item.q}</span>
                <span className="text-xl text-[hsl(24_95%_53%)] font-extrabold">
                  {openIdx === idx ? "−" : "+"}
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-[hsl(215_15%_45%)] leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
