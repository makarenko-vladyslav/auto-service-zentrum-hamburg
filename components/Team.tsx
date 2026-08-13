"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface Member {
  name: string;
  role: string;
  bio: string;
}

export default function Team() {
  const { t } = useLocale();
  const members = t("team.members") as Member[];

  return (
    <section className="py-20 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <Reveal>
            <span className="text-xs font-display font-bold tracking-widest text-accent uppercase block mb-2">
              {t("team.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary">
              {t("team.heading") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-text-muted font-body">
              {t("team.subheading") as string}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((m, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="bg-bg-card border border-border-subtle p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-display font-bold text-accent uppercase tracking-widest block">
                    {m.role}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-primary">
                    {m.name}
                  </h3>
                  <p className="text-sm font-body text-text-muted leading-relaxed">
                    {m.bio}
                  </p>
                </div>
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-display font-bold text-primary">
                  <span>Ansprechpartner Kieler Str. 207</span>
                  <span className="text-accent">KFZ-Meisterprüfung</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
