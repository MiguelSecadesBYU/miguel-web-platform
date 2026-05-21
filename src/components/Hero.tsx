import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-black text-white">
      {/* Hero image */}
      <Image
        src="/images/hero/hero-book.png"
        alt="El Anillo de Salomón book mockup"
        fill
        priority
        className="object-contain object-[88%_center] opacity-100 scale-110"
      />

      {/* Darkness focused mainly on the text area */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-transparent" />

      {/* Very soft global overlay */}
      <div className="absolute inset-0 bg-black/0" />

      {/* Subtle golden glow around the book */}
      <div className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-l from-amber-500/15 via-amber-400/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-amber-500">
            Archaeological Thriller Novel
          </p>

          {/* Decorative line */}
          <div className="mb-7 flex items-center gap-4">
            <div className="h-px w-24 bg-amber-500/70" />
            <span className="text-amber-500">✦</span>
            <div className="h-px w-24 bg-amber-500/70" />
          </div>

          <h1
            className="mb-8 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "serif" }}
          >
            Some secrets were
            <span className="block">buried</span>
            <span className="block text-amber-400">for a reason.</span>
          </h1>

          <p className="mb-10 max-w-lg text-base leading-relaxed text-gray-200 md:text-lg">
            An ancient ring. A forbidden truth. A race across Jerusalem,
            Babylon, and Axum to uncover a mystery that should never have
            been revealed.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/books"
              className="w-fit border border-amber-500 bg-amber-600 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white shadow-lg shadow-amber-500/30 transition duration-300 hover:bg-amber-500"
            >
              Discover the Novel
            </Link>

            <Link
              href="/about"
              className="w-fit border border-gray-500 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              Meet the Author
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}