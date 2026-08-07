
"use client";

import { useLocale } from '@/lib/i18n';

export default function Gallery() {
  const { t } = useLocale();

  const galleryImages = [
    { url: "https://aszhh.de/wp-content/uploads/2020/09/83406573_m.jpg", caption: "Інспекційний бокс ТО" },
    { url: "https://aszhh.de/wp-content/uploads/2020/07/11013421_428208404014988_354148914574248395_n.jpg", caption: "3D Лазерний стенд" },
    { url: "https://aszhh.de/wp-content/uploads/2020/07/11018083_428208434014985_2545892715827016009_n.jpg", caption: "Техогляд HU / AU" },
    { url: "https://aszhh.de/wp-content/uploads/2020/07/11140415_437242389778256_3874909097478851261_n-400x400.jpg", caption: "Klimaservice заправка" },
    { url: "https://aszhh.de/wp-content/uploads/2020/07/11403158_461770867325408_4504419387896843210_n-400x400.jpg", caption: "Smart Repair майстерня" },
    { url: "https://aszhh.de/wp-content/uploads/2020/07/38817514_1050441805124975_5303504051793559552_n-400x400.jpg", caption: "Деталінг & Озонування" }
  ];

  return (
    <section className="py-20 bg-white text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
            {t('gallery.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-primary mt-1">
            {t('gallery.title') as string}
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-2">
            {t('gallery.subtitle') as string}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded shadow-md bg-primary h-60">
              <img
                src={item.url}
                alt={`ASZ Hamburg workshop gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <span className="text-xs font-display font-bold uppercase tracking-widest text-white bg-accent/90 px-3 py-1 rounded">
                  ASZ HAMBURG
                </span>
                <span className="text-xs text-white/90 font-mono mt-2">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
