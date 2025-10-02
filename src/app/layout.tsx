import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ESTUDIO JURÍDICO CRNKOVIC | Soluciones Legales con Integridad",
    description:
      "Más de 40 años de trayectoria brindando soluciones legales con integridad y visión moderna.",
    url: "https://example.com",
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
        <link rel="icon" href="/logo.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png?v=2" />
        <link rel="apple-touch-icon" href="/logo.png?v=2" />
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

