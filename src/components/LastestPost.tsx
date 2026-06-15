import Link from "next/link";

const latestPosts = [
  {
    slug: "como-nacio-el-anillo-de-salomon",
    category: "Proceso creativo",
    title: "Cómo nació El Anillo de Salomón",
    excerpt:
      "Tres operaciones de corazón, una jubilación anticipada y una fascinación por los símbolos. Esta es la historia detrás de la novela.",
    date: "Junio 2026",
    readTime: "8 min",
  },
  {
    slug: "arca-de-la-alianza-misterio-historia",
    category: "Investigación",
    title: "El Arca de la Alianza: el mayor misterio sin resolver de la historia",
    excerpt:
      "Desapareció hace más de 2.600 años. Nadie sabe dónde está. Y sin embargo, hay quien afirma que la tiene. Que la ha visto. Que la custodia con su vida.",
    date: "Junio 2026",
    readTime: "14 min",
  },
];

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

        <div className="grid gap-6 md:grid-cols-2">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group relative h-full border border-stone-800 bg-black/40 p-8 transition duration-300 hover:border-amber-500/40">
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-amber-500/0 via-amber-500/60 to-amber-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="mb-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-stone-600">
                  <span className="text-amber-500/80">{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} de lectura</span>
                </div>

                <h3 className="mb-4 font-serif text-xl font-light leading-snug text-stone-100 transition duration-300 group-hover:text-amber-400 md:text-2xl">
                  {post.title}
                </h3>

                <p className="mb-8 text-sm leading-relaxed text-stone-400">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-amber-500 transition duration-300 group-hover:text-amber-400">
                    Leer artículo
                  </span>
                  <span className="h-px w-6 bg-amber-500/50 transition-all duration-300 group-hover:w-10 group-hover:bg-amber-400" />
                </div>
              </article>
            </Link>
          ))}
        </div>

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
