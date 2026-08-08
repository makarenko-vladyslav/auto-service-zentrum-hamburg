"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();

  const [selectedVehicle, setSelectedVehicle] = useState("limousine");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "inspektion",
    "achsvermessung",
  ]);

  const vehicles = (t("calculator.vehicles") as Array<{ id: string; label: string }>) || [];
  const basePrices = pricing.basePrices as Record<string, number>;
  const multipliers = pricing.vehicleMultipliers as Record<string, number>;

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
    const mult = multipliers[selectedVehicle] || 1.0;
    const baseSum = selectedServices.reduce((sum, id) => {
      return sum + (basePrices[id] || 0);
    }, 0);
    return Math.round(baseSum * mult);
  };

  const availableServices = [
    { id: "inspektion", label: "Inspektion nach Herstellervorgabe", base: 99 },
    { id: "achsvermessung", label: "3D-Laser Achsvermessung", base: 89 },
    { id: "hu_au", label: "HU & AU Vorbereitung + Durchführung", base: 145 },
    { id: "autoreinigung", label: "Profi-Autoreinigung & Ozon", base: 119 },
    { id: "klimaservice", label: "ASZ Klimaservice inkl. Lecksuche", base: 79 },
    { id: "oil_express", label: "Oil-Express Service", base: 49 },
  ];

  const total = calculateTotal();

  const serviceSummaryText = selectedServices
    .map((s) => availableServices.find((a) => a.id === s)?.label)
    .filter(Boolean)
    .join(", ");

  const whatsappMessage = encodeURIComponent(
    `Hallo ASZ Hamburg, ich habe den Kostenrechner genutzt:\n- Fahrzeug: ${selectedVehicle}\n- Gewünschte Leistungen: ${serviceSummaryText}\n- Geschätzter Richtpreis: ca. ${total} €\nBitte um Freigabe eines Termins.`
  );

  return (
    <section id="rechner" className="py-24 bg-slate-900 border-y border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold tracking-widest text-accent uppercase mb-2 block font-display">
            {String(t("calculator.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            {String(t("calculator.title"))}
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto font-body">
            {String(t("calculator.subtitle"))}
          </p>
        </div>

        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
          {/* Step 1: Vehicle Category */}
          <div className="mb-8">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
              {String(t("calculator.selectVehicle"))}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {vehicles.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVehicle(v.id)}
                  className={`p-4 rounded-xl border text-xs font-extrabold uppercase transition-all text-center ${
                    selectedVehicle === v.id
                      ? "bg-accent text-slate-950 border-accent shadow-md scale-[1.02]"
                      : "bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Services Checkboxes */}
          <div className="mb-10">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
              {String(t("calculator.selectServices"))}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableServices.map((srv) => {
                const active = selectedServices.includes(srv.id);
                return (
                  <button
                    key={srv.id}
                    onClick={() => toggleService(srv.id)}
                    className={`p-4 rounded-xl border flex items-center justify-between text-left transition-all ${
                      active
                        ? "bg-slate-900 border-accent text-white shadow-lg"
                        : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-black ${
                          active
                            ? "bg-accent text-slate-950"
                            : "bg-slate-800 text-transparent"
                        }`}
                      >
                        OK
                      </div>
                      <span className="text-xs font-bold">{srv.label}</span>
                    </div>
                    <span className="text-xs font-extrabold text-accent">
                      ab {srv.base} €
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Calculation Output Box */}
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">
                {String(t("calculator.estimateTitle"))}
              </span>
              <div className="text-4xl sm:text-5xl font-black text-accent font-display tracking-tight">
                ca. {total} {pricing.currency}
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">
                {String(t("calculator.disclaimer"))}
              </span>
            </div>

            <a
              href={`https://wa.me/491724715522?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider text-center shadow-lg shadow-emerald-500/20 transition-transform hover:scale-105"
            >
              {String(t("calculator.bookWhatsapp"))} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
