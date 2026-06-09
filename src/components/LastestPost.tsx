import Link from "next/link";

export default function LatestPost() {
  return (
    <section className="border-t border-stone-800 bg-[#070707] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">

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

        {/* Tarjeta del post destacado */}
        <Link href="/blog/anillo-de-salomon-historia-poderes-leyenda">
          <article className="group grid gap-0 border border-stone-800 bg-black/40 transition hover:border-amber-500/40 md:grid-cols-[1fr_2fr]">

            {/* Etiqueta lateral */}
            <div className="flex flex-col justify-between border-b border-stone-800 p-8 md:border-b-0 md:border-r">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber-500">
                  Investigación
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-600">
                  Junio 2026
                </p>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-stone-600 transition group-hover:text-amber-500 md:mt-0">
                12 min de lectura
              </p>
            </div>

            {/* Contenido */}
            <div className="p-8">
              <h3 className="mb-4 font-serif text-2xl font-light leading-snug text-stone-100 transition group-hover:text-amber-400 md:text-3xl">
                El Anillo de Salomón: historia, poderes y el misterio que nadie ha resuelto
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-stone-400">
                Un objeto grabado por Dios, entregado por un arcángel, capaz de
                doblegar la voluntad de los demonios. Lleva más de dos mil años
                fascinando al mundo. Aparece en textos judíos, islámicos y
                griegos. Inspira tradiciones esotéricas que aún hoy tienen
                seguidores. Y sigue sin aparecer.
              </p>
              <span className="text-xs uppercase tracking-[0.2em] text-amber-500/70 transition group-hover:text-amber-400">
                Leer artículo →
              </span>
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
