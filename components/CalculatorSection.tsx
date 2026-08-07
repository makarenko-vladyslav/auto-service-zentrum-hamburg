"use client";

import { useState } from "react";
import pricing from "@/lib/pricing.json";
import { Reveal } from "./motion";

export default function CalculatorSection() {
  const [selectedService, setSelectedService] = useState<string>("diagnostics");
  const [vehicleType, setVehicleType] = useState<keyof typeof pricing.vehicleMultipliers>("sedan");
  const [additionalHours, setAdditionalHours] = useState<number>(0);

  const activeServiceObj = pricing.baseServices.find((s) => s.id === selectedService) || pricing.baseServices[0];
  const multiplier = pricing.vehicleMultipliers[vehicleType] || 1.0;

  const calculatedTotal = Math.round(
    activeServiceObj.basePrice * multiplier + additionalHours * pricing.hourlyRate
  );

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 bg-[hsl(215_45%_15%)] text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-bold tracking-widest text-[hsl(24_95%_53%)] uppercase block mb-2">
            ПРОЗОРІСТЬ БЕЗ ПРИХОВАНИХ ДОПЛАТ
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold max-w-2xl mx-auto leading-tight mb-4">
            Інтерактивний калькулятор робіт
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto">
            Оберіть тип послуги та вашого автомобіля для попереднього розрахунку вартості за стандартом KFZ-Meister.
          </p>
        </Reveal>

        <div className="bg-[hsl(215_35%_8%)] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          {/* Service Selector */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-3">
              1. Оберіть необхідну послугу:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pricing.baseServices.map((serv) => (
                <button
                  key={serv.id}
                  type="button"
                  onClick={() => setSelectedService(serv.id)}
                  className={`p-4 rounded-lg text-left transition-all border ${
                    selectedService === serv.id
                      ? "bg-[hsl(24_95%_53%)] text-white border-[hsl(24_95%_53%)] shadow-lg"
                      : "bg-white/5 hover:bg-white/10 text-white/80 border-white/10"
                  }`}
                >
                  <div className="font-display font-bold text-base mb-1">{serv.name}</div>
                  <div className="text-xs opacity-90">{serv.unit} від {serv.basePrice} EUR</div>
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Type */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-3">
              2. Клас вашого автомобіля:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: "compact", label: "Компакт / Хетчбек" },
                { id: "sedan", label: "Седан / Універсал" },
                { id: "suv", label: "Кросовер / SUV" },
                { id: "transporter", label: "Мікроавтобус / Фургон" },
              ].map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicleType(v.id as keyof typeof pricing.vehicleMultipliers)}
                  className={`p-3 rounded text-center text-xs font-bold uppercase tracking-wider transition-all border ${
                    vehicleType === v.id
                      ? "bg-white text-[hsl(215_45%_15%)] border-white font-extrabold"
                      : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Hours Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/70">
                3. Додаткові ремонтно-монтажні роботи (год):
              </label>
              <span className="font-display font-bold text-lg text-[hsl(24_95%_53%)]">
                {additionalHours} год (+{additionalHours * pricing.hourlyRate} EUR)
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="6"
              step="1"
              value={additionalHours}
              onChange={(e) => setAdditionalHours(parseInt(e.target.value))}
              className="w-full accent-[hsl(24_95%_53%)] cursor-pointer h-2 bg-white/20 rounded-lg"
            />
          </div>

          {/* Summary Box */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                Попередній орієнтовний кошторис:
              </div>
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-[hsl(24_95%_53%)]">
                ~ {calculatedTotal} EUR
              </div>
              <div className="text-xs text-white/60 mt-1">
                Включає ПДВ (19% MwSt). Остаточна вартість узгоджується перед початком робіт.
              </div>
            </div>

            <a
              href={`https://wa.me/494085370890?text=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%BD%D1%8F!%20%D0%AF%20%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D0%B2%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D1%96%20%D0%BF%D0%BE%D1%81%D0%BB%D1%83%D0%B3%D1%83%20${encodeURIComponent(
                activeServiceObj.name
              )}%20%D0%B4%D0%BB%D1%8F%20${vehicleType}.%20%D0%9E%D1%80%D1%96%D1%94%D0%BD%D1%82%D0%BE%D0%B2%D0%BD%D0%B0%20%D1%86%D1%96%D0%BD%D0%B0:%20${calculatedTotal}%20EUR.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-[hsl(24_95%_53%)] hover:bg-[hsl(24_95%_45%)] text-white font-bold text-sm uppercase tracking-wider rounded text-center transition-all whitespace-nowrap shadow-lg"
            >
              Зафіксувати ціну у WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
