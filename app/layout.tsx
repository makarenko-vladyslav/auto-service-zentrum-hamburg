import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Service Zentrum Hamburg | KFZ-Meisterbetrieb & Profi-Autoreinigung",
  description: "Ihr zertifizierter KFZ-Meisterbetrieb in Hamburg-Eimsbüttel. Inspektion nach Herstellervorgabe, 3D-Achsvermessung, HU/AU Vorbereitung & Profi-Autoreinigung. Jetzt Termin vereinbaren!",
  keywords: ["Autowerkstatt Hamburg", "KFZ Meisterbetrieb Hamburg", "3D Achsvermessung Eimsbüttel", "HU AU Hamburg", "Profi Autoreinigung Hamburg", "Smart Repair Hamburg", "Inspektion Eimsbüttel"],
  openGraph: {
    title: "Auto Service Zentrum Hamburg | KFZ-Meisterbetrieb",
    description: "Meisterqualität für alle Marken. Inspektion, 3D-Achsvermessung, Bremsservice & Fahrzeugaufbereitung auf der Kieler Straße 207.",
    type: "website",
    locale: "de_DE",
    url: "https://aszhh.de/",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
              <script type="application/ld+json">{"{\"@context\":\"https://schema.org\",\"@type\":\"AutoRepair\",\"name\":\"Auto Service Zentrum Hamburg\",\"description\":\"Auto Service Zentrum Hamburg (під керівництвом пана Навабі) — це сертифікована автомайстерня KFZ-Meisterbetrieb у Гамбурзі, що надає повний комплекс послуг з діагностики, техобслуговування та ремонту автомобілів усіх марок. Підприємство поєднує високоточний механічний ремонт на 3D-обладнанні із власною спеціалізованою студією детейлінгу та відновлення салонів Profi-Autoreinigung.\",\"url\":\"https://aszhh.de/\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Kieler Straße 207\",\"addressLocality\":\"Hamburg\",\"addressCountry\":\"DE\"},\"makesOffer\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Регулярне техобслуговування та інспекція (Inspektion) за регламентом\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Комп'ютерна діагностика двигуна та електроніки\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Підготовка та проведення техогляду (HU \\u0026 AU Service)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Експрес-заміна оливи та фільтрів (Oil-Express Service)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"3D-комп'ютерне регулювання розвалу-сходження (Achsvermessung)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Ремонт та діагностика гальмівної системи (Bremsen)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Шиномонтаж, балансування та сезонне зберігання коліс (Reifenservice)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Обслуговування, чистка та заправка кондиціонерів (Klimawartung)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Локальний кузовний ремонт та фарбування (Smart Repair)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Професійна хімчистка та детальна мийка салону (Profi-Autoreinigung)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Озонування та повне видалення застарілих запахів із салону\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Глибока очистка та реставрація спортивних і шкіряних сидінь\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Діагностика та ремонт елементів підвіски і ходової частини\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Заміна ременів та ланцюгів ГРМ\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Точне регулювання та полірування фар\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Заміна акумуляторних батарей та перевірка генератора\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Ремонт та заміна компонентів вихлопної системи\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Перевірка та ремонт системи зчеплення\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Kfz Reparatur aller Fabrikate\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Inspektion\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Oil-Express Service\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Reifenservice\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Bremsen\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"HU \\u0026 AU Service\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Klimawartung\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Smart Repair\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Achsvermessung\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Profi-Autoreinigung\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Achsvermessung nach dem Neusten Stand per 3D Laser\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"ASZ Hamburg Klimaservice inklusive Leck suche\"}}]}"}</script>
      </head>
      <body className="bg-bg-dark text-slate-100 antialiased selection:bg-accent selection:text-slate-950">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
