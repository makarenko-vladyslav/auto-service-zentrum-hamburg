
"use client";

import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();
  const stats = t('stats') as Array<{ value: string; label: string }>;

  return (
    <section className="bg-primary-tint border-y border-white/10 py-8 relative z-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Numerical Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats &&
            stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-3 border-r last:border-r-0 border-white/10">
                <span className="font-display font-black text-3xl sm:text-4xl text-accent tracking-tight font-mono">
                  {item.value}
                </span>
                <span className="text-xs text-white/80 font-medium uppercase tracking-wider mt-1">
                  {item.label}
                </span>
              </div>
            ))}
        </div>

        {/* Brand Partnership Bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/60">
          <div className="uppercase tracking-widest text-accent font-display font-bold">
            ОФІЦІЙНА АКРЕДИТАЦІЯ ТА ПАРТНЕРСТВО:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 font-display font-bold text-xs tracking-wider uppercase">
            <span>REIFEN.COM CERTIFIED</span>
            <span className="text-accent">—</span>
            <span>TÜV / DEKRA PARTNER</span>
            <span className="text-accent">—</span>
            <span>3D LASER GEOMETRY</span>
            <span className="text-accent">—</span>
            <span>PROFI AUTOREINIGUNG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
