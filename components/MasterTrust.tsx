
"use client";

import { useLocale } from '@/lib/i18n';

export default function MasterTrust() {
  const { t } = useLocale();
  const points = t('meister.points') as string[];

  return (
    <section id="meister" className="py-20 bg-bg-light text-text-main relative overflow-hidden">
      {/* Background Watermark */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none opacity-[0.03] text-primary font-display font-black text-[22vw] leading-none whitespace-nowrap"
      >
        NAWABI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 2-Photo Cluster + Accreditation Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Primary Photo */}
              <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-primary/10 bg-primary">
                <img
                  src="https://aszhh.de/wp-content/uploads/2020/09/83406573_m.jpg"
                  alt="KFZ-Meisterbetrieb Auto Service Zentrum Hamburg"
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                />
                <div className="p-3 bg-primary text-white text-xs border-t border-white/10 flex items-center justify-between font-mono">
                  <span>Головний інспекційний бокс</span>
                  <span className="text-accent font-bold">Kieler Str. 207</span>
                </div>
              </div>

              {/* Tilted Overlapped Secondary Photo */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-52 rounded-lg overflow-hidden shadow-2xl border-4 border-white bg-primary transform rotate-2 hidden sm:block">
                <img
                  src="https://aszhh.de/wp-content/uploads/2020/07/11987160_487026658133162_2622021430123409528_n-400x400.jpg"
                  alt="Пан Навабі KFZ-Meister"
                  className="w-full h-44 object-cover"
                />
                <div className="p-2 bg-primary-tint text-accent text-[10px] font-display font-bold uppercase tracking-wider text-center">
                  Пан Навабі · Meister
                </div>
              </div>

              {/* Circular Accreditation Seal */}
              <div className="absolute -top-6 -left-4 sm:-left-6 flex flex-col items-center justify-center w-24 h-24 bg-accent text-primary rounded-full font-display font-black text-center text-[10px] uppercase p-2 shadow-xl border-2 border-white">
                <span>Geprüfter</span>
                <span className="text-xs font-black">KFZ-Meister</span>
                <span>Hamburg</span>
              </div>
            </div>
          </div>

          {/* Right Column: Statement, Quote, Stat Row & Points */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
                {t('meister.kicker') as string}
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-primary leading-tight mt-1">
                {t('meister.title') as string}
              </h2>
            </div>

            {/* Direct Meister Quote with Display Styling */}
            <blockquote className="p-6 bg-primary text-white rounded-lg border-l-4 border-accent relative">
              <span className="font-serif text-5xl text-accent leading-none absolute top-2 left-3 opacity-30">“</span>
              <p className="italic text-base sm:text-lg leading-relaxed relative z-10 pl-4">
                {t('meister.quote') as string}
              </p>
              <div className="mt-4 pl-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-display font-black text-accent uppercase text-sm">{t('meister.author') as string}</span>
                <span className="text-white/70 font-mono">{t('meister.role') as string}</span>
              </div>
            </blockquote>

            {/* Stat Numerals Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y hairline-border text-center">
              <div>
                <div className="font-display font-black text-2xl text-accent font-mono">2014</div>
                <div className="text-[11px] text-text-muted uppercase font-bold">Рік заснування</div>
              </div>
              <div>
                <div className="font-display font-black text-2xl text-primary font-mono">100%</div>
                <div className="text-[11px] text-text-muted uppercase font-bold">Гарантія дилера</div>
              </div>
              <div>
                <div className="font-display font-black text-2xl text-accent font-mono">340+</div>
                <div className="text-[11px] text-text-muted uppercase font-bold">Відгуків Google</div>
              </div>
              <div>
                <div className="font-display font-black text-2xl text-primary font-mono">0.1 мм</div>
                <div className="text-[11px] text-text-muted uppercase font-bold">Точність 3D-стенду</div>
              </div>
            </div>

            {/* Key Advantages List */}
            <div className="flex flex-col gap-3">
              {points &&
                points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded border hairline-border shadow-sm">
                    <span className="font-display font-black text-accent text-lg leading-none font-mono">0{i + 1}.</span>
                    <span className="text-sm text-text-main font-medium leading-normal">{pt}</span>
                  </div>
                ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://wa.me/4917680008000?text=Вітаю!%20Хочу%20поспілкуватися%20з%20майстром"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-accent hover:bg-accent-hover text-primary font-display font-black uppercase tracking-wider rounded shadow-md transition-all text-xs"
              >
                <span>Узгодити візит у WhatsApp</span>
                <span className="font-bold">-></span>
              </a>
              <a
                href="#services"
                className="text-xs font-display font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors"
              >
                Переглянути прейскурант ->
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
