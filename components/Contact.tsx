
"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Contact() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    service: 'Inspektion',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
            {t('contact.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mt-1">
            {t('contact.title') as string}
          </h2>
          <p className="text-white/80 text-sm sm:text-base mt-2">
            {t('contact.subtitle') as string}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-primary-tint p-8 rounded-lg border border-white/10 shadow-xl">
            <h3 className="font-display font-black text-xl uppercase text-white mb-6">
              {t('contact.formTitle') as string}
            </h3>

            {submitted ? (
              <div className="p-6 bg-accent/20 border border-accent text-accent font-bold rounded text-center">
                {t('contact.successMsg') as string}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-accent mb-1">
                    {t('contact.nameLabel') as string}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-primary border border-white/20 rounded text-sm text-white focus:border-accent focus:outline-none"
                    placeholder="Пан / Пані..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-accent mb-1">
                    {t('contact.phoneLabel') as string}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-primary border border-white/20 rounded text-sm text-white focus:border-accent focus:outline-none font-mono"
                    placeholder="+49 176..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-accent mb-1">
                      {t('contact.carLabel') as string}
                    </label>
                    <input
                      type="text"
                      value={formData.car}
                      onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                      className="w-full p-3 bg-primary border border-white/20 rounded text-sm text-white focus:border-accent focus:outline-none"
                      placeholder="BMW X5, 2020..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-accent mb-1">
                      {t('contact.serviceLabel') as string}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3 bg-primary border border-white/20 rounded text-sm text-white focus:border-accent focus:outline-none"
                    >
                      <option value="Inspektion">Планове ТО (Inspektion)</option>
                      <option value="3D Alignment">3D Розвал-сходження</option>
                      <option value="HU/AU">Техогляд HU & AU</option>
                      <option value="Klima">Кондиціонер</option>
                      <option value="Detailing">Деталінг / Чистка</option>
                      <option value="Other">Інші роботи</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-accent mb-1">
                    {t('contact.messageLabel') as string}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-primary border border-white/20 rounded text-sm text-white focus:border-accent focus:outline-none"
                    placeholder="Опишіть ваш запит..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent hover:bg-accent-hover text-primary font-display font-black uppercase tracking-wider text-sm rounded shadow-md transition-all mt-2"
                >
                  {t('contact.submitBtn') as string}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Address, Hours, Phone & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-primary-tint text-white p-6 rounded-lg border border-white/10 shadow-lg flex flex-col gap-4">
              <div>
                <span className="text-[10px] text-accent font-bold uppercase tracking-wider">Адреса майстерні:</span>
                <p className="font-display font-black text-lg">{t('contact.address') as string}</p>
                <p className="text-xs text-white/60 font-mono mt-0.5">Район Stellingen / Eimsbüttel</p>
              </div>

              <div className="border-t border-white/10 pt-3">
                <span className="text-[10px] text-accent font-bold uppercase tracking-wider">Прямий телефон & WhatsApp:</span>
                <p className="font-display font-bold text-lg text-white font-mono mt-1">
                  <a href={`tel:${t('contact.phone')}`} className="hover:text-accent">
                    {t('contact.phone') as string}
                  </a>
                </p>
                <p className="text-xs text-accent font-mono font-bold mt-1">
                  WhatsApp: {t('contact.whatsapp') as string}
                </p>
              </div>

              {/* Structured Hours Mini-Table */}
              <div className="border-t border-white/10 pt-3">
                <span className="text-[10px] text-accent font-bold uppercase tracking-wider mb-2 block">Години прийому:</span>
                <div className="flex flex-col gap-1 text-xs text-white/80 font-mono">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Понеділок — П'ятниця:</span>
                    <span className="text-white font-bold">08:30 – 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span>Субота:</span>
                    <span className="text-accent font-bold">За записом</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Неділя:</span>
                    <span className="text-white/50">Вихідний</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 text-[11px] text-white/70">
                Прямий нагляд за ремонтом · Офіційна печатка Meisterbetrieb у сервісну книжку.
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-60 rounded-lg overflow-hidden border border-white/10 shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Kieler+Stra%C3%9Fe+207,+22525+Hamburg&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Auto Service Zentrum Hamburg Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
