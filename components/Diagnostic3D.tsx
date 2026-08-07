
"use client";

import { useLocale } from '@/lib/i18n';

export default function Diagnostic3D() {
  const { t } = useLocale();
  const features = t('diag3d.features') as string[];

  return (
    <section id="diagnostics" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Watermark Word */}
      <div
        aria-hidden="true"
        className="absolute left-0 bottom-0 z-0 pointer-events-none select-none opacity-[0.03] font-display font-black text-[20vw] leading-none text-white whitespace-nowrap"
      >
        3D LASER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
                {t('diag3d.kicker') as string}
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white leading-tight mt-1">
                {t('diag3d.title') as string}
              </h2>
            </div>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {t('diag3d.desc') as string}
            </p>

            {/* Badge Highlight */}
            <div className="p-4 bg-primary-tint rounded border border-accent/40 text-accent font-display font-extrabold uppercase text-xs tracking-wider flex items-center justify-between">
              <span>Achsvermessung nach dem Neusten Stand per 3D Laser</span>
              <span className="font-mono text-white">Точність 0.1 мм</span>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features &&
                features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/10 text-xs">
                    <span className="text-accent font-mono font-bold text-sm">0{idx + 1}.</span>
                    <span className="text-white/90 font-medium">{feat}</span>
                  </div>
                ))}
            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://wa.me/4917680008000?text=Хочу%20записатися%20на%203D%20розвал-сходження"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-display font-black uppercase tracking-wider text-sm rounded shadow-xl transition-all"
              >
                <span>Записатись на 3D-перевірку підвіски</span>
                <span className="font-bold">-></span>
              </a>
            </div>
          </div>

          {/* Laser Diagnostic Visual Representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-accent/30 shadow-2xl bg-black">
              <img
                src="https://aszhh.de/wp-content/uploads/2020/07/11013421_428208404014988_354148914574248395_n.jpg"
                alt="3D Achsvermessung ASZ Hamburg"
                className="w-full h-[400px] object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
              {/* Laser Line Representation */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-accent shadow-[0_0_15px_#ff9900] animate-pulse" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/85 backdrop-blur-md rounded border border-white/10 text-xs text-white">
                <span className="font-bold text-accent font-mono">ASZ 3D Laser Matrix:</span> Точне регулювання геометричних кутів колісної бази.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
