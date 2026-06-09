import Link from "next/link";

export default function AboutAuthor() {
  return (
    <section className="bg-[#070707] px-6 py-16 text-white sm:py-20 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

        {/* AUTHOR IMAGE */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-none">
          <div className="overflow-hidden border border-stone-800 bg-black">
            <img
              src="/images/author/miguel-secades.png"
              alt="Miguel Secades"
              className="aspect-[4/5] w-full object-cover grayscale-[15%] transition duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* AUTHOR CONTENT */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Sobre el autor
          </p>

          <h2 className="mb-6 font-serif text-3xl font-light leading-tight sm:mb-8 sm:text-4xl md:text-5xl">
            Historias nacidas de la historia, el misterio y las verdades olvidadas.
          </h2>

          <p className="mb-5 text-base leading-relaxed text-stone-300 sm:mb-6 sm:text-lg">
            Miguel Secades es un autor español de thriller arqueológico apasionado
            por los misterios antiguos, la arqueología y las preguntas ocultas
            que han acompañado a la humanidad a lo largo de los siglos.
          </p>

          <p className="mb-5 text-base leading-relaxed text-stone-400 sm:mb-6 sm:text-lg">
            Tras una trayectoria vinculada al ámbito tecnológico, decidió dar
            el salto a la escritura, combinando investigación, narrativa visual
            y ritmo cinematográfico para crear aventuras contemporáneas
            profundamente conectadas con la historia.
          </p>

          <p className="mb-8 text-base leading-relaxed text-stone-400 sm:mb-10 sm:text-lg">
            <em>El Anillo de Salomón</em> es su primera novela y el inicio de
            una saga donde sociedades secretas, símbolos antiguos y conocimientos
            prohibidos colisionan en el mundo moderno.
          </p>

          <Link
            href="/about"
            className="inline-block border border-amber-500 px-8 py-4 text-sm uppercase tracking-[0.15em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
          >
            Leer mi historia
          </Link>
        </div>
      </div>
    </section>
  );
}
