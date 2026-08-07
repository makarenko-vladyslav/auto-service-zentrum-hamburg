
"use client";

import { useLocale } from '@/lib/i18n';

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
              {t('video.kicker') as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white leading-tight">
              {t('video.title') as string}
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              {t('video.desc') as string}
            </p>
            <div className="pt-2 text-xs font-mono text-accent">
              Kieler Straße 207, 22525 Hamburg · Робочі пости & 3D Laser
            </div>
          </div>

          <div className="lg:col-span-7 rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl bg-black">
            <video
              controls
              playsInline
              poster={t('video.poster') as string}
              className="w-full h-[360px] object-cover"
            >
              <source src={t('video.url') as string} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
