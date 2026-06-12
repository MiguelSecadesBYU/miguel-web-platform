import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
    url: "https://miguelsecades.com",
    siteName: "Miguel Secades",
    locale: "es_ES",
    type: "website",
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
