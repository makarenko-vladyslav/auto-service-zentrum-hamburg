"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function LocationSection() {
  const { t } = useLocale();

  const zones = (t("location.zones") as string[]) || [];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-[hsl(215_35%_8%)] text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12">
          <span className="text-xs font-bold tracking-widest text-[hsl(24_95%_53%)] uppercase block mb-2">
            {t("location.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold max-w-2xl leading-tight">
            {t("location.h2") as string}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Card */}
          <div className="lg:col-span-5 bg-[hsl(215_45%_15%)] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[hsl(24_95%_53%)] block mb-1">
                Адреса майстерні:
              </span>
              <p className="font-display font-bold text-xl text-white">
                {t("location.address") as string}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[hsl(24_95%_53%)] block mb-1">
                Графік роботи:
              </span>
              <p className="text-sm text-white/80">
                {t("location.hours") as string}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[hsl(24_95%_53%)] block mb-1">
                Прямі контакти:
              </span>
              <p className="text-sm text-white/80 font-mono">
                Тел: {t("location.phone") as string}<br />
                Email: {t("location.email") as string}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-white/70 block mb-2">
                Обслуговуємо райони Гамбурга:
              </span>
              <div className="flex flex-wrap gap-2">
                {zones.map((z, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/10 text-xs font-semibold text-white/90"
                  >
                    {z}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Auto+Service+Zentrum+Hamburg+Kieler+Str.+207"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider text-center rounded border border-white/10 transition-all"
            >
              Відкрити в Google Maps
            </a>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <iframe
              title="Google Maps ASZ Hamburg"
              src="https://www.google.com/maps?q=Kieler+Stra%C3%9Fe+207+22525+Hamburg&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
