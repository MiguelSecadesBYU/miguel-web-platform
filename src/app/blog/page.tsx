import Link from "next/link";

const posts = [
  {
    slug: "como-nacio-el-anillo-de-salomon",
    category: "Proceso creativo",
    title: "Cómo nació El Anillo de Salomón",
    excerpt:
      "Tres operaciones de corazón, una jubilación anticipada y una fascinación por los símbolos. Esta es la historia detrás de la novela.",
    date: "Junio 2026",
    ready: true,
  },
  {
    slug: "arca-de-la-alianza-misterio-historia",
    category: "Investigación",
    title: "El Arca de la Alianza: el mayor misterio sin resolver de la historia",
    excerpt:
      "Desapareció hace más de 2.600 años. Nadie sabe dónde está. Y sin embargo, hay quien afirma que la tiene. Que la ha visto. Que la custodia con su vida.",
    date: "Junio 2026",
    ready: true,
  },
  {
    slug: "anillo-de-salomon-historia-poderes-leyenda",
    category: "Investigación",
    title: "El Anillo de Salomón: historia, poderes y el misterio que nadie ha resuelto",
    excerpt:
      "Un objeto grabado por Dios, entregado por un arcángel, capaz de doblegar la voluntad de los demonios. Lleva más de dos mil años fascinando al mundo. Y sigue sin aparecer.",
    date: "Junio 2026",
    ready: true,
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tras las páginas",
  description:
    "Blog de Miguel Secades García. Investigación histórica, proceso creativo y el universo de El Anillo de Salomón.",
};

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
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group h-full border border-stone-800 bg-black/40 p-7 transition hover:border-amber-500/60">
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
                  <span className="text-amber-500 transition group-hover:translate-x-1">
                    Leer más →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
