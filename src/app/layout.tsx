import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.miguelsecades.com"),
  title: {
    default: "Miguel Secades · Autor",
    template: "%s · Miguel Secades",
  },
  description:
    "Web oficial de Miguel Secades García, autor de El Anillo de Salomón, un thriller arqueológico sobre historia antigua, símbolos y sociedades secretas.",
  openGraph: {
    title: "Miguel Secades · Autor",
    description:
      "Autor de El Anillo de Salomón. Thriller arqueológico desde Madrid hasta Jerusalén, Babilonia y Axum.",
    url: "https://www.miguelsecades.com",
    siteName: "Miguel Secades",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/books/Portada-El_Anillo_de_Salomon.jpg",
        width: 1000,
        height: 1500,
        alt: "El Anillo de Salomón — Miguel Secades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MSecadesOficial",
    creator: "@MSecadesOficial",
    title: "Miguel Secades · Autor",
    description:
      "Autor de El Anillo de Salomón. Thriller arqueológico desde Madrid hasta Jerusalén, Babilonia y Axum.",
    images: ["/images/books/Portada-El_Anillo_de_Salomon.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.miguelsecades.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
