import type { Metadata } from "next";
import NewsletterClient from "./NewsletterClient";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Suscríbete a la newsletter de Miguel Secades y recibe novedades sobre El Anillo de Salomón, artículos del blog y contenido exclusivo. Sin spam.",
};

export default function NewsletterPage() {
  return <NewsletterClient />;
}
