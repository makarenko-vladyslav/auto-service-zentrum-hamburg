import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Service Zentrum Hamburg — Сертифікований KFZ-Meisterbetrieb у Гамбурзі",
  description: "Офіційний автомайстерня у Гамбурзі під керівництвом KFZ-Meister. Комп'ютерна діагностика, 3D-розвал-сходження, техогляд HU/AU, автодеталінг та чистка. Kieler Str. 207.",
  keywords: ["Autowerkstatt Hamburg", "KFZ Meisterbetrieb", "Achsvermessung 3D", "Inspektion Hamburg", "Autoreinigung", "HU AU Hamburg", "Auto Service Zentrum Hamburg"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Auto Service Zentrum Hamburg — Німецька якість та 3D-діагностика",
    description: "Сертифікований автосервіс KFZ-Meister у Гамбурзі. Обслуговування всіх марок зі збереженням заводської гарантії. Прямий зв'язок через WhatsApp.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:ital,wght@0,500;0,600;0,700;0,800;1,700&family=Sofia+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
              <script type="application/ld+json">{"{\"@context\":\"https://schema.org\",\"@type\":\"AutoRepair\",\"name\":\"Auto Service Zentrum Hamburg\",\"description\":\"Auto Service Zentrum Hamburg — це сертифікована автомайстерня (KFZ-Meisterbetrieb) у Гамбурзі під керівництвом пана Навабі, яка надає повний спектр послуг з ремонту та обслуговування автомобілів усіх марок. Сервіс поєднує високоточну технічну діагностику на сучасній 3D-апаратурі з професійним автодеталінгом та глибинною чисткою салонів.\",\"url\":\"https://aszhh.de/\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Kieler Straße 207\",\"addressLocality\":\"Hamburg\",\"addressCountry\":\"DE\"},\"makesOffer\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Комп'ютерна діагностика двигуна та електронних систем\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Планове технічне обслуговування (Inspektion) за регламентом виробника\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Підготовка та проведення офіційного техогляду (HU/AU Service)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Експрес-заміна оливи та фільтрів (Oil-Express Service)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Діагностика, обслуговування та ремонт гальмівної системи\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"3D-розвал-сходження коліс (Achsvermessung)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Обслуговування, дезінфекція та заправка автокондиціонерів (Klimawartung)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Локальний кузовний ремонт та усунення вм'ятин (Smart Repair)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Шиномонтаж, балансування та сезонна заміна коліс\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Сезонне зберігання комплектів шин\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Ремонт елементів підвіски та ходової частини\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Заміна ременів та ланцюгів ГРМ\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Ремонт та заміна компонентів вихлопної системи\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Професійна хімічна чистка салону (Profi-Autoreinigung)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Озонування та видалення складних запахів із салону\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Полірування кузова та захисне покриття\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Відновлення та полірування пластикових фар\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Заміна та ремонт автоскла\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Перевірка та заміна акумуляторних батарей\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Комплексна діагностика автомобіля перед купівлею\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Kfz Reparatur aller Fabrikate\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Inspektion\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Oil-Express Service\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Reifenservice\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Bremsen\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"HU \\u0026 AU Service\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Klimawartung\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Smart Repair\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Achsvermessung\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Profi-Autoreinigung\"}}]}"}</script>
      </head>
      <body className="antialiased bg-[hsl(215_20%_97%)] text-[hsl(215_30%_14%)] selection:bg-[hsl(24_95%_53%)] selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
