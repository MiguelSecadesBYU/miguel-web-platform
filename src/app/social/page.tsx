import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sígueme en redes",
  description:
    "Sigue a Miguel Secades en TikTok, Instagram y X. Autor de El Anillo de Salomón.",
};

const socials = [
  {
    name: "TikTok",
    handle: "@msecadestk",
    url: "https://www.tiktok.com/@msecadestk",
    followers: "111K seguidores",
    description: "Vídeos sobre misterios históricos, la novela y el proceso de escritura.",
    color: "#ffffff",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@miguelsecades",
    url: "https://www.instagram.com/miguelsecades/",
    followers: "",
    description: "Fotos, historias y novedades sobre El Anillo de Salomón.",
    color: "#E1306C",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "X",
    handle: "@MSecadesOficial",
    url: "https://x.com/MSecadesOficial",
    followers: "",
    description: "Opiniones, reflexiones y lo que no cabe en ningún otro lado.",
    color: "#ffffff",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function SocialPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#070707] px-5 py-16 text-white">

      {/* Foto de perfil */}
      <div className="mb-6 relative">
        <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
          <img
            src="/images/author/miguel-secades.png"
            alt="Miguel Secades"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Nombre y descripción */}
      <h1 className="mb-1 font-serif text-2xl font-light tracking-wide text-stone-100">
        Miguel Secades
      </h1>
      <p className="mb-2 text-sm text-amber-500 tracking-wide">
        Autor · El Anillo de Salomón
      </p>
      <p className="mb-10 max-w-xs text-center text-sm leading-relaxed text-stone-500">
        Thriller arqueológico. Misterios históricos. Sociedades secretas.
      </p>

      {/* Tarjetas de RRSS */}
      <div className="w-full max-w-sm space-y-3">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-stone-800 bg-stone-900/60 px-5 py-4 transition active:scale-[0.98] hover:border-amber-500/40 hover:bg-stone-900"
          >
            {/* Icono */}
            <span className="shrink-0 text-stone-300">
              {s.icon}
            </span>

            {/* Texto */}
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-medium text-stone-100">{s.name}</span>
                {s.followers && (
                  <span className="text-xs text-amber-500">{s.followers}</span>
                )}
              </div>
              <span className="block truncate text-sm text-stone-500">{s.handle}</span>
            </div>

            {/* Flecha */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-stone-600">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </a>
        ))}

        {/* Botón Amazon */}
        <a
          href="https://www.amazon.es/dp/B0H14NRP92"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 border border-amber-500/80 bg-amber-600/10 px-5 py-4 text-center transition hover:bg-amber-500/20 active:scale-[0.98]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-amber-400">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          <div>
            <span className="block text-xs uppercase tracking-[0.15em] text-amber-500">Comprar la novela</span>
            <span className="block text-sm font-light text-stone-300">El Anillo de Salomón</span>
          </div>
        </a>
      </div>

      {/* Web */}
      <p className="mt-10 text-xs text-stone-700 tracking-widest uppercase">
        miguelsecades.com
      </p>

    </main>
  );
}
