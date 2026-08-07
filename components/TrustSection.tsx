"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function TrustSection() {
  const { t } = useLocale();

  const cards = (t("trust.cards") as Array<{ title: string; desc: string }>) || [];
  const stats = (t("trust.stats") as Array<{ num: string; label: string }>) || [];
  const images = (t("trust.images") as { main: string; secondary: string; caption: string }) || {
    main: "https://aszhh.de/wp-content/uploads/2020/09/83406573_m.jpg",
    secondary: "https://aszhh.de/wp-content/uploads/2020/07/11013421_428208404014988_354148914574248395_n.jpg",
    caption: "Робочий процес у зоні 3D-діагностики ASZ Hamburg"
  };

  return (
    <section id="trust" className="py-20 px-4 sm:px-6 bg-[hsl(215_20%_97%)] text-[hsl(215_30%_14%)]">
      <div className="max-w-7xl mx-auto">
        {/* Top Header & Pull Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-bold tracking-widest text-[hsl(24_95%_53%)] uppercase block mb-2">
                {t("trust.kicker") as string}
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold leading-tight mb-6">
                {t("trust.h2") as string}
              </h2>

              {/* Oversized Pull-Quote */}
              <blockquote className="p-6 rounded-2xl bg-white border-l-4 border-[hsl(24_95%_53%)] shadow-sm mb-8">
                <p className="font-display font-bold text-lg sm:text-xl text-[hsl(215_45%_15%)] leading-relaxed italic mb-4">
                  {t("trust.quote") as string}
                </p>
                <footer className="text-xs text-[hsl(215_15%_45%)]">
                  <strong className="text-[hsl(215_30%_14%)] font-bold">{t("trust.masterName") as string}</strong> — {t("trust.masterRole") as string}
                </footer>
              </blockquote>

              <p className="text-sm sm:text-base text-[hsl(215_15%_45%)] leading-relaxed mb-6">
                {t("trust.masterDesc") as string}
              </p>

              <a
                href="https://wa.me/494085370890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[hsl(24_95%_53%)] hover:underline"
              >
                <span>Написати пану Навабі у WhatsApp</span>
                <span>→</span>
              </a>
            </Reveal>
          </div>

          {/* 2-Photo Cluster (Overlapped/Tilted) */}
          <div className="lg:col-span-5 relative pt-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-900">
              <img
                src={images.main}
                alt="ASZ Hamburg Master"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("img-fallback");
                }}
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>

            {/* Overlapped Tilted Secondary Photo */}
            <div className="absolute -bottom-8 -left-6 sm:-left-10 w-48 sm:w-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hidden sm:block bg-gray-900">
              <img
                src={images.secondary}
                alt="Diagnostics process"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("img-fallback");
                }}
                className="w-full h-36 object-cover"
              />
            </div>

            {/* Photo Caption with Rule */}
            <div className="mt-12 sm:mt-10 pt-3 border-t border-gray-300 text-right">
              <span className="text-[11px] font-semibold text-[hsl(215_15%_45%)] block">
                {images.caption}
              </span>
            </div>
          </div>
        </div>

        {/* Real Numerals Stat Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-[hsl(215_45%_15%)] text-white mb-12 shadow-lg">
          {stats.map((st, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(24_95%_53%)] tabular-nums">
                {st.num}
              </span>
              <span className="text-xs text-white/80 font-medium mt-1">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Advantage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-[hsl(24_95%_53%)] shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded bg-[hsl(24_95%_53%/0.1)] text-[hsl(24_95%_53%)] font-display font-extrabold flex items-center justify-center text-xs mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[hsl(215_30%_14%)] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[hsl(215_15%_45%)] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
