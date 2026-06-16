"use client";

import { useState } from "react";
import Link from "next/link";

const BIO_CORTA =
  "Miguel Secades García (Cornellana, Asturias, 1980) es autor de El Anillo de Salomón, su primera novela. Trabajó durante años en el sector informático antes de jubilarse anticipadamente. Es su debut en la ficción. Reside en Asturias.";

const BIO_EXTENDIDA =
  "Miguel Secades García nació en Cornellana, Asturias, en 1980. Llegó al mundo con una cardiopatía congénita que le llevó al quirófano en tres ocasiones — a los dos años, a los trece y a los treinta y cuatro — y que marcó de forma decisiva su manera de entender el tiempo y el propósito. Tras una larga trayectoria profesional en el sector informático, se jubiló anticipadamente a los treinta y seis años. Fue entonces cuando empezó a escribir. El Anillo de Salomón, su primera novela, es un thriller arqueológico que mezcla historia antigua, símbolos y sociedades secretas en una carrera a través de Madrid, Jerusalén, Babilonia y Axum. Publicada en 2026 en Amazon KDP, está disponible en formato ebook y tapa blanda. Secades vive en Asturias y trabaja en su siguiente proyecto.";

const SINOPSIS =
  "Un arqueólogo español descubre un antiguo papiro que menciona el Anillo de Salomón — un objeto capaz, según los textos, de doblegar la voluntad de los espíritus y revelar los secretos del universo. Lo que empieza como una investigación académica se convierte en una carrera contrarreloj desde Madrid hasta Jerusalén, las ruinas de Babilonia y la mítica Axum. Porque no es el único que busca el anillo.";

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="mt-5 text-xs uppercase tracking-[0.2em] text-amber-500/70 transition hover:text-amber-400"
    >
      {copied ? "¡Copiado! ✓" : `${label} →`}
    </button>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-serif text-2xl font-light text-stone-100">
      {children}
    </h2>
  );
}

