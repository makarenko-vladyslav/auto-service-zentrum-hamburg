"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const kicker = String(t("contact.kicker"));
  const title = String(t("contact.title"));
  const address = String(t("contact.address"));
  const phone = String(t("contact.phone"));
  const whatsapp = String(t("contact.whatsapp"));
  const hours = String(t("contact.hours"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Information & Map */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-accent uppercase mb-2 block font-display">
              {kicker}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-8">
              {title}
            </h2>

            <div className="space-y-6 mb-8 text-sm">
              <div className="border-l-2 border-accent pl-4 py-1">
                <span className="text-xs font-extrabold uppercase text-slate-400 block mb-1">
                  {String(t("contact.addressTitle"))}
                </span>
                <span className="text-slate-200 font-bold">{address}</span>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4 py-1">
                <span className="text-xs font-extrabold uppercase text-slate-400 block mb-1">
                  {String(t("contact.phoneTitle"))}
                </span>
                <div className="flex flex-col gap-1">
                  <a href="tel:+49405401050" className="text-white font-extrabold hover:text-accent">
                    Telefon: {phone}
                  </a>
                  <a
                    href="https://wa.me/491724715522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-extrabold hover:underline"
                  >
                    WhatsApp Direct: {whatsapp}
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-amber-500 pl-4 py-1">
                <span className="text-xs font-extrabold uppercase text-slate-400 block mb-1">
                  {String(t("contact.hoursTitle"))}
                </span>
                <span className="text-slate-200 font-bold">{hours}</span>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 h-64 relative bg-slate-950">
            <iframe
              src="https://www.google.com/maps?q=Kieler+Straße+207,+22525+Hamburg&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              title="Auto Service Zentrum Hamburg Standorts-Karte"
            />
          </div>
        </div>

        {/* Appointment Form Card */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6">
            {String(t("contact.formTitle"))}
          </h3>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <span className="text-emerald-400 text-2xl font-black block mb-2">
                ANFRAGE ERFOLGREICH ÜBERMITTELT
              </span>
              <p className="text-sm text-emerald-200 font-bold">
                {String(t("contact.successMessage"))}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder={String(t("contact.namePlaceholder"))}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Telefonnummer / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder={String(t("contact.phonePlaceholder"))}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Gewünschte Leistung
                </label>
                <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-accent focus:outline-none">
                  <option>Inspektion nach Herstellervorgabe</option>
                  <option>3D-Laser Achsvermessung</option>
                  <option>HU / AU Vorbereitung</option>
                  <option>Profi-Autoreinigung & Ozon</option>
                  <option>Bremsen- & Reifenservice</option>
                  <option>Klimaservice & Reparatur</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Nachricht / Kennzeichen
                </label>
                <textarea
                  rows={3}
                  placeholder={String(t("contact.messagePlaceholder"))}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-accent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-accent/20 transition-all"
              >
                {String(t("contact.submitButton"))} →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
