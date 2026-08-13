"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);

  const beforeImg = t("beforeAfter.beforeImg") as string;
  const afterImg = t("beforeAfter.afterImg") as string;

  return (
    <section id="before-after" className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <Reveal>
            <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
              {t("beforeAfter.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary">
              {t("beforeAfter.heading") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-text-muted font-body">
              {t("beforeAfter.subheading") as string}
            </p>
          </Reveal>
        </div>

        {/* Interactive Comparison Container */}
        <Reveal delay={0.3}>
          <div className="relative w-full max-w-4xl mx-auto h-[350px] sm:h-[500px] rounded-xl overflow-hidden border border-border-subtle shadow-xl select-none bg-primary">
            {/* After Image (Base) */}
            <img
              src={afterImg}
              alt={t("beforeAfter.afterLabel") as string}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary/90 text-accent border border-accent/30 px-3 py-1 rounded text-xs font-display font-bold uppercase tracking-wider z-10">
              {t("beforeAfter.afterLabel") as string}
            </div>

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={beforeImg}
                alt={t("beforeAfter.beforeLabel") as string}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded text-xs font-display font-bold uppercase tracking-wider z-10">
                {t("beforeAfter.beforeLabel") as string}
              </div>
            </div>

            {/* Slider Divider Line & Control */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent z-20 cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-white shadow-2xl flex items-center justify-center font-bold text-sm">
                ↔
              </div>
            </div>

            {/* Range Input for Touch/Mouse Slider */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize"
              aria-label="Vorher Nachher Vergleich Regler"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
