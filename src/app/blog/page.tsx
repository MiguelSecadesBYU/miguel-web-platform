const posts = [
  {
    category: "Investigación",
    title: "La leyenda del Anillo de Salomón",
    excerpt:
      "Un primer acercamiento al mito, sus símbolos y el poder que la tradición atribuyó a este objeto legendario.",
    date: "Próximamente",
  },
  {
    category: "Proceso creativo",
    title: "Cómo nació El Anillo de Salomón",
    excerpt:
      "Notas sobre el origen de la novela, las primeras ideas y el camino que llevó a convertir un misterio antiguo en thriller contemporáneo.",
    date: "Próximamente",
  },
  {
    category: "Escenarios",
    title: "Jerusalén, Babilonia y Axum",
    excerpt:
      "Tres lugares reales que forman parte del viaje narrativo y simbólico de la novela.",
    date: "Próximamente",
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
          {posts.map((post) => (
            <article
              key={post.title}
              className="group border border-stone-800 bg-black/40 p-7 transition hover:border-amber-500/60"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber-500">
                {post.category}
              </p>

              <h2 className="mb-5 font-serif text-2xl font-light leading-snug text-white group-hover:text-amber-400">
                {post.title}
              </h2>

              <p className="mb-8 text-sm leading-7 text-stone-400">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between border-t border-stone-800 pt-5 text-xs uppercase tracking-[0.18em] text-stone-500">
                <span>{post.date}</span>
                <span className="text-amber-500">Leer más</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}