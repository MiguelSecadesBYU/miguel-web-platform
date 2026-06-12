import Link from "next/link";

const posts = [
  {
    slug: "anillo-de-salomon-historia-poderes-leyenda",
    category: "Investigación",
    title: "El Anillo de Salomón: historia, poderes y el misterio que nadie ha resuelto",
    excerpt:
      "Un objeto grabado por Dios, entregado por un arcángel, capaz de doblegar la voluntad de los demonios. Lleva más de dos mil años fascinando al mundo. Y sigue sin aparecer.",
    date: "Junio 2026",
    ready: true,
  },
  {
    slug: null,
    category: "Proceso creativo",
    title: "Cómo nació El Anillo de Salomón",
    excerpt:
      "Notas sobre el origen de la novela, las primeras ideas y el camino que llevó a convertir un misterio antiguo en thriller contemporáneo.",
    date: "Próximamente",
    ready: false,
  },
  {
    slug: null,
    category: "Escenarios",
    title: "Jerusalén, Babilonia y Axum",
    excerpt:
      "Tres lugares reales que forman parte del viaje narrativo y simbólico de la novela.",
    date: "Próximamente",
    ready: false,
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-6 py-28 text-white lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Tras las páginas
          </p>
          <h1 className="mb-8 font-serif text-5xl font-light leading-tight md:text-6xl">
            El archivo donde nacen los misterios.
          </h1>
          <p className="text-lg leading-relaxed text-stone-300">
            Investigación, inspiración, proceso creativo, noticias y notas
            personales sobre el universo de <em>El Anillo de Salomón</em> y las
            historias que vendrán después.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => {
            const card = (
              <article
                key={post.title}
                className={`group border border-stone-800 bg-black/40 p-7 transition ${
                  post.ready
                    ? "cursor-pointer hover:border-amber-500/60"
                    : "opacity-60"
                }`}
              >
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber-500">
                  {post.category}
                </p>
                <h2
                  className={`mb-5 font-serif text-2xl font-light leading-snug text-white ${
                    post.ready ? "group-hover:text-amber-400" : ""
                  }`}
                >
                  {post.title}
                </h2>
                <p className="mb-8 text-sm leading-7 text-stone-400">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-stone-800 pt-5 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <span>{post.date}</span>
                  {post.ready ? (
                    <span className="text-amber-500 transition group-hover:translate-x-1">
                      Leer más →
                    </span>
                  ) : (
                    <span>Próximamente</span>
                  )}
                </div>
              </article>
            );

            return post.ready && post.slug ? (
              <Link key={post.title} href={`/blog/${post.slug}`}>
                {card}
              </Link>
            ) : (
              <div key={post.title}>{card}</div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
