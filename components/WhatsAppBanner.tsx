"use client";

import { useLocale } from "@/lib/i18n";

export default function WhatsAppBanner() {
  const { t } = useLocale();

  return (
    <section className="py-16 px-4 sm:px-6 bg-[hsl(24_95%_53%)] text-white">
      <div className="max-w-5xl mx-auto rounded-2xl bg-[hsl(215_35%_8%)] border border-white/10 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[hsl(24_95%_53%)] block mb-2">
            ПРЯМИЙ ЗВ'ЯЗОК З KFZ-MEISTER
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight mb-3">
            {t("whatsappBanner.title") as string}
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {t("whatsappBanner.subtitle") as string}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col items-center gap-4 w-full md:w-auto">
          <a
            href={t("whatsappBanner.whatsappUrl") as string}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[hsl(24_95%_53%)] hover:bg-[hsl(24_95%_45%)] text-white font-bold text-sm uppercase tracking-wider rounded text-center transition-all shadow-lg whitespace-nowrap"
          >
            {t("whatsappBanner.cta") as string}
          </a>
          <a
            href="tel:+494085370890"
            className="text-xs font-medium text-white/70 hover:text-white underline transition-colors"
          >
            Або зателефонуйте: {t("whatsappBanner.phoneFormatted") as string}
          </a>
        </div>
      </div>
    </section>
  );
}
