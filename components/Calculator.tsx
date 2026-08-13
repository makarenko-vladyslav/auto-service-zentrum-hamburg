"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import { Reveal } from "@/components/motion";

export default function Calculator() {
  const { t } = useLocale();

  const [selectedServiceId, setSelectedServiceId] = useState(pricing.baseServices[0].id);
  const [selectedVehicleId, setSelectedVehicleId] = useState(pricing.vehicleTypes[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const service = pricing.baseServices.find((s) => s.id === selectedServiceId) || pricing.baseServices[0];
  const vehicle = pricing.vehicleTypes.find((v) => v.id === selectedVehicleId) || pricing.vehicleTypes[0];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = pricing.additionalOptions.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const calculatedTotal = Math.round(service.basePrice * vehicle.multiplier + addonsTotal);

  // Custom money formatter without toLocaleString
  const formatMoney = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  };

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const whatsapp = t("brand.whatsapp") as string;
  const whatsappClean = whatsapp.replace(/[^0-9]/g, "");

  const message = `Hallo ASZ HH Team, ich habe den Kostenrechner genutzt:\n- Service: ${service.name}\n- Fahrzeugklasse: ${vehicle.label}\n- Errechneter Richtpreis: ca. ${formatMoney(calculatedTotal)} EUR`;

  return (
    <section id="calculator" className="py-20 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <Reveal>
            <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
              {t("calculator.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary">
              {t("calculator.heading") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-text-muted font-body">
              {t("calculator.subheading") as string}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-bg-card border border-border-subtle p-6 sm:p-8 rounded-xl shadow-sm space-y-6">
            {/* 1. Base Service */}
            <div className="space-y-3">
              <label className="block font-display font-bold text-sm text-primary uppercase tracking-wider">
                1. {t("calculator.selectService") as string}
              </label>
              <div className="space-y-2">
                {pricing.baseServices.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                      selectedServiceId === s.id
                        ? "border-accent bg-accent/5 font-bold text-primary shadow-xs"
                        : "border-border-subtle text-text-muted hover:border-primary/40"
                    }`}
                  >
                    <span className="text-sm font-display">{s.name}</span>
                    <span className="text-xs font-display font-extrabold text-accent">
                      ab {formatMoney(s.basePrice)} €
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Vehicle Class */}
            <div className="space-y-3 pt-4 border-t border-border-subtle">
              <label className="block font-display font-bold text-sm text-primary uppercase tracking-wider">
                2. {t("calculator.selectVehicle") as string}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {pricing.vehicleTypes.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVehicleId(v.id)}
                    className={`p-3 rounded-lg border text-center font-display text-xs font-bold transition-all ${
                      selectedVehicleId === v.id
                        ? "border-accent bg-accent text-white shadow-sm"
                        : "border-border-subtle text-text-muted hover:border-primary/40"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Addons */}
            <div className="space-y-3 pt-4 border-t border-border-subtle">
              <label className="block font-display font-bold text-sm text-primary uppercase tracking-wider">
                3. {t("calculator.selectAddons") as string}
              </label>
              <div className="space-y-2">
                {pricing.additionalOptions.map((a) => {
                  const active = selectedAddons.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => toggleAddon(a.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between text-xs font-display ${
                        active
                          ? "border-accent bg-accent/10 font-bold text-primary"
                          : "border-border-subtle text-text-muted hover:border-primary/30"
                      }`}
                    >
                      <span>{a.name}</span>
                      <span className="font-bold text-primary">+ {formatMoney(a.price)} €</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-primary text-white p-8 rounded-xl shadow-xl space-y-6 sticky top-28">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
              IHRE SERVICE-KALKULATION
            </span>

            <div className="space-y-2 py-4 border-y border-white/10">
              <span className="text-xs text-white/70 font-body">
                {t("calculator.estimatedTotal") as string}
              </span>
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                ca. {formatMoney(calculatedTotal)}{" "}
                <span className="text-accent text-3xl font-bold">EUR</span>
              </div>
            </div>

            <div className="space-y-3 text-xs font-body text-white/80">
              <p>✔ Keine versteckten Zusatzkosten ohne Ihre Freigabe</p>
              <p>✔ Exakte Herstellervorgaben & digitale Scheckhefteintragung</p>
              <p className="text-[11px] text-white/60 italic leading-snug">
                {t("calculator.disclaimer") as string}
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-accent hover:bg-accent-hover text-white py-4 rounded-md font-display font-bold text-sm tracking-wider uppercase transition-all shadow-lg active:scale-95"
            >
              {t("calculator.btnRequest") as string}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
