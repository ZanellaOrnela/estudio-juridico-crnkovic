import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ESTUDIO JURÍDICO CRNKOVIC | Soluciones Legales con Integridad",
    template: "%s | ESTUDIO JURÍDICO CRNKOVIC",
  },
  description:
    "Más de 40 años de trayectoria brindando soluciones legales con integridad y visión moderna. Asesoría confiable para un futuro seguro.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/logo (1).png",
    shortcut: "/logo (1).png",
    apple: "/logo (1).png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ESTUDIO JURÍDICO CRNKOVIC | Soluciones Legales con Integridad",
    description:
      "Más de 40 años de trayectoria brindando soluciones legales con integridad y visión moderna.",
    url: SITE_URL,
    siteName: "ESTUDIO JURÍDICO CRNKOVIC",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESTUDIO JURÍDICO CRNKOVIC | Soluciones Legales con Integridad",
    description:
      "Más de 40 años de trayectoria brindando soluciones legales con integridad y visión moderna.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Force favicon to use site logo, overriding default favicon.ico */}
        <link rel="icon" href="/logo (1).png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo (1).png?v=3" />
        <link rel="apple-touch-icon" href="/logo (1).png?v=3" />
        {/* JSON-LD LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Estudio Jurídico Crnkovic",
              description:
                "Estudio jurídico en Santa Cruz y Chubut. Asesoría legal con enfoque estratégico y preventivo.",
              url: SITE_URL,
              image: `${SITE_URL}/logo (1).png`,
              logo: `${SITE_URL}/logo (1).png`,
              telephone: "+54 9 297 457-3242",
              email: "estudiojuridicocrnk@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Galería Comercial — Local 10, Av. 25 de Mayo",
                addressLocality: "Las Heras",
                addressRegion: "Santa Cruz",
                postalCode: "9017",
                addressCountry: "AR",
              },
              hasMap:
                "https://www.google.com/maps/search/?api=1&query=Galeria%20Comercial%20Local%2010%2C%20Av%2025%20de%20Mayo%2C%20Las%20Heras%2C%20Santa%20Cruz%209017%2C%20Argentina",
              geo: {
                "@type": "GeoCoordinates",
                latitude: undefined,
                longitude: undefined,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://m.facebook.com/EstudioJuridicoCrnk",
                "https://instagram.com/estudiojuridicocrnk",
              ],
              areaServed: [
                { "@type": "AdministrativeArea", name: "Santa Cruz" },
                { "@type": "AdministrativeArea", name: "Chubut" },
              ],
              serviceOfferred: undefined,
              makesOffer: {
                "@type": "OfferCatalog",
                name: "Servicios legales",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Derecho Civil" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Derecho Comercial" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Derecho Laboral" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Derecho de Familia" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Sucesiones" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Asesoramiento Preventivo" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Asesoramiento a Empresas y Sociedades" },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased transition-all duration-300`}
      >
        <Header />
        <main className="transition-all duration-500">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

