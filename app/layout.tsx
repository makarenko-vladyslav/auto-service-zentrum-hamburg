import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Service Zentrum Hamburg | KFZ-Meisterbetrieb Kieler Straße",
  description: "Ihre zertifizierte Meisterwerkstatt in Hamburg-Stellingen (Kieler Str. 207). Inspektion, HU/AU, 3D-Achsvermessung, Smart Repair & Profi-Autoreinigung. Herstellergarantie bleibt erhalten.",
  keywords: ["Autowerkstatt Hamburg", "KFZ Meisterbetrieb Hamburg", "Inspektion Hamburg", "HU AU Hamburg", "3D Achsvermessung", "Smart Repair Kieler Straße", "Profi-Autoreinigung"],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Auto Service Zentrum Hamburg | KFZ-Meisterbetrieb",
    description: "Zertifizierter KFZ-Meisterbetrieb in Hamburg. Alle Fabrikate, Herstellergarantie bleibt erhalten, transparenter WhatsApp-Kostenvoranschlag.",
    type: "website",
    locale: "de_DE",
    siteName: "Auto Service Zentrum Hamburg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500;600;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
              <script type="application/ld+json">{"{\"@context\":\"https://schema.org\",\"@type\":\"AutoRepair\",\"name\":\"Auto Service Zentrum Hamburg\",\"description\":\"Auto Service Zentrum Hamburg — це офіційна автомайстерня під керівництвом атестованого автомайстра (KFZ-Meisterbetrieb) у Гамбурзі. Сервіс виконує якісний ремонт та ТО автомобілів усіх марок, надаючи повний комплекс послуг від 3D-налаштування підвіски та техогляду HU/AU до професійного детейлінгу й хімчистки салону.\",\"url\":\"https://aszhh.de/\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Kieler Straße 207\",\"addressLocality\":\"Hamburg\",\"addressCountry\":\"DE\"},\"makesOffer\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Комп'ютерна діагностика електроніки та двигуна\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Офіційний техогляд HU та перевірка вихлопу AU (TÜV/DEKRA)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Регламентне технічне обслуговування (Inspektion)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Експрес-заміна моторного мастила та фільтрів (Oil-Express)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Діагностика та ремонт гальмівної системи\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"3D розвал-сходження коліс (Achsvermessung)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Обслуговування, заправка та дезінфекція кондиціонерів\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Локальний кузовний ремонт (Smart Repair)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Професійна хімчистка салону та детейлінг (Profi-Autoreinigung)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Шиномонтаж, балансування та сезонна заміна гуми\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Озонування та видалення складних запахів із салону\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Діагностика та ремонт елементів підвіски\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Заміна ременів та ланцюгів ГРМ\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Заміна акумуляторів та обслуговування електрообладнання\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Перевірка та точне налаштування світла фар\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Ремонт та заміна компонентів вихлопної системи\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Комплексна передпокупна перевірка автомобіля\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Сезонне підготовче ТО (зимовий/літній сервіс)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Kfz Reparatur aller Fabrikate\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Inspektion\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Oil-Express Service\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Reifenservice\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Bremsen\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"HU \\u0026 AU Service\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Klimawartung\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Smart Repair\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Achsvermessung\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Fahrzeugdämmung\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Fahrzeuglackierung\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Felgenlackierung\"}}]}"}</script>
      </head>
      <body className="bg-bg-light text-text-main selection:bg-accent selection:text-white antialiased overflow-x-hidden">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
