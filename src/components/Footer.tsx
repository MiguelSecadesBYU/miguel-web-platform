import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/miguelsecades/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/MSecadesOficial",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@msecadestk",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

// Coloca los dos archivos de imagen que ya tienes en /public/logos/
// (aea.png y cedro.jpg) — o cambia estas rutas si prefieres otros nombres.
const trustLogos = [
  {
    label: "Asociación de Escritores de Asturias",
    href: "https://www.escritoresdeasturias.es/", 
    src: "/logos/aea.png",
    width: 140,
    height: 30,
    card: false, 
  },
  {
    label: "CEDRO",
    href: "https://www.cedro.org",
    src: "/logos/cedro.jpg",
    width: 90,
    height: 38,
    card: true, // el JPG tiene fondo gris claro sólido, necesita tarjeta clara para no chocar
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-[#090909] text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <Link href="/">
            <h2 className="mb-4 font-serif text-2xl font-light tracking-[0.18em] text-stone-100 transition hover:text-amber-400">
              MIGUEL SECADES
            </h2>
          </Link>
          <p className="mb-6 text-sm leading-7 text-stone-400">
            Autor de thriller arqueológico inspirado en misterios,
            historia antigua, sociedades secretas y verdades olvidadas.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center border border-stone-700 text-stone-500 transition hover:border-amber-500 hover:text-amber-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Navegación
          </h3>
          <ul className="space-y-3 text-sm text-stone-400">
            {[
              { label: "Inicio", href: "/" },
              { label: "Libros", href: "/books" },
              { label: "Tras las páginas", href: "/blog" },
              { label: "Autor", href: "/about" },
              { label: "Contacto", href: "/contact" },
              { label: "Prensa", href: "/press" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-amber-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* EL LIBRO */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            El libro
          </h3>
          <p className="mb-5 font-serif text-base font-light leading-snug text-stone-300">
            El Anillo de Salomón
          </p>
          <p className="mb-6 text-sm leading-6 text-stone-500">
            Thriller arqueológico. Disponible en Amazon en ebook y tapa blanda.
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/books" className="text-stone-400 transition hover:text-amber-400">
                Ver ficha del libro →
              </Link>
            </li>
            <li>
              <a href="https://www.amazon.es/dp/B0H14NRP92" target="_blank" rel="noopener noreferrer"
                className="text-stone-400 transition hover:text-amber-400">
                Comprar tapa blanda →
              </a>
            </li>
            <li>
              <a href="https://www.amazon.es/dp/B0GZVQL88V" target="_blank" rel="noopener noreferrer"
                className="text-stone-400 transition hover:text-amber-400">
                Comprar ebook Kindle →
              </a>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Newsletter
          </h3>
          <p className="mb-6 text-sm leading-7 text-stone-400">
            Historias que no caben en las páginas. Novedades, artículos y
            contenido exclusivo sobre el universo de{" "}
            <em>El Anillo de Salomón</em>.
          </p>
          <Link
            href="/newsletter"
            className="inline-block border border-amber-500/80 px-5 py-3 text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
          >
            Suscribirme
          </Link>
        </div>
      </div>

      {/* TRUST LOGOS */}
      <div className="border-t border-stone-800">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="mb-6 text-center text-[11px] uppercase tracking-[0.3em] text-stone-600">
            Miembro de
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustLogos.map((logo) =>
              logo.card ? (
                <a
                  key={logo.label}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.label}
                  className="flex items-center bg-stone-100 px-4 py-2.5 opacity-80 transition hover:opacity-100"
                >
                  <Image src={logo.src} alt={logo.label} width={logo.width} height={logo.height} />
                </a>
              ) : (
                <a
                  key={logo.label}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.label}
                  className="flex items-center opacity-70 transition hover:opacity-100"
                >
                  <Image src={logo.src} alt={logo.label} width={logo.width} height={logo.height} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs tracking-wide text-stone-500 md:flex-row">
          <p>© 2026 Miguel Secades. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-amber-400">
              Política de privacidad
            </Link>
            <Link href="/terms" className="transition hover:text-amber-400">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
