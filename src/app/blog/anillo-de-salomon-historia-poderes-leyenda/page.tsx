import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "El Anillo de Salomón: historia, poderes y el misterio que nadie ha resuelto",
  description:
    "Descubre la verdad detrás del Anillo de Salomón: su origen histórico, sus poderes legendarios sobre demonios y por qué sigue fascinando al mundo.",
};

export default function PostAnilloSalomon() {
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
            El Anillo de Salomón: historia, poderes y el misterio que nadie ha resuelto
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-stone-400">
            Un objeto grabado por Dios, entregado por un arcángel, capaz de doblegar 
            la voluntad de los demonios. Lleva más de dos mil años fascinando al mundo. 
            Y sigue sin aparecer.
          </p>

          {/* Meta del post */}
          <div className="flex flex-wrap items-center gap-6 border-t border-stone-800 pt-6 text-xs uppercase tracking-[0.2em] text-stone-600">
            <span>Miguel Secades</span>
            <span>·</span>
            <span>Junio 2025</span>
            <span>·</span>
            <span>Lectura: 12 min</span>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <article className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl">

          {/* Intro */}
          <div className="mb-12 space-y-5 text-lg leading-relaxed text-stone-300">
            <p>
              Imagina un objeto tan poderoso que su mero portador podía doblegar
              la voluntad de los demonios, obligarlos a construir templos y
              arrancarles los secretos del universo. Un anillo grabado por el
              propio Dios, entregado por un arcángel, perdido en algún lugar del
              tiempo.
            </p>
            <p>
              ¿Leyenda? Quizás. ¿Solo leyenda? Eso ya es otra pregunta.
            </p>
            <p>
              El Anillo de Salomón lleva más de dos mil años fascinando a
              teólogos, ocultistas, arqueólogos y novelistas. Aparece en textos
              judíos, islámicos y griegos. Inspira tradiciones esotéricas que aún
              hoy tienen seguidores. Y sigue sin aparecer.
            </p>
            <p className="font-medium text-stone-200">
              Esto es todo lo que sabemos sobre él.
            </p>
          </div>

          <Divider />

          {/* Sección 1 */}
          <Section>
            <H2>Quién fue realmente el rey Salomón</H2>
            <p>
              Antes de hablar del anillo, necesitamos hablar del hombre.
            </p>
            <p>
              Salomón fue el tercer rey de Israel, hijo del legendario David.
              Gobernó aproximadamente entre el 966 y el 930 a.C., durante lo que
              muchos historiadores consideran la edad de oro del reino unificado
              de Israel. Bajo su mandato, Jerusalén se convirtió en un centro
              comercial y político de primer orden, con rutas que llegaban hasta
              Arabia, India, África y Judea.
            </p>
            <p>
              Su obra más famosa —y la más polémica— fue la construcción del
              Primer Templo de Jerusalén. Las fuentes bíblicas lo describen con
              detalle extraordinario: sus dimensiones, sus materiales, su
              mobiliario sagrado. La arqueología moderna ha encontrado estructuras
              del periodo en Khirbet Qeiyafa y Tel Motza compatibles con la
              descripción bíblica, aunque el Monte del Templo no ha podido
              excavarse por razones políticas y religiosas.
            </p>
            <p>
              Lo que la Biblia sí confirma con claridad: Salomón fue un hombre de
              sabiduría excepcional, de alianzas comerciales sofisticadas y de
              una ambición constructora sin precedentes en su tiempo.
            </p>
            <p>
              Lo que la Biblia <em>no</em> menciona en ningún momento: el anillo.
            </p>
            <H3>¿Entonces de dónde viene la leyenda?</H3>
            <p className="font-medium text-stone-200">
              Aquí empieza lo interesante.
            </p>
          </Section>

          <Divider />

          {/* Sección 2 */}
          <Section>
            <H2>El origen del Anillo de Salomón: textos que la Biblia nunca incluyó</H2>
            <p>
              La historia del anillo no aparece en el Antiguo Testamento ni en
              las fuentes hebreas más antiguas. Su origen está en textos
              apócrifos —escritos que quedaron fuera del canon oficial— y en
              tradiciones medievales que fueron acumulándose durante siglos.
            </p>
            <H3>El Testamento de Salomón: el primer gran relato</H3>
            <p>
              El texto más antiguo que describe el anillo con detalle es el{" "}
              <em>Testamento de Salomón</em>, escrito entre los siglos I y III
              d.C. —varios siglos después de la muerte del rey—. El documento
              está estructurado como unas memorias dictadas por el propio Salomón
              antes de morir, y narra algo extraordinario:
            </p>
            <p>
              Un demonio llamado Ornias estaba acosando a un joven amigo del rey,
              succionándole la vitalidad cada noche. Salomón rezó a Dios, y el
              arcángel Miguel descendió con un regalo: un anillo grabado con el
              sello divino, capaz de doblegar la voluntad de cualquier espíritu.
            </p>
            <p>
              Con ese anillo, Salomón capturó a Ornias. Luego lo obligó a
              convocar a Beelzebú, príncipe de los demonios. Y así, uno a uno,
              fue sometiendo a decenas de entidades sobrenaturales,
              interrogándolas sobre sus poderes y sus debilidades, y poniéndolas
              a trabajar en la construcción del Templo.
            </p>

            {/* Cita destacada */}
            <blockquote className="my-10 border-l-2 border-amber-500 pl-8">
              <p className="font-serif text-xl font-light italic leading-relaxed text-stone-200">
                "Testamento de Salomón, hijo de David, quien fue rey en Jerusalén
                y dominó y controló todos los espíritus del aire, de la tierra y
                de debajo de la tierra. Por medio de ellos también realizó todas
                las obras trascendentes del Templo."
              </p>
              <cite className="mt-3 block text-sm text-stone-500 not-italic">
                — Testamento de Salomón, siglos I-III d.C.
              </cite>
            </blockquote>

            <H3>El Talmud y la historia de Asmodeo</H3>
            <p>
              El tratado <em>Guitín</em> del Talmud —la gran compilación de la
              ley judía— también recoge una historia protagonizada por Salomón y
              el anillo. Aquí el antagonista es Asmodeo, el rey de los demonios.
            </p>
            <p>
              Según este relato, Salomón necesitaba la ayuda de Asmodeo para
              encontrar el <em>shamir</em>, un gusano mítico capaz de cortar
              piedra sin hacer ruido. Para atraparlo, Salomón le entregó el
              anillo a su general Benaiahu, quien logró capturarlo.
            </p>
            <p>
              Pero la historia tiene un giro: Asmodeo consiguió engañar al propio
              Salomón, arrebatarle el anillo y tragárselo. Sin el anillo, el rey
              perdió su poder y fue expulsado de su propio trono durante años.
            </p>
            <p className="font-medium text-stone-200">
              El mensaje es claro: el anillo no era solo un símbolo. Era la
              fuente misma del poder de Salomón.
            </p>
          </Section>

          <Divider />

          {/* Sección 3 — Poderes */}
          <Section>
            <H2>Los poderes del Anillo de Salomón según las distintas tradiciones</H2>
            <p>
              A lo largo de los siglos, diferentes culturas han atribuido al
              anillo capacidades distintas:
            </p>

            <div className="my-8 space-y-6">
              <div className="border-l-2 border-stone-700 pl-6">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amber-500">
                  Tradición judeocristiana
                </p>
                <ul className="space-y-1 text-stone-400">
                  <li>— Dominio sobre demonios y espíritus malignos</li>
                  <li>— Capacidad de interrogar a las entidades sobrenaturales</li>
                  <li>— Sello con el nombre divino (el Tetragrámaton)</li>
                  <li>— Poder para construir lo que los humanos no podían edificar solos</li>
                </ul>
              </div>
              <div className="border-l-2 border-stone-700 pl-6">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amber-500">
                  Tradición islámica
                </p>
                <ul className="space-y-1 text-stone-400">
                  <li>— Control sobre los <em>djinn</em> (genios) y los <em>ifrits</em></li>
                  <li>— Conocido como <em>Khātam Sulaymān</em>, grabado por Dios desde el cielo</li>
                  <li>— Símbolo del poder absoluto en <em>Las mil y una noches</em></li>
                </ul>
              </div>
              <div className="border-l-2 border-stone-700 pl-6">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amber-500">
                  Textos de magia medieval
                </p>
                <ul className="space-y-1 text-stone-400">
                  <li>— La <em>Clavícula de Salomón</em> recopila sellos y conjuros del anillo</li>
                  <li>— La <em>Llave Menor</em> incluye instrucciones para invocar a los 72 demonios sometidos</li>
                </ul>
              </div>
            </div>

            <H3>¿Cómo era físicamente el anillo?</H3>
            <p>Las descripciones varían, pero hay elementos comunes en todas las fuentes:</p>
            <ul className="my-4 space-y-2 text-stone-400">
              <li><span className="text-stone-300">Material:</span> una mezcla de latón y hierro, según algunas tradiciones; oro según otras</li>
              <li><span className="text-stone-300">Sello:</span> la Estrella de David (dos triángulos entrelazados) o el pentagrama</li>
              <li><span className="text-stone-300">Inscripción:</span> el Tetragrámaton, el nombre sagrado de Dios en hebreo</li>
              <li><span className="text-stone-300">Origen:</span> enviado desde el cielo por el arcángel Miguel</li>
            </ul>
          </Section>

          <Divider />

          {/* Sección 4 — Demonios */}
          <Section>
            <H2>Los demonios que Salomón sometió: los más conocidos</H2>
            <p>
              Si el anillo era el instrumento, los demonios eran los
              protagonistas. El <em>Testamento de Salomón</em> lista decenas de
              entidades. Estos son los más célebres:
            </p>

            <div className="my-8 space-y-5">
              {[
                { name: "Ornias", desc: "El primero en ser capturado. Acosaba a jóvenes durante la noche. Se convirtió en el mensajero de Salomón para atrapar a otros demonios." },
                { name: "Beelzebú", desc: "Príncipe de los demonios, el más poderoso de todos. Fue marcado con el sello del anillo por el propio Ornias. Su nombre aparece también en el Nuevo Testamento." },
                { name: "Asmodeo", desc: "El único que logró superar a Salomón temporalmente. Rey de los demonios según el Talmud. Su historia de engaño al rey es una de las más elaboradas de toda la tradición." },
                { name: "Las Siete Hermanas", desc: "Siete demonios femeninos vinculados a las enfermedades y el mal de ojo. Aparecen en el Testamento como un conjunto inseparable." },
                { name: "Efippas", desc: "Un demonio del viento capturado cuando intentaba azotar la tierra de Arabia. Su poder fue usado para levantar una enorme piedra angular del Templo." },
              ].map((demon) => (
                <div key={demon.name} className="border border-stone-800 bg-black/30 p-5">
                  <p className="mb-2 font-serif text-lg text-amber-400">{demon.name}</p>
                  <p className="text-sm leading-relaxed text-stone-400">{demon.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          {/* Sección 5 — Arqueología */}
          <Section>
            <H2>Lo que dice la arqueología (y lo que no dice)</H2>
            <p>
              Seamos honestos: no existe evidencia arqueológica del Anillo de
              Salomón. Ningún yacimiento, ningún texto contemporáneo al rey,
              ningún hallazgo físico lo confirma.
            </p>
            <p>Pero eso no significa que la historia esté vacía.</p>
            <p>Lo que sí sabemos con certeza histórica:</p>
            <ul className="my-4 space-y-2 text-stone-400">
              <li>— Salomón existió. El periodo arqueológico del siglo X a.C. en Israel confirma un Estado organizado y próspero</li>
              <li>— El Primer Templo existió. Las referencias en textos externos y hallazgos arquitectónicos del periodo lo avalan</li>
              <li>— El culto a la magia y los amuletos era absolutamente normal en el Oriente Próximo antiguo. Los arqueólogos han encontrado miles de anillos-sello con inscripciones religiosas en excavaciones de Israel y Jordania</li>
            </ul>
            <p>
              La distancia entre un anillo-sello sagrado y un anillo capaz de
              doblegar demonios la llenaron los siglos, las tradiciones y la
              imaginación humana.
            </p>
          </Section>

          <Divider />

          {/* Sección 6 — Cultura popular */}
          <Section>
            <H2>El Anillo de Salomón en la cultura popular: de Las mil y una noches a Dan Brown</H2>
            <p>La influencia del mito es enorme y llega hasta hoy:</p>
            <ul className="my-4 space-y-3 text-stone-400">
              <li><span className="text-stone-300">Las mil y una noches</span> — Salomón y su anillo aparecen como símbolo de poder absoluto sobre los genios</li>
              <li><span className="text-stone-300">La masonería</span> — utiliza la figura de Salomón y el Templo como pilares simbólicos; el anillo aparece en algunos grados como símbolo de autoridad</li>
              <li><span className="text-stone-300">La AMORC</span> — una de las órdenes esotéricas más conocidas del mundo, considera a Salomón uno de sus maestros fundacionales</li>
              <li><span className="text-stone-300">El thriller histórico</span> — Dan Brown, Steve Berry y James Rollins han explorado territorios adyacentes sin agotar el mito</li>
              <li><span className="text-stone-300">El cine y los videojuegos</span> — recurren al anillo como el MacGuffin supremo: el objeto que mueve la trama, que todos desean y que nadie debería poseer</li>
            </ul>
          </Section>

          <Divider />

          {/* Curiosidades */}
          <Section>
            <H2>Curiosidades sobre el Anillo de Salomón que quizás no conocías</H2>
            <div className="my-6 space-y-5">
              {[
                "El historiador judío Flavio Josefo (siglo I d.C.) menciona a un exorcista llamado Eleazar que usaba un anillo con una raíz especial para expulsar demonios en presencia del emperador Vespasiano. Es la primera referencia histórica a un anillo con ese tipo de poder.",
                "La frase \"Todo esto también pasará\" —atribuida popularmente al Anillo de Salomón— no aparece en ningún texto apócrifo antiguo. Es una historia independiente, posiblemente de origen sufí, que se fusionó con el mito en épocas posteriores.",
                "El Sello de Salomón (la estrella de seis puntas) y el Escudo de David tienen origen independiente. El Sello tiene raíces en la magia judía preislámica, mientras que el Escudo de David como símbolo del pueblo judío es relativamente tardío.",
                "Hoy en día se venden miles de réplicas del anillo de Salomón como amuletos. El negocio de la magia saloménica está, paradójicamente, más vivo que nunca.",
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
            <H2>Preguntas frecuentes sobre el Anillo de Salomón</H2>
            <div className="my-6 space-y-6">
              {[
                {
                  q: "¿Existe evidencia histórica del Anillo de Salomón?",
                  a: "No existe evidencia arqueológica directa. La Biblia no lo menciona. Los textos que lo describen son apócrifos medievales escritos siglos después del reinado de Salomón. Sin embargo, los anillos-sello con inscripciones religiosas eran objetos reales y documentados en la cultura del Oriente Próximo antiguo.",
                },
                {
                  q: "¿Cuál es la diferencia entre el Anillo de Salomón y el Sello de Salomón?",
                  a: "En muchas tradiciones se usan como sinónimos. Técnicamente, el sello es el diseño grabado en el anillo (generalmente la estrella de seis puntas o el pentagrama), mientras que el anillo es el objeto físico que porta ese sello.",
                },
                {
                  q: "¿Qué son las Clavículas de Salomón?",
                  a: "Son un conjunto de textos de magia ceremonial medieval atribuidos a Salomón. La más conocida es la Clavicula Salomonis o Llave Mayor de Salomón. Describen rituales, sellos y conjuros relacionados con los demonios que Salomón supuestamente dominó con su anillo.",
                },
                {
                  q: "¿Por qué el anillo de Salomón aparece en la masonería?",
                  a: "La masonería adoptó la figura de Salomón como símbolo central porque el Templo de Jerusalén representa, en su simbología, la construcción perfecta: física, moral y espiritual. El anillo aparece en algunos rituales como símbolo de autoridad y conocimiento transmitido.",
                },
                {
                  q: "¿Qué pasó con el Anillo de Salomón después de la muerte del rey?",
                  a: "Las tradiciones divergen. Algunas dicen que fue enterrado con el rey. Otras, que fue escondido para proteger a la humanidad de su poder. Hay quienes sostienen que aún existe, custodiado por una orden secreta. Nadie sabe. Y esa es, precisamente, la respuesta más poderosa de todas.",
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

          {/* CTA — ¿Y si la leyenda fuera real? */}
          <section className="my-12 border border-amber-500/20 bg-amber-500/5 p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-500">
              ¿Y si la leyenda fuera real?
            </p>
            <p className="mb-5 font-serif text-2xl font-light leading-relaxed text-stone-200">
              Hay algo inquietante en la persistencia de este mito.
            </p>
            <div className="space-y-4 text-base leading-relaxed text-stone-400">
              <p>
                Durante más de dos mil años, en culturas tan distintas como la
                judía, la árabe, la cristiana medieval y la rosacruz moderna,
                alguien ha seguido creyendo que ese anillo existió. Que existe.
              </p>
              <p>
                ¿Qué pasaría si un arqueólogo encontrara un papiro sumerio que
                mencionara el objeto? ¿Y si las pistas lo llevaran desde Madrid
                hasta los archivos del Vaticano, las ruinas de Babilonia y la
                mítica Axum —la ciudad etíope donde algunos sitúan el Arca de la
                Alianza—? ¿Y si no fuera el único en buscarlo?
              </p>
              <p className="text-stone-300">
                Algunos secretos llevan tres mil años durmiendo por algo.
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
          <div className="mt-16 border-t border-stone-800 pt-10">
            <Link
              href="/blog"
              className="text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400"
            >
              ← Volver a Tras las páginas
            </Link>
          </div>

        </div>
      </article>
    </main>
  );
}

/* ── Componentes de tipografía internos ── */
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
