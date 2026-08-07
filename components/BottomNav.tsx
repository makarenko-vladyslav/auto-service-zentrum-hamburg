
"use client";

import { useLocale } from '@/lib/i18n';

export default function BottomNav() {
  const { t } = useLocale();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-md border-t border-white/10 p-2 sm:hidden flex items-center justify-around shadow-2xl">
      <a
        href="tel:+494085370777"
        className="flex flex-col items-center justify-center p-1 text-white hover:text-accent font-mono"
      >
        <span className="text-xs font-bold uppercase">ДЗВІНОК</span>
        <span className="text-[9px] text-white/60">+49 40</span>
      </a>

      <a
        href="https://wa.me/4917680008000?text=Вітаю!%20Хочу%20записатися%20в%20ASZ%20Hamburg"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-accent text-primary px-5 py-2.5 rounded font-display font-black text-xs uppercase tracking-wider shadow-lg"
      >
        <span>WhatsApp Запис</span>
      </a>

      <a
        href="#calculator"
        className="flex flex-col items-center justify-center p-1 text-white hover:text-accent font-mono"
      >
        <span className="text-xs font-bold uppercase">ОЦІНКА</span>
        <span className="text-[9px] text-white/60">Калькулятор</span>
      </a>
    </div>
  );
}
