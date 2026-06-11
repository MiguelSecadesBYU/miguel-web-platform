"use client";

import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    } catch {
      setErrorMsg("Ha ocurrido un error. Inténtalo de nuevo.");
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* Ambient glow */}
      <div className="pointer-events-none fixed -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[140px]" />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <div className="w-full max-w-lg">

          {/* Cabecera */}
          <p className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-amber-500">
            Newsletter
          </p>
          <h1 className="mb-6 text-center font-serif text-4xl font-light leading-tight md:text-5xl">
            Historias que no caben en las páginas
          </h1>
          <p className="mb-12 text-center text-base leading-relaxed text-stone-400">
            Apúntate para recibir novedades sobre <em className="text-stone-300">El Anillo de Salomón</em>,
            curiosidades históricas, el proceso de escritura y lo que viene después.
            Sin spam. Solo cuando haya algo que merezca la pena contar.
          </p>

          {/* Formulario */}
          {status === "success" ? (
            <div className="border border-amber-500/30 bg-amber-500/5 p-10 text-center">
              <p className="mb-2 font-serif text-2xl font-light text-stone-200">
                ¡Bienvenido a bordo!
              </p>
              <p className="text-sm text-stone-400">
                Ya estás suscrito. Pronto tendrás noticias.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone-500"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                  className="w-full border border-stone-800 bg-[#111111] px-5 py-4 text-sm text-stone-300 placeholder-stone-700 outline-none transition focus:border-amber-500/60 focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full border border-stone-800 bg-[#111111] px-5 py-4 text-sm text-stone-300 placeholder-stone-700 outline-none transition focus:border-amber-500/60 focus:ring-0"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full border border-amber-500/80 px-8 py-4 text-sm uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black disabled:opacity-50"
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
