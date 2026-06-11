import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Miguel Secades García para consultas de prensa, propuestas editoriales, presentaciones o colaboraciones relacionadas con El Anillo de Salomón.",
};

export default function ContactPage() {
  return <ContactClient />;
}
