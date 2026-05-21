import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-black text-white"
      style={{
        backgroundImage: "url('/images/hero/hero-book.png')",
        backgroundSize: "contain",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      {/* Overlay cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Profundidad inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-xl">
          <h1
            className="mb-8 text-5xl font-light leading-[1.05] text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: "serif" }}
          >
            Some secrets
            <span className="block">should never</span>
            <span className="block text-amber-400">be uncovered.</span>
          </h1>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-200">
            An ancient ring. A forbidden truth. A race across Jerusalem,
            Babylon, and Axum to uncover a mystery buried for centuries.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/books"
              className="w-fit border border-amber-500 bg-amber-600 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white shadow-lg shadow-amber-500/20 transition duration-300 hover:bg-amber-500"
            >
              Discover the Novel
            </Link>

            <Link
              href="/about"
              className="w-fit border border-gray-600 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              Meet the Author
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}