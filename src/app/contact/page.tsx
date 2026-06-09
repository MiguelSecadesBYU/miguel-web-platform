"use client";

import { useState } from "react";

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
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
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
    <main className="min-h-screen bg-[#070707] px-6 py-16 text-white sm:py-28 lg:px-12">
      <section className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

        {/* INFO */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Contacto
          </p>
          <h1 className="mb-6 font-serif text-4xl font-light leading-tight sm:mb-8 sm:text-5xl md:text-6xl">
            Contacto y prensa.
          </h1>
          <p className="mb-5 text-base leading-relaxed text-stone-300 sm:mb-6 sm:text-lg">
            Para propuestas editoriales, entrevistas, presentaciones o prensa
            relacionada con <em>El Anillo de Salomón</em>, puedes utilizar este
            formulario.
          </p>
          <p className="text-base leading-relaxed text-stone-400 sm:text-lg">
            También puedes escribirme para consultas sobre futuras publicaciones,
            eventos literarios o colaboraciones profesionales.
          </p>

          {/* Email directo */}
          <div className="mt-10 border-t border-stone-800 pt-8">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-stone-600">
              Email directo
            </p>
            <a
              href="mailto:miguelsecades@gmail.com"
              className="text-sm text-amber-500 transition hover:text-amber-400"
            >
              miguelsecades@gmail.com
            </a>
          </div>
        </div>

        {/* FORMULARIO */}
        {status === "success" ? (
          <div className="flex items-center justify-center border border-amber-500/30 bg-amber-500/5 p-10 text-center">
            <div>
              <p className="mb-3 font-serif text-2xl font-light text-stone-200">
                ¡Mensaje enviado!
              </p>
              <p className="text-sm text-stone-400">
                Gracias por escribirme. Te responderé lo antes posible.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="border border-stone-800 bg-black/40 p-6 sm:p-8">

            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-stone-400">
                Nombre
              </label>
              <input id="name" name="name" type="text" placeholder="Tu nombre" required
                className="w-full border border-stone-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition hover:border-stone-600 focus:border-amber-500" />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.18em] text-stone-400">
                Email
              </label>
              <input id="email" name="email" type="email" placeholder="tu@email.com" required
                className="w-full border border-stone-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition hover:border-stone-600 focus:border-amber-500" />
            </div>

            <div className="mb-5">
              <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-[0.18em] text-stone-400">
                Asunto
              </label>
              <input id="subject" name="subject" type="text" placeholder="Motivo del contacto" required
                className="w-full border border-stone-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition hover:border-stone-600 focus:border-amber-500" />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-stone-400">
                Mensaje
              </label>
              <textarea id="message" name="message" rows={6} placeholder="Escribe tu mensaje..." required
                className="w-full resize-none border border-stone-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition hover:border-stone-600 focus:border-amber-500" />
            </div>

            {status === "error" && (
              <p className="mb-4 text-sm text-red-400">{errorMsg}</p>
            )}

            <button type="submit" disabled={status === "loading"}
              className="w-full border border-amber-500 bg-amber-600 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition hover:bg-amber-500 disabled:opacity-50 sm:w-auto">
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>

            <p className="mt-5 text-xs text-stone-600">
              Las consultas serán respondidas lo antes posible.
            </p>
          </form>
        )}
      </section>
    </main>
  );
}
