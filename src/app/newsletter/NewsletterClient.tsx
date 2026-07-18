"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewsletterClient() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
      setEmail("");
      setName("");
      setAccepted(false);
    } catch {
      setErrorMsg("Ha ocurrido un error. Inténtalo de nuevo.");
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <div className="pointer-events-none fixed -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[140px]" />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <div className="w-full max-w-lg">

          <p className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-amber-500">
            Newsletter
          </p>
          <h1 className="mb-6 text-center font-serif text-4xl font-light leading-tight md:text-5xl">
            Historias que no caben en las páginas
          </h1>
          <p className="mb-6 text-center text-base leading-relaxed text-stone-400">
            Apúntate y recibe el <em className="text-stone-300">Archivo Ballester nº1</em>:
            el expediente con lo real y lo ficticio de{" "}
            <em className="text-stone-300">El Anillo de Salomón</em> — el Anillo, las
            Clavículas de Salomón, el Arca de la Alianza, y un mapa con la ruta
            completa de la investigación.
          </p>

          {/* Callout del incentivo */}
          <div className="mb-10 border border-stone-800 bg-black/30 p-5 text-center">
            <p className="mb-1 text-xs uppercase tracking-[0.2em] text-amber-500">
              Al suscribirte, recibes
            </p>
            <p className="font-serif text-lg font-light text-stone-200">
              El Archivo Ballester nº1
            </p>
            <p className="mt-2 text-xs leading-relaxed text-stone-500">
              Y después, solo cuando haya algo que merezca la pena contar: curiosidades
              históricas, el proceso de escritura, y noticias de{" "}
              <em className="text-stone-400">El Último Harúspice</em> antes que nadie.
              Sin spam.
            </p>
          </div>

          {status === "success" ? (
            <div className="border border-amber-500/30 bg-amber-500/5 p-10 text-center">
              <p className="mb-2 font-serif text-2xl font-light text-stone-200">
                ¡Bienvenido a bordo!
              </p>
              <p className="text-sm text-stone-400">
                Revisa tu correo: el Archivo Ballester está de camino.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">

              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone-500">
                  Nombre
                </label>
                <input
                  id="name" type="text" value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre" required
                  className="w-full border border-stone-800 bg-[#111111] px-5 py-4 text-sm text-stone-300 placeholder-stone-700 outline-none transition focus:border-amber-500/60"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone-500">
                  Email
                </label>
                <input
                  id="email" type="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com" required
                  className="w-full border border-stone-800 bg-[#111111] px-5 py-4 text-sm text-stone-300 placeholder-stone-700 outline-none transition focus:border-amber-500/60"
                />
              </div>

              {/* Checkbox RGPD */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="privacy-accept"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-amber-500"
                />
                <label
                  htmlFor="privacy-accept"
                  className="cursor-pointer text-xs leading-relaxed text-stone-500"
                >
                  He leído y acepto la{" "}
                  <Link
                    href="/privacy"
                    target="_blank"
                    className="text-amber-500/80 underline underline-offset-2 transition hover:text-amber-400"
                  >
                    Política de Privacidad
                  </Link>
                  . Consiento el tratamiento de mis datos para el envío de
                  comunicaciones sobre la actividad literaria de Miguel Secades
                  García. Puedo revocar este consentimiento en cualquier momento.
                </label>
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}

              {!accepted && (
                <p className="text-xs text-stone-600">
                  Debes aceptar la política de privacidad para suscribirte.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !accepted}
                className="w-full border border-amber-500/80 px-8 py-4 text-sm uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                {status === "loading" ? "Enviando..." : "Suscribirme"}
              </button>

              <p className="text-center text-xs text-stone-700">
                Sin spam. Puedes darte de baja cuando quieras.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
