"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal, Carousel } from "@/components/motion";

interface Testimonial {
  quote: string;
  author: string;
  history: string;
  rating: number;
  tag: string;
}

export default function Testimonials() {
  const { t } = useLocale();
  const items = t("testimonials.items") as Testimonial[];

  return (
    <section id="testimonials" className="py-20 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <Reveal>
            <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
              {t("testimonials.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary">
              {t("testimonials.heading") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-text-muted font-body">
              {t("testimonials.subheading") as string}
            </p>
          </Reveal>
        </div>

        {/* Main Display Quote with Oversized Quotation Mark */}
        <Reveal delay={0.25}>
          <div className="mb-12 bg-primary text-white p-8 sm:p-12 rounded-2xl shadow-xl relative overflow-hidden">
            <span className="absolute -top-4 -left-2 text-white/10 text-9xl font-display font-black select-none pointer-events-none">
              “
            </span>
            <div className="relative z-10 max-w-3xl space-y-4">
              <p className="text-xl sm:text-2xl font-body italic text-white/95 leading-relaxed">
                «{t("testimonials.featuredQuote") as string}»
              </p>
              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-display font-bold text-base text-accent">
                    {t("testimonials.featuredAuthor") as string}
                  </div>
                  <div className="text-xs text-white/70 font-body">
                    {t("testimonials.featuredDescriptor") as string}
                  </div>
                </div>
                <div className="text-xs font-display font-bold text-white/80 bg-white/10 px-3 py-1 rounded-full w-fit">
                  4.8/5 · Google · 150+ Bewertungen
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Testimonials Carousel (Dots + Touch Swipe Only) */}
        <Reveal delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <Carousel>
              {items.map((item, idx) => (
                <div key={idx} className="p-2">
                  <div className="bg-bg-card border border-border-subtle p-8 sm:p-10 rounded-xl shadow-xs text-center space-y-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-display font-bold text-xs uppercase tracking-wider">
                      {item.tag}
                    </div>

                    <p className="text-base sm:text-lg font-body text-primary italic leading-relaxed max-w-2xl mx-auto">
                      «{item.quote}»
                    </p>

                    <div className="space-y-1">
                      <div className="text-yellow-500 text-sm font-display font-bold">
                        5.0 ★★★★★
                      </div>
                      <div className="font-display font-bold text-base text-primary">
                        {item.author}
                      </div>
                      <div className="text-xs text-text-muted font-body">
                        {item.history} · Verifizierte Google Bewertung
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
