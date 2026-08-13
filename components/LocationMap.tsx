"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function LocationMap() {
  const { t } = useLocale();
  const districts = t("location.districts") as string[];

  return (
    <section className="py-20 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
                {t("location.kicker") as string}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary">
                {t("location.heading") as string}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base font-body text-text-muted leading-relaxed">
                {t("location.subheading") as string}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-6 bg-bg-card border border-border-subtle rounded-xl shadow-xs space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-display font-bold text-accent uppercase tracking-wider">
                    WERKSTATT ADRESSE
                  </span>
                  <div className="font-display font-bold text-lg text-primary">
                    {t("location.address") as string}
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-border-subtle">
                  <span className="text-xs font-display font-bold text-primary uppercase">
                    {t("location.districtsTitle") as string}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {districts.map((d, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-bg-secondary text-primary rounded font-display text-xs font-semibold"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="rounded-xl overflow-hidden border border-border-subtle shadow-xl h-[380px] sm:h-[450px] relative bg-primary">
                <iframe
                  src={t("location.mapUrl") as string}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Auto Service Zentrum Hamburg Standorte"
                  className="w-full h-full filter saturate-100"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
