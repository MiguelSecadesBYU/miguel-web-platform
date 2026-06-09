"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Libros", href: "/books" },
  { label: "Tras las páginas", href: "/blog" },
  { label: "Autor", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar menú al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-800 bg-[#111111]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <Link href="/" className="group">
            <span className="font-serif text-xl font-light tracking-[0.22em] text-stone-100 transition group-hover:text-amber-400 sm:text-2xl">
              MIGUEL SECADES
            </span>
          </Link>

          {/* Links desktop */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm uppercase tracking-[0.15em] transition ${
                  pathname === link.href
                    ? "text-amber-400"
                    : "text-stone-400 hover:text-stone-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Newsletter desktop + hamburguesa móvil */}
          <div className="flex items-center gap-4">
            <Link
              href="/newsletter"
              className="hidden border border-amber-500/80 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black md:block"
            >
              Newsletter
            </Link>

            {/* Botón hamburguesa */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span
                className={`block h-px w-6 bg-stone-300 transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-stone-300 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-stone-300 transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Menú móvil — overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menú móvil — panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-[#111111] transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabecera del panel */}
        <div className="flex items-center justify-between border-b border-stone-800 px-6 py-5">
          <span className="font-serif text-lg font-light tracking-[0.2em] text-stone-300">
            MENÚ
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            className="flex h-9 w-9 items-center justify-center text-stone-500 transition hover:text-stone-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links de navegación */}
        <nav className="flex flex-col px-6 py-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b border-stone-800/60 py-4 font-serif text-xl font-light transition ${
                pathname === link.href
                  ? "text-amber-400"
                  : "text-stone-300 hover:text-amber-400"
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Newsletter CTA en móvil */}
        <div className="mt-auto border-t border-stone-800 px-6 py-8">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-600">
            Newsletter
          </p>
          <Link
            href="/newsletter"
            className="block border border-amber-500/80 px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
          >
            Suscribirme
          </Link>
        </div>
      </div>
    </>
  );
}
