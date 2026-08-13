"use client";

export function StatementBand() {
  return (
    <div className="bg-primary text-white py-8 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0 animate-pulse" />
          <span className="font-display font-bold text-xs uppercase tracking-widest text-accent">
            QUALITÄT · TRANSPARENZ · PRÄZISION
          </span>
        </div>
        <p className="text-sm font-body text-white/80 text-center sm:text-right">
          Meisterliche Handwerksarbeit für alle Fabrikate an der Kieler Straße 207.
        </p>
      </div>
    </div>
  );
}

export function WatermarkBand({ text }: { text: string }) {
  return (
    <div className="relative py-12 bg-bg-secondary overflow-hidden select-none pointer-events-none border-y border-border-subtle">
      <div 
        aria-hidden="true" 
        className="text-center text-4xl sm:text-7xl lg:text-9xl font-display font-black uppercase tracking-widest text-primary/5 whitespace-nowrap"
      >
        {text}
      </div>
    </div>
  );
}

export function LabeledHairline({ label }: { label: string }) {
  return (
    <div className="py-6 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        <div className="flex-1 h-px bg-border-subtle" />
        <span className="text-[10px] font-display font-extrabold uppercase tracking-widest text-accent px-3 py-1 bg-accent/10 rounded-full">
          {label}
        </span>
        <div className="flex-1 h-px bg-border-subtle" />
      </div>
    </div>
  );
}
