import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Autor",
  description:
    "Miguel Secades García, autor de El Anillo de Salomón. Conoce su historia, su trayectoria y el camino que le llevó a escribir su primera novela.",
};

export default function AboutPage() {
  return <AboutClient />;
}
