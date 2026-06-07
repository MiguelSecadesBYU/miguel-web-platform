import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Libros",
  description:
    "El Anillo de Salomón, de Miguel Secades García. Thriller arqueológico disponible en Amazon en ebook y tapa blanda.",
};

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-6 py-14 text-white lg:px-12">
      <section className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[0.8fr_1.2fr]">

        {/* PORTADA */}
        <div className="flex justify-center lg:-translate-y-6">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-amber-500/10 blur-3xl" />
            <img
              src="/images/books/anillo-salomon-mockup.png"
              alt="El Anillo de Salomón"
              className="max-h-[760px] w-full object-contain drop-shadow-[0_35px_80px_rgba(245,158,11,0.22)]"
            />
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Novela
          </p>

          <h1 className="mb-8 font-serif text-5xl font-light leading-tight md:text-6xl">
            El Anillo de Salomón
          </h1>

          <p className="mb-8 text-xl leading-relaxed text-stone-300">
            Un thriller arqueológico donde historia, símbolos antiguos y
            sociedades secretas se entrelazan en una búsqueda que podría cambiar
            para siempre la comprensión del pasado.
          </p>

          <div className="mb-10 space-y-5 border-l border-amber-500/40 pl-6 text-stone-400">
            <p>
              Un antiguo papiro hallado en Oriente Próximo lleva al arqueólogo
              Álvaro Ballester hasta la pista de un objeto legendario: el
              Anillo de Salomón.
            </p>
            <p>
              Desde Madrid hasta Jerusalén, Babilonia y Axum, cada descubrimiento
              acerca a Ballester y Daniela Gil a una verdad que tal vez nunca
              debió salir a la luz.
            </p>
            <p>Pero no son los únicos que buscan el anillo.</p>
          </div>

          {/* FICHA TÉCNICA */}
          <div className="mb-8 grid gap-6 border-b border-t border-stone-800 py-6 md:grid-cols-2">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amber-500">
                Género
              </p>
              <p className="text-stone-300">Thriller arqueológico</p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amber-500">
                Escenarios
              </p>
              <p className="text-stone-300">Madrid · Jerusalén · Babilonia · Axum</p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amber-500">
                Formatos
              </p>
              <p className="text-stone-300">Ebook · Tapa blanda</p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amber-500">
                ISBN
              </p>
              <p className="font-mono text-sm text-stone-300">979-8195869403</p>
            </div>
          </div>

          {/* BOTONES DE COMPRA */}
          <div className="mb-6">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-500">
              Disponible en Amazon
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">

              {/* Tapa blanda */}
              <a
                href="https://www.amazon.es/dp/B0H14NRP92"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center border border-amber-500/80 px-7 py-4 text-center text-amber-400 transition hover:bg-amber-500 hover:text-black"
              >
                <span className="mb-1 text-xs uppercase tracking-[0.2em] opacity-70">Comprar</span>
                <span className="text-sm uppercase tracking-[0.18em]">Tapa blanda</span>
              </a>

              {/* Ebook Kindle */}
              <a
                href="https://www.amazon.es/dp/B0GZVQL88V"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center border border-amber-500/80 px-7 py-4 text-center text-amber-400 transition hover:bg-amber-500 hover:text-black"
              >
                <span className="mb-1 text-xs uppercase tracking-[0.2em] opacity-70">Comprar</span>
                <span className="text-sm uppercase tracking-[0.18em]">Ebook Kindle</span>
              </a>

            </div>
          </div>

          {/* BOTONES SECUNDARIOS */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="border border-stone-700 px-7 py-3 text-center text-xs uppercase tracking-[0.15em] text-stone-400 transition hover:border-stone-500 hover:text-stone-300"
            >
              Información y prensa
            </Link>
            <Link
              href="/blog"
              className="border border-stone-700 px-7 py-3 text-center text-xs uppercase tracking-[0.15em] text-stone-400 transition hover:border-stone-500 hover:text-stone-300"
            >
              Tras las páginas
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
