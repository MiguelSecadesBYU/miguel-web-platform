import Link from "next/link";

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-6 py-14 text-white lg:px-12">
      <section className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[0.8fr_1.2fr]">
        
        {/* BOOK MOCKUP */}
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

        {/* CONTENT */}
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

          <div className="mb-8 grid gap-6 border-t border-b border-stone-800 py-6 md:grid-cols-2">
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
              <p className="text-stone-300">
                Madrid, Jerusalén, Babilonia y Axum
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="border border-amber-500 bg-amber-600 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition hover:bg-amber-500"
            >
              Información y prensa
            </Link>

            <Link
              href="/blog"
              className="border border-stone-700 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition hover:border-amber-400 hover:text-amber-400"
            >
              Tras las páginas
            </Link>
          </div>

          <p className="mt-6 text-sm text-stone-500">
            Más contenido, ediciones y novedades próximamente.
          </p>
        </div>
      </section>
    </main>
  );
}