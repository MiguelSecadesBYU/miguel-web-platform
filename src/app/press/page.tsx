import type { Metadata } from "next";
import PressClient from "./PressClient";

export const metadata: Metadata = {
  title: "Prensa",
  description:
    "Kit de prensa de Miguel Secades García, autor de El Anillo de Salomón. Biografías, portada, foto del autor y ficha del libro para medios y periodistas.",
};

export default function PressPage() {
  return <PressClient />;
}
