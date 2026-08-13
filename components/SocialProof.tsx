"use client";
import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t("socialProof.items") as string[];

  return (
    <section className="bg-primary text-white py-6 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <span className="text-[11px] font-display font-bold tracking-widest text-accent uppercase">
          {t("socialProof.kicker") as string}
        </span>
      </div>
      <Marquee items={items} speed={25} className="py-2 text-white/90" />
    </section>
  );
}