export default function PressClient() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* ── CABECERA ── */}
      <section className="border-b border-stone-800 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Sala de prensa
          </p>
          <h1 className="mb-6 font-serif text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            Kit de prensa
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg">
            Todos los materiales necesarios para periodistas, bloggers y medios
            de comunicación. Descarga gratuita de imágenes en alta resolución,
            biografías y ficha completa del libro.
          </p>
          <div className="mt-8">
            <a
              href="mailto:miguel.secades.garcia@gmail.com"
              className="text-sm uppercase tracking-[0.2em] text-amber-500 transition hover:text-amber-400"
            >
              Contacto de prensa: miguel.secades.garcia@gmail.com →
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="space-y-16">

          {/* ── DESCARGAS ── */}
          <section>
            <SectionTitle>Descargas</SectionTitle>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <div className="border border-stone-800 bg-black/40 p-6">
                <div className="mb-4 overflow-hidden border border-stone-800">
                  <img
                    src="/images/books/Portada-El_Anillo_de_Salomon.jpg"
                    alt="Portada El Anillo de Salomón"
                    className="w-full object-cover"
                  />
                </div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-amber-500">Portada del libro</p>
                <p className="mb-4 text-sm text-stone-500">Alta resolución · JPG</p>
                <a
                  href="/images/books/Portada-El_Anillo_de_Salomon.jpg"
                  download="Portada-El-Anillo-de-Salomon.jpg"
                  className="block border border-amber-500/80 px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
                >
                  Descargar portada
                </a>
              </div>

              <div className="border border-stone-800 bg-black/40 p-6">
                <div className="mb-4 overflow-hidden border border-stone-800">
                  <img
                    src="/images/author/miguel-secades.png"
                    alt="Miguel Secades García"
                    className="aspect-square w-full object-cover object-top"
                  />
                </div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-amber-500">Foto del autor</p>
                <p className="mb-4 text-sm text-stone-500">Alta resolución · PNG</p>
                <a
                  href="/images/author/miguel-secades.png"
                  download="Miguel-Secades-foto-autor.png"
                  className="block border border-amber-500/80 px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
                >
                  Descargar foto
                </a>
              </div>

              <div className="border border-stone-800 bg-black/40 p-6">
                <div className="mb-4 flex items-center justify-center overflow-hidden border border-stone-800 bg-black p-4">
                  <img
                    src="/images/books/anillo-salomon-mockup.png"
                    alt="Mockup El Anillo de Salomón"
                    className="max-h-64 object-contain"
                  />
                </div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-amber-500">Mockup del libro</p>
                <p className="mb-4 text-sm text-stone-500">Alta resolución · PNG</p>
                <a
                  href="/images/books/anillo-salomon-mockup.png"
                  download="El-Anillo-de-Salomon-mockup.png"
                  className="block border border-amber-500/80 px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
                >
                  Descargar mockup
                </a>
              </div>

            </div>
          </section>

          {/* ── FICHA DEL LIBRO ── */}
          <section>
            <SectionTitle>Ficha del libro</SectionTitle>
            <div className="border border-stone-800 bg-black/40 p-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Título", value: "El Anillo de Salomón" },
                  { label: "Autor", value: "Miguel Secades García" },
                  { label: "Género", value: "Thriller arqueológico" },
                  { label: "Editorial", value: "Autopublicación (Amazon KDP)" },
                  { label: "Fecha de publicación", value: "8 de mayo de 2026" },
                  { label: "Páginas", value: "513" },
                  { label: "ISBN", value: "979-8195869403" },
                  { label: "Idioma", value: "Español" },
                  { label: "Formatos", value: "Tapa blanda · Ebook Kindle" },
                  { label: "Precio tapa blanda", value: "20,40 €" },
                  { label: "Precio ebook", value: "2,99 € · Gratis con Kindle Unlimited" },
                  { label: "Escenarios", value: "Madrid · Jerusalén · Babilonia · Axum" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="mb-1 text-xs uppercase tracking-[0.2em] text-amber-500">{item.label}</p>
                    <p className="text-sm text-stone-300">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-stone-800 pt-6">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-amber-500">Disponible en</p>
                <div className="flex flex-wrap gap-6">
                  <a href="https://www.amazon.es/dp/B0H14NRP92" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-stone-400 transition hover:text-amber-400">
                    Amazon · Tapa blanda →
                  </a>
                  <a href="https://www.amazon.es/dp/B0GZVQL88V" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-stone-400 transition hover:text-amber-400">
                    Amazon · Ebook Kindle →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── SINOPSIS ── */}
          <section>
            <SectionTitle>Sinopsis</SectionTitle>
            <div className="border border-stone-800 bg-black/40 p-8">
              <p className="text-base leading-relaxed text-stone-300">{SINOPSIS}</p>
              <CopyButton text={SINOPSIS} label="Copiar sinopsis" />
            </div>
          </section>

          {/* ── BIOGRAFÍAS ── */}
          <section>
            <SectionTitle>Biografías del autor</SectionTitle>
            <div className="space-y-5">
              <div className="border border-stone-800 bg-black/40 p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-stone-500">
                  Versión corta · Para pie de foto y contraportada
                </p>
                <p className="text-sm leading-relaxed text-stone-300">{BIO_CORTA}</p>
                <CopyButton text={BIO_CORTA} label="Copiar bio corta" />
              </div>
              <div className="border border-stone-800 bg-black/40 p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-stone-500">
                  Versión extendida · Para entrevistas, presentaciones y festivales
                </p>
                <p className="text-sm leading-relaxed text-stone-300">{BIO_EXTENDIDA}</p>
                <CopyButton text={BIO_EXTENDIDA} label="Copiar bio extendida" />
              </div>
            </div>
          </section>

          {/* ── CONTACTO ── */}
          <section>
            <SectionTitle>Contacto de prensa</SectionTitle>
            <div className="border border-stone-800 bg-black/40 p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber-500">Email</p>
                  <a href="mailto:miguel.secades.garcia@gmail.com"
                    className="text-sm text-stone-300 transition hover:text-amber-400">
                    miguel.secades.garcia@gmail.com
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber-500">Redes sociales</p>
                  <div className="space-y-1">
                    {[
                      { label: "Instagram", href: "https://www.instagram.com/miguelsecades/" },
                      { label: "X / Twitter", href: "https://x.com/MSecadesOficial" },
                      { label: "TikTok", href: "https://www.tiktok.com/@msecadestk" },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="block text-sm text-stone-400 transition hover:text-amber-400">
                        {s.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t border-stone-800 pt-6">
                <Link
                  href="/contact"
                  className="inline-block border border-amber-500/80 px-7 py-3 text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
                >
                  Formulario de contacto →
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
