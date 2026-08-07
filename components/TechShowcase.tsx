"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function TechShowcase() {
  const { t } = useLocale();

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 bg-[hsl(215_35%_8%)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={t("tech.videoPoster") as string}
                className="w-full h-[380px] sm:h-[480px] object-cover"
              >
                <source src={t("tech.videoSrc") as string} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-black/60 backdrop-blur-md border border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[hsl(24_95%_53%)] block">
                  Оснащення майстерні:
                </span>
                <span className="text-sm font-display font-bold text-white">
                  3D Laser Achsvermessung nach dem Neusten Stand
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <span className="text-xs font-bold tracking-widest text-[hsl(24_95%_53%)] uppercase block mb-2">
                {t("tech.kicker") as string}
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold leading-tight mb-6">
                {t("tech.h2") as string}
              </h2>
              <p className="text-base text-white/80 leading-relaxed mb-4">
                {t("tech.p1") as string}
              </p>
              <p className="text-base text-white/80 leading-relaxed mb-8">
                {t("tech.p2") as string}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <div className="font-display font-extrabold text-2xl text-[hsl(24_95%_53%)]">0.01°</div>
                  <div className="text-xs text-white/70">Точність лазерного виміру</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl text-[hsl(24_95%_53%)]">100%</div>
                  <div className="text-xs text-white/70">Відповідність параметрам OEM</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
