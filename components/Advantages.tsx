"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

interface AdvantageCard {
  num: string;
  title: string;
  text: string;
}

interface StatItem {
  value: string;
  label: string;
}

export default function Advantages() {
  const { t } = useLocale();
  const cards = t("advantages.cards") as AdvantageCard[];
  const stats = t("advantages.stats") as StatItem[];

  return (
    <section id="advantages" className="py-20 bg-bg-light relative overflow-hidden">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-0 z-0 opacity-[0.03] text-[15vw] font-display font-extrabold uppercase tracking-tighter text-primary whitespace-nowrap pointer-events-none"
      >
        QUALITÄT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <Reveal>
            <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
              {t("advantages.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary leading-tight">
              {t("advantages.heading") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-text-muted font-body leading-relaxed">
              {t("advantages.subheading") as string}
            </p>
          </Reveal>
        </div>

        {/* Oversized Statement / Pull Quote Layer */}
        <Reveal delay={0.25}>
          <div className="mb-14 p-8 bg-primary text-white rounded-xl shadow-lg relative overflow-hidden border border-white/10">
            <div className="max-w-3xl space-y-3">
              <span className="text-accent text-4xl font-display font-black block leading-none">«</span>
              <p className="text-lg sm:text-xl font-body italic text-white/95 leading-relaxed">
                {t("advantages.quote") as string}
              </p>
              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-display">
                <span className="font-bold text-accent uppercase tracking-wider">
                  {t("advantages.quoteAuthor") as string}
                </span>
                <span className="text-white/60">Kieler Straße 207</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Cards Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-bg-card border border-border-subtle p-7 rounded-xl shadow-xs hover:shadow-md transition-all h-full flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-extrabold text-2xl text-accent tabular-nums">
                      {card.num}
                    </span>
                    <span className="w-8 h-0.5 bg-accent/30 group-hover:w-12 transition-all" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm font-body text-text-muted leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Stat Row with 4 Real Numerals */}
        <Reveal delay={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-bg-secondary rounded-xl border border-border-subtle">
            {stats.map((st, i) => (
              <div key={i} className="space-y-1 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-primary tabular-nums">
                  {st.value}
                </div>
                <div className="text-xs font-display font-bold uppercase tracking-wider text-text-muted">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
