"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function ContactForm() {
  const { t } = useLocale();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "Inspektion & Wartung",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const phone = t("brand.phone") as string;
  const whatsapp = t("brand.whatsapp") as string;
  const whatsappClean = whatsapp.replace(/[^0-9]/g, "");

  return (
    <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
      
      {/* Background Watermark Layer */}
      <div 
        aria-hidden="true" 
        className="absolute -bottom-10 -right-10 z-0 opacity-[0.03] text-[16vw] font-display font-extrabold uppercase tracking-tighter text-white whitespace-nowrap pointer-events-none"
      >
        TERMIN
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <Reveal>
            <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
              {t("contactForm.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              {t("contactForm.invitationHeading") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-white/80 font-body">
              {t("contactForm.subheading") as string}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Booking Form */}
          <div className="lg:col-span-8 bg-white text-primary p-8 sm:p-10 rounded-xl shadow-2xl">
            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-accent/10 rounded-lg border border-accent">
                <div className="text-2xl font-display font-bold text-primary">
                  Vielen Dank!
                </div>
                <p className="text-sm font-body text-text-muted">
                  {t("contactForm.successMessage") as string}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-primary">
                      {t("contactForm.nameLabel") as string} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-border-subtle focus:border-accent text-sm font-body focus:outline-none"
                      placeholder="z.B. Michael Weber"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-primary">
                      {t("contactForm.phoneLabel") as string} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-border-subtle focus:border-accent text-sm font-body focus:outline-none"
                      placeholder="+49 170 1234567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-primary">
                      {t("contactForm.licensePlateLabel") as string}
                    </label>
                    <input
                      type="text"
                      value={formData.vehicle}
                      onChange={(e) =>
                        setFormData({ ...formData, vehicle: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-border-subtle focus:border-accent text-sm font-body focus:outline-none"
                      placeholder="HH-AS 2026 / Golf 7"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-primary">
                      {t("contactForm.dateLabel") as string}
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-border-subtle focus:border-accent text-sm font-body focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-primary">
                    {t("contactForm.messageLabel") as string}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded border border-border-subtle focus:border-accent text-sm font-body focus:outline-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 bg-accent hover:bg-accent-hover text-white py-4 px-8 rounded font-display font-bold text-sm tracking-wider uppercase transition-all shadow-lg active:scale-95"
                  >
                    {t("contactForm.btnSubmit") as string}
                  </button>

                  <a
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                    className="text-xs font-display font-bold text-primary hover:text-accent tracking-wider uppercase py-2 px-4 transition-colors"
                  >
                    Oder telefonisch: {phone} →
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Structured Hours & Info Panel */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 space-y-4">
              <span className="text-xs font-display font-bold text-accent uppercase tracking-widest block">
                SCHNELLER DIREKT-WEG
              </span>
              <h3 className="text-2xl font-display font-bold text-white">
                WhatsApp Foto-Analyse
              </h3>
              <p className="text-sm font-body text-white/80 leading-relaxed">
                Schicken Sie uns einfach ein Foto Ihres Fahrzeugscheins oder Schadens direkt per WhatsApp für eine meisterhafte Ersteinschätzung in unter 30 Minuten.
              </p>
              <a
                href={`https://wa.me/${whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-primary hover:bg-bg-light py-4 rounded font-display font-bold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                {t("contactForm.btnWhatsapp") as string}
              </a>
            </div>

            {/* Structured Hours Mini-Table */}
            <div className="p-6 border border-white/10 rounded-xl space-y-3 text-xs font-body text-white/80 bg-white/5">
              <div className="font-display font-bold text-white uppercase tracking-wider text-xs border-b border-white/10 pb-2">
                Öffnungszeiten & Adresse
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span>Montag - Freitag:</span>
                <span className="font-display font-bold text-white">08:00 - 18:00 Uhr</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span>Samstag:</span>
                <span className="font-display font-bold text-accent">Nach Vereinbarung</span>
              </div>
              <div className="pt-1 text-[11px] text-white/70">
                Kieler Straße 207, 22525 Hamburg-Stellingen
              </div>
              <div className="text-[10px] text-accent font-display font-bold uppercase tracking-wider pt-1">
                Kostenlose Erstberatung · Transparente Festpreise
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
