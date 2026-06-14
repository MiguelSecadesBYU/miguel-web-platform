import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "El Anillo de Salomón | Thriller arqueológico de Miguel Secades",
  description:
    "El Anillo de Salomón, de Miguel Secades García. Thriller arqueológico disponible en Amazon en ebook y tapa blanda. Para lectores de Dan Brown, Javier Sierra y Steve Berry.",
};

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-6 py-12 text-white sm:py-14 lg:px-12">
      <section className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

        {/* PORTADA */}
        <div className="flex justify-center lg:-translate-y-6">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <div className="absolute inset-0 -z-10 rounded-full bg-amber-500/10 blur-3xl" />
            <img
              src="/images/books/anillo-salomon-mockup.png"
              alt="El Anillo de Salomón"
              className="w-full object-contain drop-shadow-[0_35px_80px_rgba(245,158,11,0.22)] lg:max-h-[760px]"
            />
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="w-full">

          {/* Etiqueta de género con comparación */}
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Thriller arqueológico
          </p>

          <h1 className="mb-4 font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            El Anillo de Salomón
          </h1>

          {/* Frase de comparación — clave para conversión */}
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-stone-600">
            Para lectores de Dan Brown, Javier Sierra y Matilde Asensi
          </p>

          {/* Hook emocional — nueva frase más impactante */}
          <p className="mb-6 text-lg leading-relaxed text-stone-300 sm:mb-8 sm:text-xl">
            Un thriller arqueológico trepidante donde la historia más antigua
            del mundo se convierte en la amenaza más peligrosa del presente.
          </p>

          {/* Sinopsis con tensión narrativa mejorada */}
          <div className="mb-8 space-y-4 border-l border-amber-500/40 pl-5 text-stone-400 sm:mb-10 sm:pl-6">
            <p>
              Un antiguo papiro hallado en Oriente Próximo revela la pista de
              un objeto que no debería existir: el Anillo de Salomón, capaz
              —según los textos— de doblegar la voluntad de los espíritus y
              revelar los secretos del universo.
            </p>
            <p>
              El arqueólogo Álvaro Ballester y Daniela Gil se lanzan a una
              carrera contrarreloj desde Madrid hasta Jerusalén,
              las ruinas de Babilonia y la mítica Axum. Cada descubrimiento los
              acerca a una verdad que alguien lleva siglos ocultando.
            </p>
            <p className="font-medium text-stone-300">
              Pero no son los únicos tras el anillo. <br />
              Y quienes lo desean no están dispuestos a compartirlo.
            </p>
          </div>

          {/* FICHA TÉCNICA */}
          <div className="mb-8 grid grid-cols-2 gap-4 border-b border-t border-stone-800 py-5 sm:gap-6 sm:py-6">
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.25em] text-amber-500">Género</p>
              <p className="text-sm text-stone-300 sm:text-base">Thriller arqueológico</p>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.25em] text-amber-500">Escenarios</p>
              <p className="text-sm text-stone-300 sm:text-base">Madrid · Jerusalén · Babilonia · Axum</p>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.25em] text-amber-500">Formatos</p>
              <p className="text-sm text-stone-300 sm:text-base">Ebook · Tapa blanda</p>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.25em] text-amber-500">ISBN</p>
              <p className="font-mono text-xs text-stone-300 sm:text-sm">979-8195869403</p>
            </div>
          </div>

          {/* BOTONES DE COMPRA — con más urgencia */}
          <div className="mb-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-500">
              Disponible ahora en Amazon
            </p>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row">
              <a
                href="https://www.amazon.es/dp/B0H14NRP92"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center border border-amber-500/80 px-4 py-4 text-center text-amber-400 transition hover:bg-amber-500 hover:text-black sm:px-7"
              >
                <span className="mb-1 text-xs uppercase tracking-[0.2em] opacity-70">Comprar</span>
                <span className="text-xs uppercase tracking-[0.15em] sm:text-sm">Tapa blanda</span>
              </a>
              <a
                href="https://www.amazon.es/dp/B0GZVQL88V"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center border border-amber-500/80 px-4 py-4 text-center text-amber-400 transition hover:bg-amber-500 hover:text-black sm:px-7"
              >
                <span className="mb-1 text-xs uppercase tracking-[0.2em] opacity-70">Comprar</span>
                <span className="text-xs uppercase tracking-[0.15em] sm:text-sm">Ebook Kindle</span>
              </a>
            </div>
          </div>

          {/* Extracto real de la novela */}
          <div className="mb-6 border border-stone-800 bg-black/30 p-5">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-amber-500">
              Del interior de la novela
            </p>
            <div className="space-y-3 font-serif text-base italic leading-relaxed text-stone-400">
              <p>
                «Un hombre de mediana estatura, muy delgado, ataviado con una
                larga gabardina y la capucha puesta —a quien apenas se le podía
                distinguir el rostro entre las sombras— se sentó a su derecha.
              </p>
              <p>
                —Se nos está terminando el tiempo —dijo el hombre en un perfecto
                francés—. Has de encontrarlo rápido, porque de lo contrario las
                consecuencias pueden ser fatales.
              </p>
              <p>
                —Por supuesto, serenissimo imperator. Ya estoy trabajando en ello.
              </p>
              <p>
                —¡No me falles! —sentenció el hombre con voz firme y grave—.{" "}
                <span className="text-stone-200 not-italic font-medium">
                  El Supremo Consejo exige resultados ya. Haz todo lo que sea
                  necesario. Sea lo que sea.
                </span>
              </p>
              <p>
                Sin mediar más palabras, el hombre se levantó del banco y se
                alejó tan sigilosamente como había llegado.»
              </p>
            </div>
          </div>

          {/* BOTONES SECUNDARIOS */}
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row">
            <Link
              href="/blog"
              className="border border-stone-700 px-4 py-3 text-center text-xs uppercase tracking-[0.12em] text-stone-400 transition hover:border-stone-500 hover:text-stone-300 sm:px-7"
            >
              Tras las páginas
            </Link>
            <Link
              href="/contact"
              className="border border-stone-700 px-4 py-3 text-center text-xs uppercase tracking-[0.12em] text-stone-400 transition hover:border-stone-500 hover:text-stone-300 sm:px-7"
            >
              Contacto
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
