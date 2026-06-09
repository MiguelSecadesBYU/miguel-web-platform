import Link from "next/link";

export default function LatestPost() {
  return (
    <section className="border-t border-stone-800 bg-[#070707] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Cabecera de sección */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-500">
              Tras las páginas
            </p>
            <h2 className="font-serif text-3xl font-light text-stone-100 md:text-4xl">
              Últimas historias del blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden text-xs uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400 md:block"
          >
            Ver todos →
          </Link>
        </div>

        {/* Tarjeta del post */}
        <Link href="/blog/anillo-de-salomon-historia-poderes-leyenda">
          <article className="group relative border border-stone-800 bg-black/40 p-8 transition duration-300 hover:border-amber-500/40 md:p-10">

            {/* Línea decorativa animada */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-amber-500/0 via-amber-500/60 to-amber-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

            {/* Meta — línea horizontal */}
            <div className="mb-5 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-stone-600">
              <span className="text-amber-500/80">Investigación</span>
              <span>·</span>
              <span>Junio 2026</span>
              <span>·</span>
              <span>12 min de lectura</span>
            </div>

            {/* Título */}
            <h3 className="mb-5 font-serif text-2xl font-light leading-snug text-stone-100 transition duration-300 group-hover:text-amber-400 md:text-3xl lg:text-4xl">
              El Anillo de Salomón: historia, poderes y el misterio que nadie ha resuelto
            </h3>

            {/* Extracto */}
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-stone-400">
              Un objeto grabado por Dios, entregado por un arcángel, capaz de
              doblegar la voluntad de los demonios. Lleva más de dos mil años
              fascinando al mundo. Aparece en textos judíos, islámicos y
              griegos. Inspira tradiciones esotéricas que aún hoy tienen
              seguidores. Y sigue sin aparecer.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-500 transition duration-300 group-hover:text-amber-400">
                Leer artículo
              </span>
              <span className="h-px w-8 bg-amber-500/50 transition-all duration-300 group-hover:w-14 group-hover:bg-amber-400" />
            </div>

          </article>
        </Link>

        {/* Enlace móvil */}
        <div className="mt-6 md:hidden">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400"
          >
            Ver todos los artículos →
          </Link>
        </div>

      </div>
    </section>
  );
}
