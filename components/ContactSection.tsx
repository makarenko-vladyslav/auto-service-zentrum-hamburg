"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function ContactSection() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const hoursRows = (t("location.hoursRows") as Array<{ days: string; time: string }>) || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-[hsl(215_35%_8%)] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-bold tracking-widest text-[hsl(24_95%_53%)] uppercase block mb-2">
                {t("booking.kicker") as string}
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold leading-tight mb-4 text-white">
                {t("booking.h2") as string}
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                {t("booking.sub") as string}
              </p>

              {/* Direct Tel Link */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-white/60 block">Прямий телефон майстерні:</span>
                  <a href="tel:+494085370890" className="font-display font-extrabold text-xl text-white hover:text-[hsl(24_95%_53%)] transition-colors">
                    +49 40 8537 0890
                  </a>
                </div>
                <a
                  href="tel:+494085370890"
                  className="px-4 py-2 bg-[hsl(24_95%_53%)] text-white text-xs font-bold uppercase rounded"
                >
                  Дзвінок
                </a>
              </div>

              {/* Structured Hours Mini-Table */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[hsl(24_95%_53%)] block mb-3">
                  Графік прийому автомобілів:
                </span>
                <div className="divide-y divide-white/10 text-xs">
                  {hoursRows.map((h, i) => (
                    <div key={i} className="py-2 flex justify-between">
                      <span className="text-white/80 font-medium">{h.days}</span>
                      <span className="font-mono text-white font-bold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address & Map Line */}
              <div className="text-xs text-white/70 space-y-1 mb-6">
                <p><strong className="text-white">Адреса:</strong> Kieler Straße 207, 22525 Hamburg</p>
                <p><strong className="text-white">Email:</strong> info@aszhh.de</p>
              </div>

              {/* Trust Micro-Line */}
              <p className="text-[11px] text-white/50 leading-normal border-t border-white/10 pt-4">
                {t("booking.trustLine") as string}
              </p>
            </Reveal>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-white text-[hsl(215_30%_14%)] rounded-2xl p-6 sm:p-10 shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center text-xl font-bold">
                  OK
                </div>
                <h3 className="font-display font-extrabold text-2xl text-[hsl(215_45%_15%)]">
                  Заявку успішно відправлено!
                </h3>
                <p className="text-sm text-[hsl(215_15%_45%)] max-w-md mx-auto">
                  {t("booking.fields.success") as string}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[hsl(215_45%_15%)] text-white font-bold text-xs uppercase tracking-wider rounded"
                >
                  Надіслати ще одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(215_30%_14%)] mb-1">
                      {t("booking.fields.name") as string} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Павло"
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[hsl(24_95%_53%)] focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(215_30%_14%)] mb-1">
                      {t("booking.fields.phone") as string} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+49 170 1234567"
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[hsl(24_95%_53%)] focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(215_30%_14%)] mb-1">
                      {t("booking.fields.car") as string}
                    </label>
                    <input
                      type="text"
                      placeholder="BMW X5 2020 / Audi A6"
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[hsl(24_95%_53%)] focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(215_30%_14%)] mb-1">
                      {t("booking.fields.service") as string}
                    </label>
                    <select className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[hsl(24_95%_53%)] focus:outline-none text-sm bg-white">
                      <option>Планове ТО (Inspektion)</option>
                      <option>3D Розвал-сходження</option>
                      <option>Техогляд HU/AU</option>
                      <option>Клімат-сервіс</option>
                      <option>Деталінг / Хімчистка</option>
                      <option>Інший ремонт</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(215_30%_14%)] mb-1">
                    {t("booking.fields.date") as string}
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[hsl(24_95%_53%)] focus:outline-none text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(215_30%_14%)] mb-1">
                    {t("booking.fields.notes") as string}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Опишіть симптоми несправності або зручний час..."
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[hsl(24_95%_53%)] focus:outline-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[hsl(24_95%_53%)] hover:bg-[hsl(24_95%_45%)] text-white font-bold text-sm uppercase tracking-wider rounded transition-all shadow-md"
                >
                  {loading ? (t("booking.fields.sending") as string) : (t("booking.fields.submit") as string)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
