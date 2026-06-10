"use client";

import { useState } from "react";

const CONTACT_SUBJECTS = [
  "Prensa y medios",
  "Propuesta editorial",
  "Presentación o evento",
  "Colaboración",
  "Consulta general",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const d = await res.json();
        setErrorMsg(d.error || "Ha ocurrido un error. Inténtalo de nuevo.");
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
    <main className="min-h-screen bg-[#070707] px-6 py-16 text-white sm:py-24 lg:px-12">
      <section className="mx-auto max-w-6xl">

        {/* Cabecera */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Contacto
          </p>
          <h1 className="mb-6 font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Hablemos.
          </h1>
          <p className="text-base leading-relaxed text-stone-400 sm:text-lg">
            Para consultas de prensa, propuestas editoriales, presentaciones o
            cualquier otra cuestión relacionada con{" "}
            <em className="text-stone-300">El Anillo de Salomón</em>, puedes
            escribirme a través de este formulario o directamente por email.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">

          {/* INFO LATERAL */}
          <div className="space-y-10">

            {/* Email directo */}
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-amber-500">
                Email
              </p>
              <a
                href="mailto:miguel.secades.garcia@gmail.com"
                className="break-all text-sm text-stone-300 transition hover:text-amber-400"
              >
                miguel.secades.garcia@gmail.com
              </a>
            </div>

            {/* Redes sociales */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber-500">
                Redes sociales
              </p>
              <div className="space-y-3">
                {[
                  { label: "Instagram", href: "https://www.instagram.com/miguelsecades/" },
                  { label: "X / Twitter", href: "https://x.com/MSecadesOficial" },
                  { label: "TikTok", href: "https://www.tiktok.com/@msecadestk" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-stone-400 transition hover:text-amber-400"
                  >
                    <span className="h-px w-4 bg-stone-700" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Nota prensa */}
            <div className="border border-stone-800 bg-black/30 p-6">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber-500">
                Prensa y medios
              </p>
              <p className="text-sm leading-relaxed text-stone-400">
                Si eres periodista, blogger o trabajas en medios, en la página
                del autor encontrarás una nota biográfica y bio corta listos
                para usar.
              </p>
              <a
                href="/about"
                className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400"
              >
                Ver página del autor →
              </a>
            </div>

          </div>

          {/* FORMULARIO */}
          {status === "success" ? (
            <div className="flex min-h-[400px] items-center justify-center border border-amber-500/20 bg-amber-500/5 p-10 text-center">
              <div>
                <p className="mb-3 font-serif text-3xl font-light text-stone-100">
                  Mensaje recibido.
                </p>
                <p className="text-base text-stone-400">
                  Gracias por escribirme. Te responderé lo antes posible.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-stone-500">
                    Nombre *
                  </label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Tu nombre completo" required
                    className="w-full border border-stone-800 bg-[#111] px-4 py-3.5 text-sm text-white placeholder-stone-700 outline-none transition focus:border-amber-500/60"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.18em] text-stone-500">
                    Email *
                  </label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="tu@email.com" required
                    className="w-full border border-stone-800 bg-[#111] px-4 py-3.5 text-sm text-white placeholder-stone-700 outline-none transition focus:border-amber-500/60"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-[0.18em] text-stone-500">
                  Motivo *
                </label>
                <select
                  id="subject" name="subject" required
                  className="w-full border border-stone-800 bg-[#111] px-4 py-3.5 text-sm text-white outline-none transition focus:border-amber-500/60"
                >
                  <option value="" disabled selected>Selecciona un motivo</option>
                  {CONTACT_SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-stone-500">
                  Mensaje *
                </label>
                <textarea
                  id="message" name="message" rows={7}
                  placeholder="Escribe tu mensaje aquí..." required
                  className="w-full resize-none border border-stone-800 bg-[#111] px-4 py-3.5 text-sm text-white placeholder-stone-700 outline-none transition focus:border-amber-500/60"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}

              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="border border-amber-500/80 px-8 py-4 text-sm uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black disabled:opacity-50"
                >
                  {status === "loading" ? "Enviando..." : "Enviar mensaje"}
                </button>
                <p className="text-xs text-stone-700">
                  * Campos obligatorios
                </p>
              </div>

            </form>
          )}

        </div>
      </section>
    </main>
  );
}
