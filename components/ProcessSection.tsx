"use client";

import { useLocale } from "@/lib/i18n";

export default function ProcessSection() {
  const { t } = useLocale();

  const kicker = String(t("process.kicker"));
  const title = String(t("process.title"));
  const steps = (t("process.steps") as Array<{
    num: string;
    title: string;
    desc: string;
  }>) || [];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-accent uppercase mb-2 block font-display">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between relative shadow-lg"
            >
              <div>
                <span className="text-4xl font-black text-accent/40 font-display block mb-4">
                  {step.num}
                </span>
                <h3 className="text-base font-extrabold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 font-body leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                SCHRITT {idx + 1} VON 4
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
