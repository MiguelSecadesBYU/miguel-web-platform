import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "El Arca de la Alianza: el mayor misterio sin resolver de la historia",
  description:
    "El Arca de la Alianza desapareció hace 2.600 años. Descubre su historia, sus poderes sobrenaturales y las teorías sobre su paradero, incluida la pista que lleva a Axum.",
};

export default function PostArcaAlianza() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* ── HERO DEL POST ── */}
      <section className="relative border-b border-stone-800 px-6 pb-16 pt-24 lg:px-12">
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[140px]" />
        <div className="mx-auto max-w-3xl">

          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-stone-600">
            <Link href="/blog" className="transition hover:text-amber-500">
              Tras las páginas
            </Link>
            <span>/</span>
            <span className="text-stone-500">Investigación</span>
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Investigación
          </p>

          <h1 className="mb-8 font-serif text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            El Arca de la Alianza: el mayor misterio sin resolver de la historia
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-stone-400">
            Desapareció hace más de 2.600 años. Nadie sabe dónde está. Y sin
            embargo, hay quien afirma que la tiene. Que la ha visto. Que la
            custodia con su vida.
          </p>

          <div className="flex flex-wrap items-center gap-6 border-t border-stone-800 pt-6 text-xs uppercase tracking-[0.2em] text-stone-600">
            <span>Miguel Secades</span>
            <span>·</span>
            <span>Junio 2026</span>
            <span>·</span>
            <span>Lectura: 14 min</span>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <article className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl">

          {/* Intro */}
          <div className="mb-12 space-y-5 text-lg leading-relaxed text-stone-300">
            <p>
              En el año 586 a.C., el ejército babilónico del rey Nabucodonosor
              entró en Jerusalén, destruyó el Templo de Salomón y se llevó sus
              tesoros. La Biblia describe con detalle lo que fue saqueado. Pero
              de un objeto no dice nada.
            </p>
            <p>
              El Arca de la Alianza — el cofre más sagrado del mundo antiguo,
              la morada física de Dios según la tradición judía, el objeto que
              derribó las murallas de Jericó y fulminó a quien se atrevió a
              tocarlo — simplemente desaparece de los textos. Sin explicación.
              Sin rastro.
            </p>
            <p className="font-medium text-stone-200">
              Y desde entonces, el mundo la busca.
            </p>
          </div>

          <Divider />

          {/* Sección 1 */}
          <Section>
            <H2>Qué era exactamente el Arca de la Alianza</H2>
            <p>
              Antes de hablar del misterio, hay que entender el objeto. El Arca
              no era simplemente una caja sagrada. Era, según la tradición
              bíblica, la manifestación física de la presencia de Dios en la
              tierra.
            </p>
            <p>
              Según el relato del Éxodo, Dios dio instrucciones precisas a Moisés
              para construirla. Su propósito era albergar las Tablas de la Ley
              — los Diez Mandamientos — que representaban el pacto entre Dios y
              el pueblo de Israel. Además de las tablas, contenía otros objetos
              sagrados: el maná —el alimento milagroso del desierto— y la vara
              de Aarón, símbolo del sacerdocio.
            </p>
            <p>
              El cofre medía 2,5 codos de largo, 1,5 de ancho y 1,5 de alto
              —aproximadamente 111 cm × 67 cm × 67 cm— y estaba hecho de madera
              de acacia revestida de oro puro tanto por dentro como por fuera.
            </p>
            <H3>El propiciatorio: la tapa más sagrada de la historia</H3>
            <p>
              En la parte superior tenía una tapa llamada "propiciatorio",
              adornada con dos querubines de oro que simbolizaban la presencia
              de Dios. Era aquí donde, según la tradición, Dios hablaba a
              Moisés. El espacio entre los dos querubines era
              considerado el lugar más sagrado del universo — el punto de
              contacto entre lo humano y lo divino.
            </p>
            <p>
              El Arca se guardaba en el lugar más sagrado del Tabernáculo y
              posteriormente en el Templo de Salomón. Era transportada
              cuidadosamente por sacerdotes con varas especiales, pues se
              consideraba extremadamente sagrada.
            </p>
          </Section>

          <Divider />

          {/* Sección 2 — Poderes */}
          <Section>
            <H2>Los poderes del Arca: de Jericó a la muerte de Uzá</H2>
            <p>
              El Arca no era un objeto pasivo. La Biblia la describe como una
              fuerza activa, capaz de lo mejor y de lo peor, dependiendo de
              quién se acercara y con qué intención.
            </p>

            <div className="my-8 space-y-5">
              {[
                {
                  title: "Las murallas de Jericó",
                  text: "El episodio más conocido. Durante siete días, los israelitas rodearon la ciudad de Jericó portando el Arca y tocando trompetas. Al séptimo día, dieron siete vueltas, lanzaron un grito de guerra y las murallas se derrumbaron. No hubo arietes, no hubo catapultas — solo el Arca.",
                },
                {
                  title: "Las aguas del Jordán",
                  text: "Cuando los sacerdotes que portaban el Arca tocaron las aguas del río Jordán, estas se detuvieron permitiendo que todo el pueblo cruzara a pie. Un eco directo de la apertura del Mar Rojo, pero esta vez el Arca era el instrumento visible del milagro.",
                },
                {
                  title: "Las plagas sobre los filisteos",
                  text: "Los filisteos capturaron el Arca en batalla y la llevaron a su ciudad de Ashdod. Lo que siguió fue una serie de calamidades: la estatua de su dios Dagón apareció derribada dos veces ante el Arca, y la ciudad fue azotada por tumores y plagas. Los filisteos la trasladaron a otras ciudades — con idénticos resultados. Finalmente, la devolvieron a Israel junto con una ofrenda de oro.",
                },
                {
                  title: "La muerte de Uzá",
                  text: "Cuando el rey David trasladaba el Arca a Jerusalén, los bueyes que tiraban del carro tropezaron. Un hombre llamado Uzá extendió la mano para sujetarla y evitar que cayera. Murió al instante. David, aterrorizado, detuvo el traslado durante meses.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-stone-800 bg-black/30 p-5">
                  <p className="mb-2 font-serif text-lg text-amber-400">{item.title}</p>
                  <p className="text-sm leading-relaxed text-stone-400">{item.text}</p>
                </div>
              ))}
            </div>

            <p>
              El Arca de la Alianza es considerada el símbolo máximo de la
              presencia de Dios entre los israelitas, con poderes sobrenaturales
              que incluían la capacidad de derribar murallas, derrotar ejércitos
              enemigos e incluso causar la muerte a quienes la tocaran sin
              permiso.
            </p>
          </Section>

          <Divider />

          {/* Sección 3 — Desaparición */}
          <Section>
            <H2>La gran desaparición: 586 a.C.</H2>
            <p>
              El Arca residió en el Templo de Salomón durante siglos. La última
              mención directa en la Biblia es durante el reinado de Josías,
              varios años antes de la invasión babilónica.
            </p>
            <p>
              En el año 586 a.C., Nabucodonosor destruyó Jerusalén y el Templo.
              La Biblia no menciona explícitamente el destino del Arca durante
              este evento, y su desaparición se ha convertido en uno de los
              grandes misterios de la historia bíblica. Los textos
              babilónicos que detallan el botín obtenido en Jerusalén tampoco la
              mencionan.
            </p>
            <p>
              Hay tres posibilidades básicas que los historiadores contemplan:
              fue destruida, fue escondida antes de la invasión, o fue sacada
              de Jerusalén mucho antes de que llegaran los babilonios.
            </p>

            <blockquote className="my-10 border-l-2 border-amber-500 pl-8">
              <p className="font-serif text-xl font-light italic leading-relaxed text-stone-200">
                "Su rastro histórico se pierde hace 2.600 años en Jerusalén.
                Desde entonces, las teorías sobre su paradero han dado lugar
                a ríos de tinta."
              </p>
              <cite className="mt-3 block text-sm text-stone-500 not-italic">
                — Castillo de los Templarios de Ponferrada
              </cite>
            </blockquote>
          </Section>

          <Divider />

          {/* Sección 4 — Teorías */}
          <Section>
            <H2>Las grandes teorías sobre el paradero del Arca</H2>
            <p>
              Durante 2.600 años, cada generación ha propuesto sus propias
              respuestas. Estas son las más relevantes:
            </p>

            <H3>1. Etiopía — la teoría más sólida</H3>
            <p>
              La Iglesia ortodoxa etíope es clara al respecto: el Arca se
              encuentra en la ciudad de Axum, concretamente en una capilla
              cercana al templo de Santa María de Sión.
            </p>
            <p>
              El libro sagrado de Etiopía, el Kebra Nagast, cuenta la historia
              del traslado del Arca gracias a Menelik I, hijo del rey Salomón y
              la reina de Saba. Cuando el rey Salomón se dio cuenta, soñó que
              era la voluntad de Dios y mantuvo en secreto la desaparición del
              Arca.
            </p>
            <p>
              Según esta tradición, Menelik depositó el Arca primero en un
              templo del Alto Egipto, luego en la isla de Tana Cherkos en el
              Lago Tana, donde estuvo custodiada durante 800 años, hasta que el
              rey Ezana de Etiopía la trasladó a Axum, donde hoy es custodiada
              por un sacerdote de origen levita — la única persona en el mundo
              con acceso directo al Arca, que la protege con su vida.
            </p>
            <p>
              A pesar de ser una historia desestimada por los historiadores
              occidentales, los etíopes la aceptan sin dudar. Están convencidos
              de que el Arca original fue llevada a Axum en el primer milenio
              antes de Cristo y que permanece ahí desde entonces. Ningún
              investigador externo ha podido verificarlo — el sacerdote guardián
              no permite que nadie se acerque.
            </p>

            <H3>2. Escondida bajo el Monte del Templo</H3>
            <p>
              Una fuente talmúdica relata que el Arca — junto con otros objetos
              sagrados del Templo — fue escondida justo antes de la destrucción
              del Templo. Algunos investigadores creen que existe una
              cámara subterránea bajo el Monte del Templo en Jerusalén donde el
              Arca fue ocultada por los sacerdotes. La imposibilidad de excavar
              ese lugar por razones políticas y religiosas hace que esta teoría
              sea imposible de verificar o descartar.
            </p>

            <H3>3. El Monte Nebo</H3>
            <p>
              Según una tradición, del ocultamiento sería responsable el profeta
              Jeremías, que, avisado por Dios, habría depositado el cofre en
              lugar seguro en el monte Nebo, desde cuya cima Moisés avistara
              muchos siglos antes la tierra de Canaán, junto al mar Muerto.
            </p>

            <H3>4. Los Caballeros Templarios y Francia</H3>
            <p>
              Algunas teorías sugieren que los Caballeros Templarios pudieron
              haber llevado el Arca de la Alianza a Francia después de la caída
              de Jerusalén en 1187. Algunos creen que puede estar escondida en
              algún lugar de la región de Rennes-le-Château. Esta teoría,
              popularizada por escritores como Michael Baigent y Richard Leigh,
              carece de evidencia histórica sólida pero sigue siendo una de las
              más citadas en el mundo del misterio.

            </p>

            <H3>5. La tribu Lemba de Zimbabue</H3>
            <p>
              Otras teorías especulan que el Arca pudo haber sido llevada a
              Zimbabue por una tribu judía llamada los Lemba, que afirman ser
              descendientes de los israelitas. La tribu Lemba tiene
              tradiciones y prácticas religiosas sorprendentemente similares al
              judaísmo antiguo, y posee un objeto sagrado llamado ngoma lungundu
              que algunos investigadores han relacionado con el Arca.
            </p>
          </Section>

          <Divider />

          {/* Sección 5 — Arqueología */}
          <Section>
            <H2>Lo que dice la arqueología</H2>
            <p>
              La arqueología moderna ha excavado extensamente en Israel y los
              territorios circundantes. Ningún hallazgo ha confirmado la
              existencia física del Arca tal como la describe la Biblia.
            </p>
            <p>
              Esto no significa que el Arca no existiera. Los cofres sagrados
              con objetos rituales eran habituales en todas las culturas del
              Oriente Próximo antiguo — Egipto, Mesopotamia, Canaán. La
              descripción del Arca es perfectamente coherente con los objetos
              cultuales de la época.
            </p>
            <p>
              Lo que la arqueología no puede explicar es su desaparición. Si
              fue destruida por los babilonios, debería haber alguna referencia
              en los textos cuneiformes que documentan el saqueo. No la hay. Si
              fue escondida, no ha aparecido. Si fue llevada a Etiopía, nadie
              externo lo ha verificado.
            </p>
            <p>
              El silencio arqueológico es, en este caso, tan significativo como
              cualquier hallazgo.
            </p>
          </Section>

          <Divider />

          {/* Curiosidades */}
          <Section>
            <H2>Curiosidades sobre el Arca que quizás no conocías</H2>
            <div className="my-6 space-y-5">
              {[
                "La CIA intentó localizar el Arca en los años 80 mediante un programa de visión remota — técnicas de espionaje psíquico. El programa, desclasificado décadas después, no produjo ningún resultado verificable.",
                "Etiopía tiene más de 20.000 iglesias ortodoxas. Cada una contiene una réplica del Arca llamada tabot, que se pasea en procesión durante festividades religiosas. El tabot es tan sagrado que va cubierto en todo momento.",
                "En el Apocalipsis de Juan (11:19) aparece una visión del Templo celestial donde \"se vio el arca de su pacto\". Es la última mención del Arca en el canon bíblico.",
                "Los rabinos de los primeros siglos de la era cristiana creían que el hallazgo del Arca sería uno de los signos que anunciarían la llegada del Mesías.",
                "Indiana Jones y el Arca Perdida (1981) convirtió la búsqueda del Arca en un fenómeno cultural global. El guion se basó en investigaciones reales sobre las teorías de su paradero.",
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <span className="mt-1 shrink-0 font-serif text-lg text-amber-500/50">{i + 1}.</span>
                  <p className="text-stone-400">{item}</p>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          {/* FAQ */}
          <Section>
            <H2>Preguntas frecuentes sobre el Arca de la Alianza</H2>
            <div className="my-6 space-y-6">
              {[
                {
                  q: "¿Existió realmente el Arca de la Alianza?",
                  a: "No existe evidencia arqueológica directa del Arca tal como la describe la Biblia. Sin embargo, los cofres sagrados con objetos rituales eran comunes en el Oriente Próximo antiguo, y la descripción bíblica es coherente con los objetos cultuales de la época. Su existencia como objeto real y sagrado es ampliamente aceptada por historiadores; su desaparición, un misterio sin resolver.",
                },
                {
                  q: "¿Qué contenía exactamente el Arca?",
                  a: "Según la Biblia, el Arca contenía las dos Tablas de la Ley con los Diez Mandamientos, una vasija con maná y la vara de Aarón que floreció milagrosamente. Representaba el pacto entre Dios y el pueblo de Israel.",
                },
                {
                  q: "¿Por qué nadie puede ver el Arca en Etiopía si está en Axum?",
                  a: "La Iglesia ortodoxa etíope no permite que ningún investigador externo acceda al objeto. El sacerdote guardián — el único con acceso directo — dedica su vida entera a custodiarla y no puede abandonar el recinto sagrado. Esta política de máximo secreto hace imposible cualquier verificación independiente.",
                },
                {
                  q: "¿Qué relación tiene el Arca con el Templo de Salomón?",
                  a: "El Arca fue el objeto más sagrado del Primer Templo de Jerusalén, construido por Salomón específicamente para albergarla. Residía en el Sancta Sanctorum —el Santo de los Santos—, la cámara más interior y sagrada del Templo, a la que solo el Sumo Sacerdote podía entrar una vez al año.",
                },
                {
                  q: "¿Qué pasó con el Arca cuando destruyeron el Templo?",
                  a: "Nadie lo sabe con certeza. La Biblia no lo menciona. Los textos babilónicos del saqueo tampoco la incluyen. Las teorías van desde que fue escondida antes de la invasión hasta que fue llevada a Etiopía siglos antes. La desaparición del objeto más sagrado del mundo antiguo sigue siendo, 2.600 años después, un misterio sin resolver.",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-stone-800 pb-6">
                  <p className="mb-3 font-medium text-stone-200">{item.q}</p>
                  <p className="text-sm leading-relaxed text-stone-400">{item.a}</p>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          {/* CTA */}
          <section className="my-12 border border-amber-500/20 bg-amber-500/5 p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-500">
              ¿Y si el misterio continuara?
            </p>
            <p className="mb-5 font-serif text-2xl font-light leading-relaxed text-stone-200">
              El rastro lleva a Axum.
            </p>
            <div className="space-y-4 text-base leading-relaxed text-stone-400">
              <p>
                Durante siglos, historiadores, arqueólogos y aventureros han
                seguido la pista del Arca hasta Etiopía. Hasta Axum. Hasta una
                capilla custodiada por un sacerdote que no permite que nadie
                se acerque.
              </p>
              <p>
                ¿Qué pasaría si alguien llegara a Axum siguiendo otra pista —
                una que nadie más había encontrado? ¿Y si el Arca no estuviera
                sola, sino vinculada a otro objeto de poder igual de antiguo
                y mucho más peligroso?
              </p>
              <p className="text-stone-300">
                En <em>El Anillo de Salomón</em>, el rastro también lleva a
                Axum. Lo que Álvaro Ballester encuentra allí cambia todo. Pero
                eso ya es otra historia.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.amazon.es/dp/B0H14NRP92"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-amber-500/80 px-7 py-3 text-center text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
              >
                Tapa blanda en Amazon
              </a>
              <a
                href="https://www.amazon.es/dp/B0GZVQL88V"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-stone-700 px-7 py-3 text-center text-xs uppercase tracking-[0.18em] text-stone-400 transition hover:border-amber-500/60 hover:text-amber-400"
              >
                Ebook Kindle
              </a>
            </div>
          </section>

          {/* Volver al blog */}
          <div className="mt-16 border-t border-stone-800 pt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/blog"
              className="text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400"
            >
              ← Volver a Tras las páginas
            </Link>
            <Link
              href="/blog/anillo-de-salomon-historia-poderes-leyenda"
              className="text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400"
            >
              Leer también: El Anillo de Salomón →
            </Link>
          </div>

        </div>
      </article>
    </main>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 mt-2 font-serif text-3xl font-light leading-snug text-stone-100">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 mt-6 font-serif text-xl font-light text-stone-200">
      {children}
    </h3>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-4 space-y-5 text-base leading-relaxed text-stone-300">{children}</section>;
}

function Divider() {
  return <div className="my-12 border-t border-stone-800" />;
}
