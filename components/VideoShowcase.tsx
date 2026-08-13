"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function VideoShowcase() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Video Container */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={t("videoShowcase.videoPoster") as string}
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                >
                  <source src={t("videoShowcase.videoSrc") as string} type="video/mp4" />
                </video>
                <div className="absolute bottom-4 left-4 right-4 bg-primary/80 backdrop-blur-md p-4 rounded-lg border border-white/10 text-xs font-body text-white/90">
                  <span className="font-display font-bold text-accent uppercase block mb-1">
                    PRÜFSTAND-DIAGNOSE & 3D-ACHSVERMESSUNG
                  </span>
                  Moderne Hebebühnen und Laser-Messtechnik für maximale Fahrsicherheit.
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stats & Description */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
                {t("videoShowcase.kicker") as string}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                {t("videoShowcase.heading") as string}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base text-white/80 font-body leading-relaxed">
                {t("videoShowcase.subheading") as string}
              </p>
            </Reveal>

            {/* Stat Badges */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-accent">
                    {t("videoShowcase.stat1") as string}
                  </div>
                  <div className="text-[11px] font-display text-white/70">
                    {t("videoShowcase.stat1Label") as string}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-accent">
                    {t("videoShowcase.stat2") as string}
                  </div>
                  <div className="text-[11px] font-display text-white/70">
                    {t("videoShowcase.stat2Label") as string}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-accent">
                    {t("videoShowcase.stat3") as string}
                  </div>
                  <div className="text-[11px] font-display text-white/70">
                    {t("videoShowcase.stat3Label") as string}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
