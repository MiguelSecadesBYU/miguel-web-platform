import Link from "next/link";

export default function AboutAuthor() {
  return (
    <section className="bg-[#070707] px-6 py-28 text-white lg:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-20 lg:grid-cols-[0.75fr_1.25fr]">
        
        {/* AUTHOR IMAGE */}
        <div className="relative">
          <div className="overflow-hidden border border-stone-800 bg-black">
            <img
              src="/images/author/miguel-secades.png"
              alt="Miguel Secades"
              className="aspect-[4/5] max-h-[700px] w-full object-cover grayscale-[15%] transition duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* AUTHOR CONTENT */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            About the Author
          </p>

          <h2 className="mb-8 font-serif text-4xl font-light leading-tight md:text-5xl">
            Stories born from history, mystery, and forgotten truths.
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-stone-300">
            Miguel Secades is a Spanish thriller author passionate about ancient
            mysteries, archaeology, and the hidden questions that have followed
            humanity through the centuries.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-stone-400">
            After a professional background connected to technology, he turned
            to writing, combining research, visual storytelling, and cinematic
            pacing to create contemporary adventures rooted in history.
          </p>

          <p className="mb-10 text-lg leading-relaxed text-stone-400">
            <em>El Anillo de Salomón</em> is his debut novel and the beginning
            of a saga where secret societies, ancient symbols, and forbidden
            knowledge collide in the modern world.
          </p>

          <Link
            href="/about"
            className="inline-block border border-amber-500 px-8 py-4 text-sm uppercase tracking-[0.15em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
          >
            Read My Story
          </Link>
        </div>
      </div>
    </section>
  );
}