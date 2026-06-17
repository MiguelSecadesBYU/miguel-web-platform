import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#070707] px-6 text-white">

      {/* Número 404 decorativo */}
      <p className="mb-2 font-serif text-[8rem] font-light leading-none text-stone-800 sm:text-[12rem]">
        404
      </p>

      {/* Mensaje principal */}
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-amber-500">
        Página no encontrada
      </p>
      <h1 className="mb-6 text-center font-serif text-3xl font-light leading-tight text-stone-100 sm:text-4xl">
        Este secreto no existe.
        <span className="block text-stone-500">O quizás fue ocultado.</span>
      </h1>
      <p className="mb-12 max-w-md text-center text-sm leading-relaxed text-stone-500">
        La página que buscas no está aquí. Puede que la URL sea incorrecta
        o que el contenido haya sido movido. Lo que sí existe está justo debajo.
      </p>

      {/* Enlaces directos */}
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="border border-amber-500/80 px-7 py-3 text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
        >
          Volver al inicio
        </Link>
        <Link
          href="/books"
          className="border border-stone-700 px-7 py-3 text-xs uppercase tracking-[0.18em] text-stone-400 transition hover:border-stone-500 hover:text-stone-300"
        >
          El Anillo de Salomón
        </Link>
        <Link
          href="/blog"
          className="border border-stone-700 px-7 py-3 text-xs uppercase tracking-[0.18em] text-stone-400 transition hover:border-stone-500 hover:text-stone-300"
        >
          Tras las páginas
        </Link>
      </div>

    </main>
  );
}
