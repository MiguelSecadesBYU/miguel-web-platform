import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-black text-white sm:min-h-[calc(100vh-88px)]"
      style={{
        backgroundImage: "url('/images/hero/hero-book.png')",
        backgroundSize: "contain",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      {/* Overlay cinematográfico — más oscuro en móvil para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60 sm:via-black/80 sm:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-black/20 sm:bg-black/10" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-16 sm:min-h-[calc(100vh-88px)] sm:py-0 lg:px-12">
        <div className="w-full max-w-xl">

          <h1 className="mb-6 font-serif text-4xl font-light leading-[1.05] text-white sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
            Algunos secretos
            <span className="block">nunca deberían</span>
            <span className="block text-amber-400">ser descubiertos.</span>
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-stone-300 sm:mb-10 sm:text-lg">
            Un anillo antiguo. Una verdad prohibida. Una carrera a través de
            Jerusalén, Babilonia y Axum para desenterrar un misterio oculto
            durante siglos.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/books"
              className="w-full border border-amber-500 bg-amber-600 px-8 py-4 text-center text-sm uppercase tracking-[0.15em] text-white shadow-lg shadow-amber-500/20 transition duration-300 hover:bg-amber-500 sm:w-fit"
            >
              Descubrir la novela
            </Link>
            <Link
              href="/about"
              className="w-full border border-stone-600 px-8 py-4 text-center text-sm uppercase tracking-[0.15em] text-white transition duration-300 hover:border-amber-400 hover:text-amber-400 sm:w-fit"
            >
              Sobre el autor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
