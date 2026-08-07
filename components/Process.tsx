
"use client";

import { useLocale } from '@/lib/i18n';

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as ProcessStep[];

  return (
    <section className="py-20 bg-primary-tint text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
            {t('process.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mt-1">
            {t('process.title') as string}
          </h2>
        </div>

        {/* Compact Full-Width Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps &&
            steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-primary p-6 rounded border border-white/10 flex flex-col justify-between gap-4 hover:border-accent transition-colors"
              >
                <div>
                  <div className="font-display font-black text-3xl text-accent leading-none mb-3 font-mono">
                    {st.num}
                  </div>
                  <h3 className="font-display font-extrabold text-lg uppercase text-white leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mt-2">
                    {st.desc}
                  </p>
                </div>
                <div className="h-0.5 w-full bg-white/10 mt-2" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
