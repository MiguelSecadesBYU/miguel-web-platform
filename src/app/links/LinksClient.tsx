"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Enlaces destacados del hub.
 * Para volver a añadir el evento de Librería Central cuando esté confirmado,
 * añade un objeto aquí con `highlight: true`, p. ej.:
 * {
 *   label: "Presentación · Librería Central",
 *   sub: "Oviedo — [fecha], guarda la fecha",
 *   href: "/eventos/libreria-central",
 *   external: false,
 *   icon: "calendar",
 *   highlight: true,
 * },
 */
const LINKS: {
  label: string;
  sub: string;
  href: string;
  external: boolean;
  icon: "book" | "play" | "instagram" | "tiktok" | "info";
  highlight?: boolean;
}[] = [
  {
    label: "Comprar el libro",
    sub: "Amazon · tapa blanda y Kindle Unlimited",
    href: "https://www.amazon.es/dp/B0GZVQL88V",
    external: true,
    icon: "book",
  },
  {
    label: "Ver el booktrailer",
    sub: "55 segundos",
    href: "#", // TODO: sustituir por la URL real del booktrailer
    external: true,
    icon: "play",
  },
  {
    label: "Seguir en Instagram",
    sub: "Detrás del libro y del proceso",
    href: "https://www.instagram.com/miguelsecades/",
    external: true,
    icon: "instagram",
  },
  {
    label: "Seguir en TikTok",
    sub: "@msecadestk",
    href: "https://www.tiktok.com/@msecadestk",
    external: true,
    icon: "tiktok",
  },
  {
    label: "Sobre el libro",
    sub: "Sinopsis, reseñas y ficha completa",
    href: "/books",
    external: false,
    icon: "info",
  },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };
  switch (name) {
    case "book":
      return (
        <svg {...common}>
          <path d="M6 3h9a2 2 0 0 1 2 2v16l-6.5-3.5L4 21V5a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <polygon points="10 8 16 12 10 16 10 8" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M16 4c.4 2.2 1.9 3.6 4 3.9v2.9c-1.5.1-2.9-.3-4-1.1v5.6a5.2 5.2 0 1 1-4.5-5.2v3a2.3 2.3 0 1 0 1.7 2.2V4h2.8Z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="15" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
          <path d="M4 19a2.5 2.5 0 0 1 2.5-2.5H20" />
        </svg>
      );
  }
}

function LinkRow({ item }: { item: (typeof LINKS)[number] }) {
  const classes = `group flex items-center gap-4 border px-4 py-3.5 transition ${
    item.highlight
      ? "border-amber-500/50 bg-amber-500/[0.06] hover:border-amber-500"
      : "border-stone-800 bg-[#111111] hover:border-amber-500/60"
  }`;

  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-800 bg-black/30 text-amber-500">
        <Icon name={item.icon} className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-stone-100">{item.label}</span>
        <span className="block text-xs text-stone-500">{item.sub}</span>
      </span>
      <svg
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round"
        className="h-3.5 w-3.5 shrink-0 text-stone-600 transition group-hover:text-amber-500 group-hover:translate-x-0.5"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </>
  );

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={item.href} className={classes}>
      {content}
    </Link>
  );
}

