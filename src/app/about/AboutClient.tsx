"use client";

import Link from "next/link";

const timeline = [
  {
    year: "1980",
    title: "Cornellana, Asturias",
    text: "Nace el 14 de febrero. Desde el principio, el corazón tiene sus propias reglas.",
  },
  {
    year: "1982",
    title: "Primera operación",
    text: "Con dos años, intervención a vida o muerte. El niño que sale del quirófano aprende, sin saberlo, que cada día es un regalo.",
  },
  {
    year: "1993",
    title: "Segunda intervención",
    text: "A los trece años, una válvula aórtica artificial. A partir de aquí, su corazón lleva en parte el ritmo del acero.",
  },
  {
    year: "2014",
    title: "Tercera operación",
    text: "Válvula mitral. Tercera vez en el quirófano. Tercera vez que sale adelante.",
  },
  {
    year: "2016",
    title: "Jubilación anticipada",
    text: "Tras una larga carrera en el sector informático, la vida le entrega algo inesperado: tiempo. Empieza a escribir.",
  },
  {
    year: "2025",
    title: "El regreso al manuscrito",
    text: "Retoma El Anillo de Salomón, que había quedado aparcado durante años. Esta vez, lo termina.",
  },
  {
    year: "2026",
    title: "Primera novela publicada",
    text: "El Anillo de Salomón sale al mundo. El comienzo de algo.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* ── CABECERA ── */}
      <section className="relative border-b border-stone-800 px-6 pb-20 pt-24 lg:px-12">
        <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-[600px] w-[500px] rounded-full bg-amber-500/5 blur-[140px]" />
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            El autor
          </p>
          <h1 className="mb-8 font-serif text-5xl font-light leading-tight md:text-6xl">
            Una vida poco ordinaria.
            <br />
            <span className="text-stone-500">Una historia por contar.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-stone-400">
            Detrás de <em className="text-stone-300">El Anillo de Salomón</em> hay
            un hombre que sobrevivió tres veces, trabajó décadas en silencio y
            encontró en la escritura lo que la lógica informática nunca pudo
            darle: un lugar donde las preguntas sin respuesta tienen cabida.
          </p>
        </div>
      </section>

      {/* ── LA HISTORIA ── */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.8fr]">

          {/* Foto */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative">
              <div className="absolute -inset-px border border-amber-500/15" />
              <div className="absolute -bottom-4 -right-4 h-full w-full border border-amber-500/8" />
              <img
                src="/images/author/miguel-secades.png"
                alt="Miguel Secades García"
                className="relative aspect-[4/5] w-full max-w-sm object-cover transition duration-700 hover:scale-[1.02] lg:max-w-none"
              />
            </div>
            {/* Dato destacado bajo la foto */}
            <div className="mt-8 border-l-2 border-amber-500/40 pl-5">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-500/70">
                Válvulas artificiales
              </p>
              <p className="mt-1 font-serif text-3xl font-light text-stone-300">2</p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-amber-500/70">
                Operaciones a corazón abierto
              </p>
              <p className="mt-1 font-serif text-3xl font-light text-stone-300">3</p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-amber-500/70">
                Novelas escritas
              </p>
              <p className="mt-1 font-serif text-3xl font-light text-stone-300">1</p>
              <p className="mt-1 text-xs text-stone-600">De momento.</p>
            </div>
          </div>

          {/* Texto largo */}
          <div className="space-y-8 text-base leading-relaxed text-stone-300">
            <p>
              Miguel Secades García nació en Cornellana, un pequeño pueblo de
              Salas, Asturias, el 14 de febrero de 1980. Llegó al mundo con el
              corazón enfermo — una condición que marcaría su vida entera, no
              como un lastre, sino como una lente particular con la que ver cada
              día.
            </p>
            <p>
              Con dos años fue operado por primera vez, a vida o muerte. 
              A los trece, una segunda intervención le implantó la válvula aórtica
              que desde entonces marca el tiempo dentro de su pecho con un ritmo
              mecánico, preciso, inapelable. A los treinta y cuatro años, una
              tercera operación añadió la válvula mitral. Tres veces en el
              quirófano. Tres veces de vuelta.
            </p>
            <p>
              En paralelo a todo eso, construyó una vida profesional en el sector
              informático — un mundo de sistemas, lógica y soluciones. Un mundo
              que conoce bien y al que le debe mucho, pero que nunca fue del todo
              el suyo. A los treinta y seis años, la jubilación anticipada cerró
              ese capítulo de golpe.
            </p>

            <blockquote className="border-l-2 border-amber-500 py-1 pl-8">
              <p className="font-serif text-xl font-light italic text-stone-200">
                "Empecé a escribir para llenar el tiempo.
                Terminé haciéndolo para llenar algo más difícil de nombrar."
              </p>
              <cite className="mt-3 block text-sm text-stone-500 not-italic">
                — Miguel Secades
              </cite>
            </blockquote>

            <p>
              Fue entonces cuando empezó a escribir. Casi sin pretenderlo, casi
              como quien empieza a ordenar cajas y descubre que hay cosas dentro
              que no sabía que tenía. <em>El Anillo de Salomón</em> nació de esa
              necesidad — de la fascinación acumulada por la historia antigua,
              los símbolos, las preguntas que ninguna civilización ha conseguido
              cerrar del todo.
            </p>
            <p>
              El manuscrito quedó aparcado durante años, como se aparca
              cualquier cosa que da vértigo terminar. Hasta que en 2025 lo
              retomó. Y esta vez sí: lo terminó. En 2026, su primera novela
              vio la luz.
            </p>
            <p className="text-stone-400">
              Miguel vive en Asturias. Tiene el corazón más mecánico que el de
              la mayoría, y sin embargo late con más determinación que nunca.
            </p>
          </div>
        </div>
      </section>

      {/* ── LÍNEA DE TIEMPO ── */}
      <section className="border-t border-stone-800 bg-[#0a0a0a] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-12 text-sm uppercase tracking-[0.35em] text-amber-500">
            Cronología
          </p>
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-[7px] top-2 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent" />

            {timeline.map((item) => (
              <div key={item.year} className="relative flex gap-8 pb-10 pl-8">
                <div className="absolute left-0 top-[6px] h-[15px] w-[15px] rounded-full border border-amber-500/60 bg-[#0a0a0a]">
                  <div className="absolute inset-[3px] rounded-full bg-amber-500/70" />
                </div>
                <div>
                  <span className="mb-0.5 block text-xs uppercase tracking-[0.25em] text-amber-500/80">
                    {item.year}
                  </span>
                  <p className="mb-1 text-sm font-medium text-stone-200">
                    {item.title}
                  </p>
                  <p className="text-sm text-stone-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRENSA ── */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="border border-stone-800 bg-[#0d0d0d] p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-amber-500">
              Prensa y medios
            </p>
            <p className="mb-5 text-sm leading-relaxed text-stone-400">
              ¿Eres periodista, blogger o trabajas en medios? En la sala de
              prensa encontrarás biografías en dos versiones, portada en alta
              resolución, foto del autor y ficha completa del libro, todo listo
              para descargar y usar sin necesidad de solicitarlo.
            </p>
            <a
              href="/press"
              className="inline-block text-xs uppercase tracking-[0.2em] text-amber-500 transition hover:text-amber-400"
            >
              Ir a la sala de prensa →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-stone-800 bg-[#0a0a0a] px-6 py-14 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl text-stone-300">
            ¿Quieres conocer la novela?
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/books"
              className="border border-amber-500 bg-amber-600 px-7 py-3 text-xs uppercase tracking-[0.15em] text-white transition hover:bg-amber-500"
            >
              El Anillo de Salomón
            </Link>
            <Link
              href="/contact"
              className="border border-stone-700 px-7 py-3 text-xs uppercase tracking-[0.15em] text-stone-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
