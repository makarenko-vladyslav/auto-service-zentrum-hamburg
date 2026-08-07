"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function GallerySection() {
  const { t } = useLocale();
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const items = (t("gallery.items") as Array<{ url: string; title: string }>) || [];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 bg-[hsl(215_45%_15%)] text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12">
          <span className="text-xs font-bold tracking-widest text-[hsl(24_95%_53%)] uppercase block mb-2">
            {t("gallery.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold max-w-2xl leading-tight mb-3">
            {t("gallery.h2") as string}
          </h2>
          <p className="text-base text-white/70 max-w-xl">
            {t("gallery.sub") as string}
          </p>
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImg(item.url)}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer bg-black/40 border border-white/10"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("img-fallback");
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs font-display font-bold text-white block truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImg && (
        <div
          onClick={() => setActiveImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full">
            <img src={activeImg} alt="Preview" className="w-full h-full object-contain rounded" />
            <button
              onClick={() => setActiveImg(null)}
              className="absolute -top-10 right-0 text-white font-bold text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
