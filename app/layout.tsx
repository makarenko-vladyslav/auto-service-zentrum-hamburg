import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Service Zentrum Hamburg — Німецький KFZ-Meisterbetrieb у Гамбурзі",
  description: "Офіційно сертифікований автосервіс KFZ-Meisterbetrieb у Гамбурзі під керівництвом пана Навабі. 3D-розвал-сходження, техогляд HU/AU, діагностика, ремонт та деталінг.",
  keywords: ["KFZ Meisterbetrieb Hamburg", "Autowerkstatt Hamburg", "3D Achsvermessung", "HU AU Service Hamburg", "Smart Repair", "Autoreinigung Hamburg", "Kieler Straße 207"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Auto Service Zentrum Hamburg — Німецький KFZ-Meisterbetrieb",
    description: "Сертифікований автосервіс та деталінг у Гамбурзі. Точність 3D-лазера, прозорі ціни та прямою зв'язок з майстром.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:ital,wght@0,500;0,600;0,700;0,800;1,600;1,700&family=Sofia+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-bg-light text-text-main selection:bg-accent selection:text-white overflow-x-hidden">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
