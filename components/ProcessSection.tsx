"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function ProcessSection() {
  const { t } = useLocale();

  const steps = (t("process.steps") as Array<{ num: string; title: string; desc: string }>) || [];

  return (
    <section className="py-20 px-4 sm:px-6 bg-[hsl(215_20%_97%)] text-[hsl(215_30%_14%)]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-bold tracking-widest text-[hsl(24_95%_53%)] uppercase block mb-2">
            {t("process.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold max-w-2xl mx-auto leading-tight">
            {t("process.h2") as string}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-6 rounded-xl bg-white border border-gray-200 hover:border-[hsl(24_95%_53%)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-extrabold text-4xl text-[hsl(24_95%_53%)] block mb-4">
                  {st.num}
                </span>
                <h3 className="font-display font-bold text-xl text-[hsl(215_30%_14%)] mb-2">
                  {st.title}
                </h3>
                <p className="text-sm text-[hsl(215_15%_45%)] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
