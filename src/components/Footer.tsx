import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-[#090909] text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <h2 className="mb-4 font-serif text-2xl font-light tracking-[0.18em] text-stone-100">
            MIGUEL SECADES
          </h2>

          <p className="mb-6 text-sm leading-7 text-stone-400">
            Autor de thriller arqueológico inspirado en misterios,
            historia antigua, sociedades secretas y verdades olvidadas.
          </p>

          <div className="flex gap-3">
            <div className="h-9 w-9 border border-stone-700 transition hover:border-amber-500"></div>
            <div className="h-9 w-9 border border-stone-700 transition hover:border-amber-500"></div>
            <div className="h-9 w-9 border border-stone-700 transition hover:border-amber-500"></div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Navegación
          </h3>

          <ul className="space-y-3 text-sm text-stone-400">
            <li>
              <Link className="transition hover:text-amber-400" href="/">
                Inicio
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-amber-400" href="/books">
                Libros
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-amber-400" href="/blog">
                Blog
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-amber-400" href="/about">
                Autor
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-amber-400" href="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* BOOKS */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Libros
          </h3>

          <ul className="space-y-3 text-sm text-stone-400">
            <li>El Anillo de Salomón</li>
            <li>Próximos lanzamientos</li>
            <li>Orden de lectura</li>
            <li>Contenido exclusivo</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Newsletter
          </h3>

          <p className="mb-4 text-sm leading-7 text-stone-400">
            Recibe novedades, contenido exclusivo y acceso anticipado
            a futuros proyectos y publicaciones.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="border border-stone-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-amber-500"
            />

            <button
              className="border border-amber-500 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs tracking-wide text-stone-500 md:flex-row">
          
          <p>
            © 2026 Miguel Secades. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <Link
              href="/"
              className="transition hover:text-amber-400"
            >
              Política de privacidad
            </Link>

            <Link
              href="/"
              className="transition hover:text-amber-400"
            >
              Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}