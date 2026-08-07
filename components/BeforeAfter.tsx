
"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section id="beforeAfter" className="py-20 bg-white text-text-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
            {t('beforeAfter.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-primary mt-1">
            {t('beforeAfter.title') as string}
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-2 max-w-lg mx-auto">
            {t('beforeAfter.subtitle') as string}
          </p>
        </div>

        {/* Full Container Width Visual Slider */}
        <div className="relative w-full h-[380px] sm:h-[500px] rounded-lg overflow-hidden border-4 border-primary/10 shadow-2xl select-none bg-primary">
          {/* AFTER Image (Base Layer) */}
          <img
            src="https://aszhh.de/wp-content/uploads/2020/07/38817514_1050441805124975_5303504051793559552_n-400x400.jpg"
            alt="Після деталінгу ASZ Hamburg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-accent text-primary font-display font-black text-xs uppercase px-3 py-1.5 rounded shadow">
            ПІСЛЯ ДЕТАЛІНГУ / ОЗОНУВАННЯ
          </div>

          {/* BEFORE Image (Clipped Layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://aszhh.de/wp-content/uploads/2020/07/15800018_692937637542062_5527335570790253685_o-400x400.jpg"
              alt="До деталінгу"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute top-4 left-4 bg-primary text-white font-display font-black text-xs uppercase px-3 py-1.5 rounded shadow">
              ДО ОЧИЩЕННЯ ТА ПОЛІРУВАННЯ
            </div>
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent text-primary font-bold flex items-center justify-center text-xs shadow-lg border-2 border-white font-mono">
              SLIDE
            </div>
          </div>

          {/* Interactive Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />
        </div>
      </div>
    </section>
  );
}
