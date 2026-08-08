"use client";

export default function Gallery() {
  const clientImages = [
    {
      url: "https://aszhh.de/wp-content/uploads/2020/09/83406573_m.jpg",
      alt: "ASZ Hamburg Werkstatt Hebebühne Kieler Straße",
    },
    {
      url: "https://aszhh.de/wp-content/uploads/2020/07/11013421_428208404014988_354148914574248395_n.jpg",
      alt: "3D Achsvermessung Messplatz Digital",
    },
    {
      url: "https://aszhh.de/wp-content/uploads/2020/07/11018083_428208434014985_2545892715827016009_n.jpg",
      alt: "Profi Autoreinigung Studio Ozon",
    },
    {
      url: "https://aszhh.de/wp-content/uploads/2020/07/11140415_437242389778256_3874909097478851261_n-400x400.jpg",
      alt: "KFZ Bremsen Reparatur Erstausrüster",
    },
    {
      url: "https://aszhh.de/wp-content/uploads/2020/07/11403158_461770867325408_4504419387896843210_n-400x400.jpg",
      alt: "Motor Diagnostik & Steuergerät",
    },
    {
      url: "https://aszhh.de/wp-content/uploads/2020/07/38817514_1050441805124975_5303504051793559552_n-400x400.jpg",
      alt: "Smart Repair Dellenentfernung Studio",
    },
  ];

  return (
    <section id="galerie" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-accent uppercase mb-2 block font-display">
            ECHTE WERKSTATT-EINBLICKE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Unsere Werkstatt & Aufbereitungsstudio
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-body">
            Original-Einblicke in unsere Hallen und Arbeitsschritte auf der Kieler Straße 207 in Hamburg-Eimsbüttel.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {clientImages.map((img, idx) => (
            <div
              key={idx}
              className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-800 group"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('img-fallback');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-xs font-extrabold text-white tracking-wide truncate">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
