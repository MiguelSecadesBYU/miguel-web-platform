import type { Metadata } from "next";
import LinksClient from "./LinksClient";

export const metadata: Metadata = {
  title: "Enlaces — Miguel Secades",
  description:
    "Todos los enlaces de Miguel Secades: el libro, el booktrailer, redes sociales y el primer capítulo gratis de El Anillo de Salomón.",
};

export default function LinksPage() {
  return <LinksClient />;
}
