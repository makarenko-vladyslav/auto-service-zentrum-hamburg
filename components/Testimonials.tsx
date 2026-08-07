
"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Testimonials() {
  const { t } = useLocale();
  const [activeIdx, setActiveIdx] = useState(0);

  const realReviews = [
    {
      name: "Olaf Schaelke",
      desc: "постійний клієнт з 2021 року",
      text: "Sehr kompetent, Hilfsbereit und freundlich. In diesem Unternehmen wird Kundenservice noch groß geschrieben. Ich wurde von Herrn Nawabi sehr gut beraten. Gerne wieder, bis zum nächsten mal.",
      rating: "5.0",
      source: "Google Maps Review"
    },
    {
      name: "Jan Sass",
      desc: "обслуговування спортивного купе",
      text: "Megastarke Leistung – trotz hartnäckiger Gerüche in einem Sportsitz hat sich das Team ASZ HH durchgebissen und einen tadellosen Job gemacht. Geruch weg, optisch perfekt, mehr kann man nicht wollen. JEDERZEIT WIEDER!",
      rating: "5.0",
      source: "Google Maps Review"
    },
    {
      name: "Katie Mueller",
      desc: "постійний клієнт з 2022 року",
      text: "Absolut kompetentes und nettes Team! Es gibt kein Problem, was hier nicht gelöst werden kann. Super Service, klasse Beratung und absolut saubere Arbeit. Ich bin sehr froh, diese tolle Werkstatt gefunden zu haben!",
      rating: "5.0",
      source: "Google Maps Review"
    },
    {
      name: "Extr Digital",
      desc: "комплексне ТО та підготовка до зими",
      text: "Sehr gutes Gesamtpaket. Ich wollte eigentlich nur mein Licht einstellen lassen, habe aber direkt einen ganzen Winter Service zu einem Super Angebot bekommen. Sehr kompetente Leute und sehr gut ausgestattete Werkstatt.",
      rating: "5.0",
      source: "Google Maps Review"
    },
    {
      name: "Ilona Japp",
      desc: "регулярне проходження техогляду",
      text: "Ich freue mich wie ein Schneehuhn, so eine gute Werkstatt gefunden zu haben. Das Team ist nicht nur super freundlich, sondern arbeitet korrekt, sauber und gibt zu jeder Frage kompetent Auskunft! Ich bin überaus zufrieden mit der Werkstatt und kann sie nur jedem weiter empfehlen !!!DANKE an das Werkstatt-Team !!!",
      rating: "5.0",
      source: "Google Maps Review"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-bg-light text-text-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-widest text-accent">
              {t('testimonials.kicker') as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-primary mt-1">
              {t('testimonials.title') as string}
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm font-bold text-primary font-mono">
            <span className="text-accent text-base font-black">4.8 / 5.0</span>
            <span className="text-text-muted">· Google Maps · 340+ відгуків</span>
          </div>
        </div>

        {/* Display Quote Slider Card */}
        <div className="bg-white p-8 sm:p-12 rounded-lg shadow-xl border hairline-border flex flex-col justify-between min-h-[300px] relative">
          <span className="font-serif text-8xl text-accent/20 absolute top-4 left-6 select-none pointer-events-none">“</span>

          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center justify-between border-b hairline-border pb-3">
              <span className="text-primary font-bold tracking-wider text-xs font-mono">
                Рейтинг {realReviews[activeIdx].rating} / 5.0
              </span>
              <span className="text-xs text-text-muted font-mono">
                {realReviews[activeIdx].source}
              </span>
            </div>
            <p className="text-base sm:text-xl text-primary font-serif italic leading-relaxed pt-2">
              «{realReviews[activeIdx].text}»
            </p>
          </div>

          <div className="mt-8 pt-4 border-t hairline-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="font-display font-black text-lg text-primary uppercase">
                {realReviews[activeIdx].name}
              </div>
              <div className="text-xs text-text-muted font-mono mt-0.5">
                {realReviews[activeIdx].desc}
              </div>
            </div>

            {/* Slider Counter & Dot Nav */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-text-muted font-bold">
                0{activeIdx + 1} / 0{realReviews.length}
              </span>
              <div className="flex items-center gap-2">
                {realReviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIdx === i ? 'w-8 bg-accent' : 'w-2.5 bg-gray-300'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
