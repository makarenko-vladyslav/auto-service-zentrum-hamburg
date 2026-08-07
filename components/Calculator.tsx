
"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';

export default function Calculator() {
  const { t } = useLocale();
  const [selectedServices, setSelectedServices] = useState<string[]>(['inspektion']);
  const [vehicleAge, setVehicleAge] = useState<number>(3);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculateTotal = () => {
    let baseSum = 0;
    pricing.options.forEach((opt) => {
      if (selectedServices.includes(opt.id)) {
        baseSum += opt.base;
      }
    });
    const multiplier = 1 + Math.min(vehicleAge * 0.02, 0.2);
    return Math.round(baseSum * multiplier);
  };

  const currentTotal = calculateTotal();

  const handleWhatsAppSend = () => {
    const selectedNames = pricing.options
      .filter((opt) => selectedServices.includes(opt.id))
      .map((opt) => opt.name)
      .join(', ');

    const msg = `Вітаю! Я розрахував орієнтовну вартість на сайті для авто (${vehicleAge} років): ${selectedNames}. Орієнтовна сума: ~${currentTotal} €. Хочу дізнатися точний кошторис.`;
    window.open(`https://wa.me/4917680008000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-bg-light text-text-main relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
            {t('calculator.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-primary mt-1">
            {t('calculator.title') as string}
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-2 max-w-xl mx-auto">
            {t('calculator.desc') as string}
          </p>
        </div>

        {/* Solid Opaque Container Card */}
        <div className="bg-white p-6 sm:p-10 rounded-lg shadow-xl border hairline-border flex flex-col gap-8">
          {/* Vehicle Age Slider */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs sm:text-sm font-bold uppercase text-primary font-display">
              <span>{t('calculator.sliderLabel') as string}</span>
              <span className="text-accent text-lg font-mono">{vehicleAge} {vehicleAge === 1 ? 'рік' : 'років'}</span>
            </div>
            <input
              type="range"
              min={1}
              max={15}
              value={vehicleAge}
              onChange={(e) => setVehicleAge(Number(e.target.value))}
              className="w-full accent-accent h-2 bg-bg-light rounded cursor-pointer"
            />
          </div>

          {/* Services Checklist Toggle Grid */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-display font-bold uppercase text-primary tracking-wider">
              {t('calculator.selectServices') as string}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pricing.options.map((opt) => {
                const isSelected = selectedServices.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleService(opt.id)}
                    className={`flex items-center justify-between p-4 rounded text-left transition-all border ${
                      isSelected
                        ? 'bg-primary text-white border-accent shadow'
                        : 'bg-bg-light text-text-main border-transparent hover:border-gray-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold pr-2">{opt.name}</span>
                    <span className={`font-display font-bold text-xs sm:text-sm font-mono ${isSelected ? 'text-accent' : 'text-primary'}`}>
                      від {opt.base} €
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Total Output & Disclaimer */}
          <div className="pt-6 border-t hairline-border flex flex-col sm:flex-row items-center justify-between gap-6 bg-primary-tint p-6 rounded text-white">
            <div>
              <div className="text-[10px] font-display font-bold uppercase text-accent tracking-widest">
                {t('calculator.totalEstimate') as string}
              </div>
              <div className="text-4xl sm:text-5xl font-display font-black text-white font-mono mt-1">
                ~ {currentTotal} €
              </div>
              <div className="text-[11px] text-white/70 mt-1 max-w-xs">
                {t('calculator.disclaimer') as string}
              </div>
            </div>

            <button
              onClick={handleWhatsAppSend}
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-display font-black uppercase tracking-wider text-sm rounded shadow-lg transition-all text-center"
            >
              {t('calculator.cta') as string}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
