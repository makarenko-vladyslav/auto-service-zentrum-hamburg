"use client";

export default function VideoSection() {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-extrabold tracking-widest text-accent uppercase mb-2 block font-display">
          WERKSTATT IN AKTION
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-8">
          Präzisionsarbeit & Meisterqualität im Detail
        </h2>

        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-video bg-slate-950">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/videos/6442794/pexels-photo-6442794.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/6442794/6442794-hd_1280_720_24fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute bottom-6 left-6 right-6 text-left bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-slate-800 max-w-lg">
            <span className="text-accent font-extrabold text-xs uppercase block mb-1">
              Zertifizierter KFZ-Meisterbetrieb
            </span>
            <p className="text-slate-300 text-xs font-body leading-relaxed">
              Verwendung von Diagnostiksoftware nach Herstellerrichtlinien und Ersatzteile in zertifizierter Erstausrüsterqualität.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