export default function LinksClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Ha ocurrido un error. Inténtalo de nuevo.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Ha ocurrido un error. Inténtalo de nuevo.");
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <div className="pointer-events-none fixed -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[140px]" />

      <section className="mx-auto flex min-h-screen max-w-md flex-col px-6 py-16">
        {/* Cabecera */}
        <p className="mb-5 text-center text-[11px] uppercase tracking-[0.3em] text-stone-500">
          Autor · Gijón, Asturias
        </p>

        <div className="mb-5 flex justify-center text-amber-500">
          <svg viewBox="0 0 100 100" className="h-16 w-16" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="47" strokeWidth="1" />
            <polygon points="50,18 78,66 22,66" strokeWidth="1.1" />
            <polygon points="50,82 22,34 78,34" strokeWidth="1.1" />
            <circle cx="50" cy="50" r="2.8" fill="currentColor" stroke="none" />
          </svg>
        </div>

        <h1 className="mb-2 text-center font-serif text-3xl font-light">Miguel Secades</h1>
        <p className="mb-10 text-center text-sm leading-relaxed text-stone-400">
          Autor de <em className="not-italic text-amber-500">El Anillo de Salomón</em>
          <br />
          Thriller arqueológico-esotérico
        </p>

        {/* CTA principal: capítulo gratis */}
        <div className="mb-10 border border-stone-800 bg-black/30 p-6">
          <p className="mb-3 text-center text-[11px] uppercase tracking-[0.25em] text-amber-500">
            Regalo para lectores
          </p>
          <h2 className="mb-2 text-center font-serif text-xl font-light text-stone-100">
            Llévate el primer capítulo gratis
          </h2>
          <p className="mb-6 text-center text-xs text-stone-500">
            Directo a tu correo, en menos de un minuto.
          </p>

          {status === "success" ? (
            <div className="border border-amber-500/30 bg-amber-500/5 p-6 text-center">
              <p className="mb-1 font-serif text-lg font-light text-stone-100">¡Bienvenido a bordo!</p>
              <p className="text-xs text-stone-400">Revisa tu correo: el capítulo está de camino.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              <input
                type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre" required
                className="w-full border border-stone-800 bg-[#111111] px-4 py-3 text-sm text-stone-200 placeholder-stone-700 outline-none transition focus:border-amber-500/60"
              />
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com" required
                className="w-full border border-stone-800 bg-[#111111] px-4 py-3 text-sm text-stone-200 placeholder-stone-700 outline-none transition focus:border-amber-500/60"
              />

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox" id="links-privacy-accept" checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 cursor-pointer accent-amber-500"
                />
                <label htmlFor="links-privacy-accept" className="cursor-pointer text-[11px] leading-relaxed text-stone-600">
                  Acepto la{" "}
                  <Link href="/privacy" target="_blank" className="text-amber-500/80 underline underline-offset-2 hover:text-amber-400">
                    Política de Privacidad
                  </Link>{" "}
                  y el envío de comunicaciones sobre la actividad literaria de Miguel Secades.
                </label>
              </div>

              {status === "error" && <p className="text-xs text-red-400">{errorMsg}</p>}

              <button
                type="submit" disabled={status === "loading" || !accepted}
                className="w-full border border-amber-500/80 px-6 py-3 text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                {status === "loading" ? "Enviando..." : "Quiero leerlo"}
              </button>

              <p className="text-center text-[10px] text-stone-700">
                Sin spam. Te aviso antes que a nadie cuando publique <em className="not-italic">El Último Harúspice</em>.
              </p>
            </form>
          )}
        </div>

        {/* Divisor */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-stone-800" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-600">Más enlaces</span>
          <span className="h-px flex-1 bg-stone-800" />
        </div>

        {/* Enlaces */}
        <div className="mb-12 space-y-2.5">
          {LINKS.map((item) => (
            <LinkRow key={item.label} item={item} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-auto text-center">
          <div className="mb-4 flex justify-center gap-4">
            {[
              { href: "https://www.tiktok.com/@msecadestk", icon: "tiktok" as const, label: "TikTok" },
              { href: "https://www.instagram.com/miguelsecades/", icon: "instagram" as const, label: "Instagram" },
              { href: "https://x.com/MSecadesOficial", icon: "info" as const, label: "X / Twitter" },
            ].map((s) => (
              <a
                key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 text-stone-500 transition hover:border-amber-500/60 hover:text-amber-500"
              >
                <Icon name={s.icon} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <p className="text-[11px] text-stone-700">© Miguel Secades — miguelsecades.com</p>
        </footer>
      </section>
    </main>
  );
}
