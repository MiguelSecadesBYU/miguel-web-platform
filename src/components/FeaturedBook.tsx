import Link from "next/link";

export default function FeaturedBook() {
  return (
    <section className="bg-[#080808] px-6 py-24 text-white lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500">
            Featured Novel
          </p>

          <h2
            className="mb-6 text-4xl font-light leading-tight md:text-5xl"
            style={{ fontFamily: "serif" }}
          >
            El Anillo de Salomón
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-stone-300">
            An ancient papyrus found in the Near East leads archaeologist
            Álvaro Ballester to the trail of a legendary object: the Ring of
            Solomon, said to reveal forbidden secrets and command hidden powers.
          </p>

          <p className="mb-10 text-base leading-relaxed text-stone-400">
            From Madrid to Jerusalem, from Babylon to Axum, every clue brings
            Ballester and Daniela Gil closer to a truth that perhaps should
            never have come to light.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/books"
              className="w-fit border border-amber-500 bg-amber-600 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition hover:bg-amber-500"
            >
              Learn More
            </Link>

            <Link
              href="/contact"
              className="w-fit border border-stone-600 px-8 py-4 text-sm uppercase tracking-[0.15em] text-stone-200 transition hover:border-amber-400 hover:text-amber-400"
            >
              Press Contact
            </Link>
          </div>
        </div>

        <div className="rounded-sm border border-stone-800 bg-black/40 p-8">
          <div className="space-y-5 text-sm text-stone-300">
            <div>
              <span className="text-amber-500">Genre:</span> Archaeological Thriller
            </div>
            <div>
              <span className="text-amber-500">Themes:</span> Ancient mysteries, secret societies, forbidden knowledge
            </div>
            <div>
              <span className="text-amber-500">Locations:</span> Madrid, Jerusalem, Babylon, Axum
            </div>
            <div>
              <span className="text-amber-500">Status:</span> Available / Author Platform in Development
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}