import Link from "next/link";

export default function NewsletterBanner() {
  return (
    <section className="border-t border-stone-800 bg-[#0a0a0a] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">

          <div className="max-w-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-500">
              Newsletter
            </p>
            <h2 className="mb-4 font-serif text-3xl font-light leading-snug text-stone-100 md:text-4xl">
              Historias que no caben en las páginas.
            </h2>
            <p className="text-base leading-relaxed text-stone-400">
              Novedades sobre <em>El Anillo de Salomón</em>, curiosidades
              históricas, el proceso de escritura y lo que viene después.
              Sin spam. Solo cuando haya algo que merezca la pena contar.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/newsletter"
              className="inline-block border border-amber-500/80 px-8 py-4 text-sm uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
            >
              Suscribirme
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
