"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

interface Step {
  num: string;
  title: string;
  time: string;
  text: string;
}

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps") as Step[];

  return (
    <section className="py-20 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <Reveal>
            <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
              {t("process.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary">
              {t("process.heading") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-text-muted font-body">
              {t("process.subheading") as string}
            </p>
          </Reveal>
        </div>

        {/* Steps Grid with Timeline Hairline */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-bg-card border border-border-subtle p-7 rounded-xl shadow-xs h-full flex flex-col justify-between relative group hover:border-accent transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-accent/10 text-accent font-display font-extrabold text-xs uppercase tracking-wider">
                      SCHRITT {step.num}
                    </span>
                    <span className="text-xs font-display font-semibold text-text-muted">
                      {step.time}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-primary">
                    {step.title}
                  </h3>

                  <p className="text-sm font-body text-text-muted leading-relaxed">
                    {step.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle text-[11px] font-display font-bold text-primary uppercase tracking-wider">
                  Werkstatt Kieler Straße
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
