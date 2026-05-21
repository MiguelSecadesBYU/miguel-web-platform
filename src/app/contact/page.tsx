export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-6 py-28 text-white lg:px-12">
      <section className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="max-w-md">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Contacto
          </p>

          <h1 className="mb-8 font-serif text-5xl font-light leading-tight md:text-6xl">
            Contacto y prensa.
          </h1>

          <p className="mb-6 text-lg leading-relaxed text-stone-300">
            Para propuestas editoriales, entrevistas, presentaciones o prensa
            relacionada con <em>El Anillo de Salomón</em>, puedes utilizar este
            formulario.
          </p>

          <p className="text-lg leading-relaxed text-stone-400">
            También puedes escribirme para consultas sobre futuras publicaciones,
            eventos literarios o colaboraciones profesionales.
          </p>
        </div>

        <form className="border border-stone-800 bg-black/40 p-8">
          <div className="mb-6">
            <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-stone-400">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-stone-700 bg-transparent px-4 py-3 text-white outline-none transition hover:border-stone-600 focus:border-amber-500"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-stone-400">
              Email
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full border border-stone-700 bg-transparent px-4 py-3 text-white outline-none transition hover:border-stone-600 focus:border-amber-500"
            />
          </div>

          <div className="mb-7">
            <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-stone-400">
              Mensaje
            </label>
            <textarea
              rows={6}
              placeholder="Escribe tu mensaje..."
              className="w-full resize-none border border-stone-700 bg-transparent px-4 py-3 text-white outline-none transition hover:border-stone-600 focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="border border-amber-500 bg-amber-600 px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-white transition hover:bg-amber-500"
          >
            Enviar mensaje
          </button>

          <p className="mt-6 text-sm text-stone-500">
            Las consultas serán respondidas lo antes posible.
          </p>
        </form>
      </section>
    </main>
  );
}