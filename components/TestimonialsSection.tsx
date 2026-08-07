"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function TestimonialsSection() {
  const { t } = useLocale();
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = (t("testimonials.items") as Array<{
    quote: string;
    author: string;
    role: string;
  }>) || [];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 bg-[hsl(215_20%_97%)] text-[hsl(215_30%_14%)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Kicker & Heading */}
        <Reveal className="mb-12">
          <span className="text-xs font-bold tracking-widest text-[hsl(24_95%_53%)] uppercase block mb-2">
            {t("testimonials.kicker") as string}
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold max-w-2xl leading-tight">
                {t("testimonials.h2") as string}
              </h2>
            </div>
            {/* Plain text rating badge */}
            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="font-display font-extrabold text-3xl text-[hsl(24_95%_53%)] tabular-nums">
                4.8 / 5.0
              </div>
              <div className="text-xs text-[hsl(215_15%_45%)] font-medium">
                <div className="font-bold text-[hsl(215_30%_14%)]">Google Maps Reviews</div>
                <div>{t("testimonials.totalReviews") as string}</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Featured Quote in Display Type with Oversized Quotation Mark */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-sm mb-12 relative overflow-hidden">
          <span className="absolute -top-6 -left-2 text-9xl font-serif text-[hsl(24_95%_53%/0.12)] select-none pointer-events-none">
            “
          </span>

          <div className="relative z-10 max-w-4xl">
            <blockquote className="font-display font-bold text-xl sm:text-3xl text-[hsl(215_45%_15%)] leading-snug mb-6">
              {t("testimonials.featuredQuote") as string}
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[hsl(215_45%_15%)] text-white font-display font-bold flex items-center justify-center text-sm">
                {(t("testimonials.featuredAuthor") as string).charAt(0)}
              </div>
              <div>
                <div className="font-display font-bold text-base text-[hsl(215_30%_14%)]">
                  {t("testimonials.featuredAuthor") as string}
                </div>
                <div className="text-xs text-[hsl(215_15%_45%)]">
                  {t("testimonials.featuredRole") as string}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Carousel for all reviews (DOT indicators ONLY, no arrow buttons!) */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(activeIdx, activeIdx + 3).map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between h-full"
              >
                <p className="text-xs sm:text-sm italic text-[hsl(215_30%_20%)] leading-relaxed mb-6">
                  «{rev.quote}»
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[hsl(24_95%_53%/0.15)] text-[hsl(24_95%_53%)] font-display font-bold flex items-center justify-center text-xs">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-xs text-[hsl(215_30%_14%)]">
                      {rev.author}
                    </div>
                    <div className="text-[11px] text-[hsl(215_15%_45%)]">{rev.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DOT Indicators (NO ARROWS) */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setActiveIdx(dotIdx * 3)}
                aria-label={`Slide ${dotIdx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  Math.floor(activeIdx / 3) === dotIdx
                    ? "w-8 bg-[hsl(24_95%_53%)]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
