import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo nació El Anillo de Salomón: la historia detrás de la novela",
  description:
    "Miguel Secades cuenta cómo tres operaciones de corazón, una jubilación anticipada y una fascinación por los símbolos dieron lugar a su primera novela.",
};

export default function PostComoNacio() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* ── HERO DEL POST ── */}
      <section className="relative border-b border-stone-800 px-6 pb-16 pt-24 lg:px-12">
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[140px]" />
        <div className="mx-auto max-w-3xl">

          <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-stone-600">
            <Link href="/blog" className="transition hover:text-amber-500">
              Tras las páginas
            </Link>
            <span>/</span>
            <span className="text-stone-500">Proceso creativo</span>
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Proceso creativo
          </p>

          <h1 className="mb-8 font-serif text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            Cómo nació <em>El Anillo de Salomón</em>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-stone-400">
            Hay novelas que se escriben desde la ambición. Otras desde la
            curiosidad. La mía se escribió desde algo más difícil de nombrar:
            la necesidad de hacer algo con el tiempo que la vida me regaló de
            la forma más inesperada.
          </p>

          <div className="flex flex-wrap items-center gap-6 border-t border-stone-800 pt-6 text-xs uppercase tracking-[0.2em] text-stone-600">
            <span>Miguel Secades</span>
            <span>·</span>
            <span>Junio 2026</span>
            <span>·</span>
            <span>Lectura: 8 min</span>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <article className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl">

          {/* Intro */}
          <div className="mb-12 space-y-5 text-lg leading-relaxed text-stone-300">
            <p>
              Esta no es la historia de un escritor que siempre supo que iba a
              escribir. Es la historia de un hombre que llegó a la escritura
              por eliminación — cuando todo lo demás se detuvo.
            </p>
            <p>
              Me llamo Miguel Secades. Nací en Cornellana, Asturias, en 1980,
              con el corazón enfermo. Y esa frase, que podría sonar a tragedia,
              es en realidad el principio de todo.
            </p>
          </div>

          <Divider />

          <Section>
            <H2>Un corazón que no quería detenerse</H2>
            <p>
              Con dos años me operaron a vida o muerte. Sobreviví. A los trece
              años, una segunda intervención me implantó una válvula aórtica
              artificial — ese tictac mecánico que desde entonces marca el
              tiempo dentro de mi pecho. A los treinta y cuatro, una tercera
              operación añadió la válvula mitral.
            </p>
            <p>
              Tres veces en el quirófano. Tres veces de vuelta.
            </p>
            <p>
              Cuando tienes un corazón que ha necesitado ser reparado tantas
              veces, desarrollas una relación particular con el tiempo. No lo
              das por sentado. Sabes, de una forma que es difícil de explicar
              a quien no lo ha vivido, que cada día es una negociación, no una
              garantía.
            </p>
            <p>
              Pero durante años, esa conciencia del tiempo convivió con una
              vida completamente normal: trabajo, rutina, el mundo de la
              informática donde pasé décadas construyendo sistemas, resolviendo
              problemas, viviendo en la lógica ordenada de los datos y el código.
            </p>
          </Section>

          <Divider />

          <Section>
            <H2>Cuando el tiempo se detuvo — y luego sobró</H2>
            <p>
              A los treinta y seis años, tras la tercera operación, me
              jubilaron. De un día para otro, la estructura que había organizado
              mi vida durante décadas desapareció.
            </p>
            <p>
              El silencio que dejó fue ensordecedor.
            </p>
            <p>
              Hay personas que saben exactamente qué hacer con el tiempo libre.
              Yo no era una de ellas. El tiempo que antes era un recurso escaso
              se convirtió de repente en algo que había que llenar, que
              justificar, que convertir en algo que tuviera sentido.
            </p>

            <blockquote className="my-10 border-l-2 border-amber-500 pl-8">
              <p className="font-serif text-xl font-light italic leading-relaxed text-stone-200">
                "Empecé a escribir para llenar el tiempo. Terminé haciéndolo
                para llenar algo más difícil de nombrar."
              </p>
            </blockquote>

            <p>
              No tenía un plan. No tenía una historia clara. Tenía, eso sí,
              años de lecturas acumuladas, una fascinación profunda por la
              historia antigua y los misterios que nadie ha conseguido resolver,
              y una pregunta que llevaba tiempo rondándome: ¿y si uno de esos
              objetos legendarios — uno de esos artefactos que los textos
              antiguos describen como imposibles — existiera de verdad?
            </p>
          </Section>

          <Divider />

          <Section>
            <H2>El Código Da Vinci y el género que lo cambió todo</H2>
            <p>
              Tengo que ser honesto sobre una influencia que cualquier lector
              de <em>El Anillo de Salomón</em> va a detectar: <em>El Código
              Da Vinci</em> de Dan Brown.
            </p>
            <p>
              Publicado en 2003, se convirtió en un superventas mundial con más de
              79 millones de ejemplares vendidos — y en una de las novelas
              que más profundamente ha marcado a una generación entera de
              lectores interesados en la historia, los símbolos y los secretos
              que se ocultan detrás de lo que creemos saber.
            </p>
            <p>
              A mí me marcó. La forma en que Brown toma elementos históricos
              reales — lugares, obras de arte, sociedades secretas — y los
              convierte en el motor de una trama de ficción que no puede
              soltarse es exactamente el tipo de thriller que siempre quise
              leer. Y cuando empecé a escribir, era inevitablemente el tipo
              de thriller que quería escribir.
            </p>
            <p>
              Pero con una diferencia fundamental: mi universo no era el del
              Vaticano y el Priorato de Sión. Mi universo era el del rey
              Salomón, los textos apócrifos, los objetos legendarios de la
              tradición judía, cristiana e islámica. Un territorio igualmente
              rico en misterio, igualmente lleno de preguntas sin respuesta,
              e igualmente fascinante para quien se atreve a tirarse de cabeza.
            </p>
          </Section>

          <Divider />

          <Section>
            <H2>La simbología y una iniciación inesperada</H2>
            <p>
              En el momento en que empecé a escribir, algo más estaba
              ocurriendo en mi vida: me había iniciado en la masonería.
            </p>
            <p>
              Lo cuento porque es relevante, no para crear misterio. La
              masonería es, entre muchas otras cosas, una tradición profundamente
              ligada al simbolismo — a la idea de que hay capas de significado
              bajo la superficie de las cosas, que los símbolos son un lenguaje
              que habla a quienes saben escuchar. Esa sensibilidad, ese modo de
              mirar el mundo buscando lo que hay detrás de lo visible, caló
              profundamente en la novela que estaba escribiendo.
            </p>
            <p>
              El Anillo de Salomón no es una novela masónica. Pero sí es una
              novela impregnada de esa misma fascinación por los símbolos, los
              rituales, el conocimiento que se transmite en secreto a través
              de los siglos. La AMORC — la Antigua y Mística Orden Rosae Crucis,
              que juega un papel en el desenlace de la novela — no es un
              elemento arbitrario: es parte de un universo de órdenes y
              tradiciones esotéricas que siempre me ha fascinado y que empecé
              a comprender mejor desde dentro.
            </p>
          </Section>

          <Divider />

          <Section>
            <H2>El manuscrito que dormía en un cajón</H2>
            <p>
              Empecé a escribir. Y durante un tiempo, escribí con una energía
              que no había sentido en años. La historia de Álvaro Ballester —
              el arqueólogo español que recibe un papiro sumerio con la pista
              del Anillo de Salomón — tomó forma casi sola. Los escenarios
              llegaron naturalmente: Madrid, el Vaticano, Babilonia, Axum.
              Los antagonistas aparecieron: una fundación suiza, una sociedad
              secreta, el enigmático doctor McGrane.
            </p>
            <p>
              Y entonces, el manuscrito quedó aparcado.
            </p>
            <p>
              No por falta de interés. Por algo mucho más humano: el miedo a
              terminar. Cuando has invertido meses en construir algo, llegar
              al final significa enfrentarse al veredicto. Significa que la
              historia que vivía cómodamente en tu cabeza tiene que salir al
              mundo y sostenerse sola. Eso da vértigo.
            </p>
            <p>
              El manuscrito durmió durante años. Lo abría de vez en cuando,
              leía algunas páginas, volvía a cerrarlo.
            </p>
          </Section>

          <Divider />

          <Section>
            <H2>El regreso — y el final</H2>
            <p>
              En 2025 lo retomé. No sé exactamente qué cambió. Quizás la
              perspectiva que da el tiempo. Quizás el cansancio de dejar algo
              a medias. Quizás simplemente la certeza de que si no lo terminaba
              entonces, no lo iba a terminar nunca.
            </p>
            <p>
              Esta vez sí: lo terminé.
            </p>
            <p>
              En mayo de 2026, <em>El Anillo de Salomón</em> se publicó en
              Amazon KDP, en formato ebook y tapa blanda. 513 páginas. La
              historia de un hombre que busca un objeto legendario y descubre
              que hay fuerzas mucho más peligrosas que él en esa búsqueda.
            </p>
            <p>
              Y la historia de otro hombre — yo — que encontró en la escritura
              algo que no sabía que le faltaba.
            </p>

            <blockquote className="my-10 border-l-2 border-amber-500 pl-8">
              <p className="font-serif text-xl font-light italic leading-relaxed text-stone-200">
                "Llegué a la escritura por un corazón que no funcionaba bien.
                Seguí escribiendo porque descubrí que era lo que mejor
                funcionaba en mí."
              </p>
              <cite className="mt-3 block text-sm text-stone-500 not-italic">
                — Miguel Secades
              </cite>
            </blockquote>
          </Section>

          <Divider />

          {/* CTA */}
          <section className="my-12 border border-amber-500/20 bg-amber-500/5 p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-500">
              La novela
            </p>
            <p className="mb-5 font-serif text-2xl font-light leading-relaxed text-stone-200">
              El resultado de todo esto está disponible ahora.
            </p>
            <p className="mb-8 text-base leading-relaxed text-stone-400">
              Si te ha llegado esta historia y tienes curiosidad por la novela
              que nació de ella, la tienes disponible en Amazon en tapa blanda
              y ebook. 513 páginas de thriller arqueológico desde Madrid hasta
              Axum.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.amazon.es/dp/B0H14NRP92"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-amber-500/80 px-7 py-3 text-center text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
              >
                Tapa blanda en Amazon
              </a>
              <a
                href="https://www.amazon.es/dp/B0GZVQL88V"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-stone-700 px-7 py-3 text-center text-xs uppercase tracking-[0.18em] text-stone-400 transition hover:border-amber-500/60 hover:text-amber-400"
              >
                Ebook Kindle
              </a>
            </div>
          </section>

          {/* Volver */}
          <div className="mt-16 border-t border-stone-800 pt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/blog"
              className="text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400"
            >
              ← Volver a Tras las páginas
            </Link>
            <Link
              href="/about"
              className="text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400"
            >
              Conoce al autor →
            </Link>
          </div>

        </div>
      </article>
    </main>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 mt-2 font-serif text-3xl font-light leading-snug text-stone-100">
      {children}
    </h2>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="mb-4 space-y-5 text-base leading-relaxed text-stone-300">
      {children}
    </section>
  );
}

function Divider() {
  return <div className="my-12 border-t border-stone-800" />;
}
