import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "La AMORC: la orden que custodia los secretos de la humanidad",
  description:
    "La AMORC es la mayor organización rosacruz del mundo. Descubre su origen en el Antiguo Egipto, sus enseñanzas esotéricas, su simbología y su conexión con el Templo de Salomón.",
  openGraph: {
    title: "La AMORC: la orden que custodia los secretos de la humanidad",
    description:
      "Desde el Antiguo Egipto hasta el siglo XXI. La Antigua y Mística Orden de la Rosa Cruz lleva siglos custodiando un conocimiento que muy pocos han podido acceder.",
    url: "https://www.miguelsecades.com/blog/amorc-orden-rosacruz-historia-secretos",
    images: [
      {
        url: "/images/books/Portada-El_Anillo_de_Salomon.jpg",
        width: 1000,
        height: 1500,
        alt: "El Anillo de Salomón — Miguel Secades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La AMORC: la orden que custodia los secretos de la humanidad",
    description:
      "Desde el Antiguo Egipto hasta hoy. La orden rosacruz más grande del mundo y los secretos que custodia.",
    images: ["/images/books/Portada-El_Anillo_de_Salomon.jpg"],
  },
  alternates: {
    canonical: "https://www.miguelsecades.com/blog/amorc-orden-rosacruz-historia-secretos",
  },
};

export default function PostAMORC() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* ── HERO ── */}
      <section className="relative border-b border-stone-800 px-6 pb-16 pt-24 lg:px-12">
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[140px]" />
        <div className="mx-auto max-w-3xl">

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
            La AMORC: la orden que custodia los secretos de la humanidad
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-stone-400">
            Desde el Antiguo Egipto hasta el siglo XXI. La Antigua y Mística
            Orden de la Rosa Cruz lleva siglos custodiando un conocimiento que
            muy pocos han podido acceder — y que, según sus propios miembros,
            podría cambiar la comprensión que tenemos del universo y de nosotros
            mismos.
          </p>

          <div className="flex flex-wrap items-center gap-6 border-t border-stone-800 pt-6 text-xs uppercase tracking-[0.2em] text-stone-600">
            <span>Miguel Secades</span>
            <span>·</span>
            <span>Octubre 2026</span>
            <span>·</span>
            <span>Lectura: 13 min</span>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <article className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl">

          {/* Intro */}
          <div className="mb-12 space-y-5 text-lg leading-relaxed text-stone-300">
            <p>
              Hay organizaciones que existen en los márgenes de la historia
              oficial — demasiado grandes para ser ignoradas, demasiado
              discretas para ser comprendidas del todo. La AMORC es una de ellas.
            </p>
            <p>
              Con presencia en más de cien países y decenas de miles de miembros
              activos, la Antigua y Mística Orden de la Rosa Cruz es la mayor
              organización rosacruz del mundo. No es una secta ni una religión.
              No exige la renuncia a otras creencias. No promete poderes
              sobrenaturales. Promete algo más difícil de encontrar: conocimiento.
            </p>
            <p>
              Un conocimiento que, según sus miembros, lleva transmitiéndose
              en secreto desde los tiempos del Antiguo Egipto.
            </p>
          </div>

          {/* Índice */}
          <nav className="mb-12 border border-amber-500/20 bg-amber-500/5 p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber-500">
              En este artículo
            </p>
            <ol className="space-y-2 text-sm text-stone-400">
              {[
                ["Qué es la AMORC", "#que-es"],
                ["Los orígenes: del Antiguo Egipto al siglo XVII", "#origenes"],
                ["Los manifiestos rosacruces y Christian Rosenkreuz", "#manifiestos"],
                ["H. Spencer Lewis y la AMORC moderna", "#spencer-lewis"],
                ["Las enseñanzas: qué se aprende en la Orden", "#ensenanzas"],
                ["El simbolismo de la Rosa y la Cruz", "#simbolismo"],
                ["La AMORC y el Templo de Salomón", "#salomon"],
                ["La AMORC en España y el mundo", "#espana"],
                ["Preguntas frecuentes", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-amber-400">
                    {label} →
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <Divider />

          <Section id="que-es">
            <H2>Qué es la AMORC</H2>
            <p>
              AMORC es el acrónimo latino de <em>Antiquus Mysticusque Ordo
              Rosæ Crucis</em> — Antigua y Mística Orden de la Rosa Cruz. Es
              la mayor organización rosacruz del mundo, con sede central en
              San José, California, y presencia activa en más de cien países.
            </p>
            <p>
              A diferencia de otras organizaciones esotéricas, la AMORC no
              es una religión ni exige a sus miembros que abandonen sus
              creencias previas. Se define a sí misma como una fraternidad
              filosófica e iniciática dedicada al estudio de las leyes
              naturales y espirituales del universo — lo que llama las
              "Ciencias Sagradas".
            </p>
            <p>
              Sus enseñanzas se transmiten a través de un sistema de grados
              progresivos — doce en total — que el miembro estudia a su propio
              ritmo, generalmente desde casa, a través de monografías que la
              Orden envía periódicamente. Cada grado profundiza más en los
              principios de la filosofía rosacruz: la naturaleza del alma, las
              leyes del universo, la alquimia interior, la relación entre lo
              visible y lo invisible.
            </p>
            <p>
              Lo que distingue a la AMORC de una simple escuela de filosofía
              es su dimensión iniciática: hay rituales, símbolos y experiencias
              que solo tienen sentido cuando se viven desde dentro. Como en la
              masonería, el conocimiento no se da — se descubre.
            </p>
          </Section>

          <Divider />

          <Section id="origenes">
            <H2>Los orígenes: del Antiguo Egipto al siglo XVII</H2>
            <p>
              La AMORC afirma que sus orígenes se remontan al Antiguo Egipto,
              concretamente al reinado del faraón Tutmosis III, hacia el año
              1500 a.C. Según la tradición de la Orden, fue entonces cuando
              se establecieron las primeras escuelas de misterios — círculos
              de iniciados que transmitían en secreto un conocimiento sobre la
              naturaleza del universo y del ser humano que no podía
              compartirse abiertamente.
            </p>
            <p>
              De Egipto, según esta tradición, el conocimiento pasó a Grecia
              — donde influyó en Pitágoras, Platón y Sócrates — y luego a
              Roma. Durante la Edad Media sobrevivió en la clandestinidad,
              bajo diferentes nombres y formas, transmitido de maestro a
              discípulo en pequeños círculos iniciáticos.
            </p>
            <p>
              Los historiadores académicos son más cautelosos. No existe
              evidencia documental de una continuidad ininterrumpida desde
              el Egipto faraónico hasta hoy. Lo que sí es históricamente
              verificable es que el movimiento rosacruz tal como lo conocemos
              emerge en Europa en el siglo XVII, con la publicación de tres
              textos que sacudieron el mundo intelectual de su época.
            </p>

            <blockquote className="my-10 border-l-2 border-amber-500 pl-8">
              <p className="font-serif text-xl font-light italic leading-relaxed text-stone-200">
                "El rosacrucismo es un sistema de filosofía mística cuyo fin
                es el de guiar el desarrollo de la conciencia interna."
              </p>
              <cite className="mt-3 block text-sm text-stone-500 not-italic">
                — Definición oficial de la AMORC
              </cite>
            </blockquote>
          </Section>

          <Divider />

          <Section id="manifiestos">
            <H2>Los manifiestos rosacruces y Christian Rosenkreuz</H2>
            <p>
              En 1614, en Kassel, Alemania, apareció un texto anónimo
              titulado <em>Fama Fraternitatis</em> — "Fama de la Fraternidad".
              Describía la existencia de una hermandad secreta de sabios que
              poseían un conocimiento universal capaz de renovar la humanidad.
              Al año siguiente apareció la <em>Confessio Fraternitatis</em>,
              y en 1616 <em>Las Bodas Químicas de Christian Rosenkreuz</em>.
            </p>
            <p>
              El protagonista de estos textos era Christian Rosenkreuz —
              "Rosa Cruz" en alemán — un personaje que, según el relato,
              nació en 1378, viajó por Oriente Medio y el norte de África en
              busca del conocimiento secreto, regresó a Europa y fundó la
              Hermandad de la Rosa Cruz. Murió a los 106 años. Su tumba,
              cuando fue descubierta 120 años después de su muerte, contenía
              objetos de un saber incomprensible para la época.
            </p>
            <p>
              Hoy se atribuyen estos textos al teólogo luterano Johann Valentin
              Andreae, y la mayoría de los investigadores consideran que
              Christian Rosenkreuz es un personaje ficticio — una alegoría
              del buscador de conocimiento, no una persona real. Pero el
              impacto de los manifiestos fue enorme: desencadenaron una
              oleada de interés por el esoterismo en toda Europa y dieron
              origen a decenas de grupos y fraternidades que se reclamaban
              herederos de esa tradición.
            </p>

            <div className="my-8 space-y-5">
              {[
                {
                  title: "Fama Fraternitatis (1614)",
                  text: "El primer manifiesto. Describe la fundación de la Hermandad de la Rosa Cruz por Christian Rosenkreuz y llama a los sabios de Europa a unirse a la renovación universal del conocimiento.",
                },
                {
                  title: "Confessio Fraternitatis (1615)",
                  text: "El segundo manifiesto. Profundiza en las doctrinas de la Hermandad y en su visión del universo. Critica abiertamente al papado y a la alquimia charlatana.",
                },
                {
                  title: "Las Bodas Químicas (1616)",
                  text: "El tercer texto, el más literario. Narra el viaje alegórico de Christian Rosenkreuz a un castillo misterioso donde asiste a una serie de rituales iniciáticos. Es considerado uno de los textos fundacionales del esoterismo occidental.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-stone-800 bg-black/30 p-5">
                  <p className="mb-2 font-serif text-lg text-amber-400">{item.title}</p>
                  <p className="text-sm leading-relaxed text-stone-400">{item.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          <Section id="spencer-lewis">
            <H2>H. Spencer Lewis y la AMORC moderna</H2>
            <p>
              La AMORC como organización moderna fue fundada en 1915 en Nueva
              York por Harvey Spencer Lewis, un periodista e investigador
              esotérico americano que afirmaba haber sido iniciado en Francia
              en la tradición rosacruz durante un viaje a Europa.
            </p>
            <p>
              Lewis dio a la Orden una estructura que no había tenido antes:
              un sistema de grados progresivos, un método de enseñanza por
              correspondencia que permitía a cualquier persona del mundo
              acceder a las monografías desde casa, y una sede física
              permanente. En 1927 trasladó la sede a San José, California,
              donde construyó un complejo de edificios de inspiración
              egipcia — el Parque Rosacruz — que aún hoy es el centro mundial
              de la Orden.
            </p>
            <p>
              Durante la Segunda Guerra Mundial la AMORC tuvo un crecimiento
              extraordinario. Al terminar la guerra, muchas organizaciones
              rosacruces europeas que habían sido suprimidas por los regímenes
              totalitarios quedaron bajo la administración de San José. Desde
              entonces, la AMORC es con diferencia la mayor organización
              rosacruz del mundo.
            </p>
            <p>
              Lewis también estableció algo inusual para una organización
              esotérica: una política de transparencia relativa. La AMORC no
              oculta su existencia. Tiene web pública, publica libros, organiza
              eventos abiertos. Lo que sí protege es el contenido de sus
              enseñanzas — las monografías de cada grado solo están disponibles
              para los miembros que han llegado a ese nivel.
            </p>
          </Section>

          <Divider />

          <Section id="ensenanzas">
            <H2>Las enseñanzas: qué se aprende en la Orden</H2>
            <p>
              Las enseñanzas de la AMORC están organizadas en doce grados
              de estudio que el miembro recorre a lo largo de años. Cada
              grado profundiza en un aspecto diferente de lo que la Orden
              llama las "Ciencias Sagradas". Los temas incluyen:
            </p>

            <div className="my-8 space-y-4">
              {[
                { label: "Filosofía hermética", value: "La naturaleza del universo según las tradiciones de Hermes Trismegisto — la idea de que las leyes que rigen lo macrocósmico se reflejan en lo microcósmico: 'Como es arriba, es abajo'." },
                { label: "Psicología mística", value: "El estudio de la conciencia, el subconsciente, los estados alterados de percepción y la relación entre la mente y el cuerpo desde una perspectiva esotérica." },
                { label: "Alquimia interior", value: "No la alquimia de transformar metales — la alquimia como proceso de transformación personal. La purificación del ser hasta alcanzar su potencial más elevado." },
                { label: "Numerología y simbolismo", value: "El lenguaje de los números y los símbolos como vía de acceso a verdades que no pueden expresarse directamente con palabras." },
                { label: "Metafísica práctica", value: "Técnicas de meditación, visualización y concentración orientadas a desarrollar capacidades latentes en el ser humano." },
                { label: "Cosmología esotérica", value: "Una visión del universo que integra ciencia, filosofía y espiritualidad — la naturaleza del alma, su origen y su destino." },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-stone-700 pl-6">
                  <p className="mb-1 text-xs uppercase tracking-[0.25em] text-amber-500">{item.label}</p>
                  <p className="text-sm leading-relaxed text-stone-400">{item.value}</p>
                </div>
              ))}
            </div>

            <p>
              Lo que une todos estos temas es una premisa central: el ser
              humano tiene capacidades y conocimientos dormidos que pueden
              desarrollarse mediante el estudio y la práctica. La AMORC no
              dice que esas capacidades sean sobrenaturales — dice que son
              naturales, pero que la mayoría de las personas nunca las
              despiertan.
            </p>
          </Section>

          <Divider />

          <Section id="simbolismo">
            <H2>El simbolismo de la Rosa y la Cruz</H2>
            <p>
              El símbolo de la AMORC — y del rosacrucismo en general — es una
              rosa en el centro de una cruz. Es uno de los símbolos más ricos
              del esoterismo occidental, con capas de significado que se
              superponen y se complementan.
            </p>

            <div className="my-8 space-y-5">
              {[
                {
                  title: "La Cruz",
                  text: "Representa lo material, lo terrenal, las cuatro dimensiones del mundo físico. Es el plano de la existencia humana — el sufrimiento, el tiempo, el espacio. En la tradición rosacruz no es exclusivamente cristiana: es un símbolo universal de la condición humana.",
                },
                {
                  title: "La Rosa",
                  text: "Representa lo espiritual, lo divino, el florecimiento del alma. La rosa florece desde el centro de la cruz — desde el sufrimiento y la limitación surge la belleza y el desarrollo espiritual. También simboliza lo femenino, la intuición, el conocimiento interior.",
                },
                {
                  title: "La unión de ambos",
                  text: "La rosa sobre la cruz no es una victoria de lo espiritual sobre lo material ni viceversa — es su integración. El mensaje central del rosacrucismo: lo sagrado no está separado de lo cotidiano. El camino espiritual pasa por la vida, no la evita.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-stone-800 bg-black/30 p-5">
                  <p className="mb-2 font-serif text-lg text-amber-400">{item.title}</p>
                  <p className="text-sm leading-relaxed text-stone-400">{item.text}</p>
                </div>
              ))}
            </div>

            <p>
              Curiosamente, la rosa sobre la cruz era también parte del escudo
              heráldico de la familia del teólogo Martín Lutero. Algunos
              investigadores han señalado esto como un indicio de la conexión
              entre el protestantismo y las corrientes esotéricas del
              Renacimiento europeo.
            </p>
          </Section>

          <Divider />

          <Section id="salomon">
            <H2>La AMORC y el Templo de Salomón</H2>
            <p>
              La figura del rey Salomón ocupa un lugar central en la tradición
              de la AMORC. La Orden lo considera uno de sus maestros
              fundacionales — un receptor y transmisor del conocimiento
              esotérico que, según la tradición rosacruz, viene del Antiguo
              Egipto.
            </p>
            <p>
              En la visión de la AMORC, el Templo de Salomón no era solo un
              edificio religioso. Era una escuela de misterios — un espacio
              donde los iniciados podían acceder a enseñanzas que no estaban
              al alcance del público general. Las dimensiones del Templo, su
              disposición arquitectónica, sus objetos sagrados — todo tenía
              un significado esotérico que solo quienes habían sido preparados
              podían comprender.
            </p>
            <p>
              El Anillo de Salomón, en particular, representa en la tradición
              rosacruz el sello del conocimiento — la capacidad de acceder a
              dimensiones de la realidad ocultas para la mayoría. No se trata
              de magia en el sentido popular de la palabra, sino de una forma
              más profunda de percepción que el estudio y la iniciación pueden
              desarrollar.
            </p>
            <p>
              Esta conexión entre Salomón, el Templo, el Anillo y el
              conocimiento esotérico es el territorio que explora
              <em className="text-stone-300"> El Anillo de Salomón</em>. La
              AMORC no es una organización ficticia en la novela — es una
              organización real, con una historia documentada y una presencia
              activa en el mundo, que custodia una tradición de la que pocos
              conocen toda la profundidad.
            </p>
          </Section>

          <Divider />

          <Section id="espana">
            <H2>La AMORC en España y el mundo</H2>
            <p>
              La AMORC tiene presencia activa en España desde la primera mitad
              del siglo XX, aunque su historia en el país estuvo marcada por
              los avatares políticos del siglo. Durante el franquismo, como
              todas las organizaciones esotéricas e iniciáticas, la Orden
              tuvo que operar con extrema discreción.
            </p>
            <p>
              Hoy la Gran Logia Española de la AMORC tiene sede en Barcelona
              y cuenta con logias activas en las principales ciudades del
              país. España forma parte de la jurisdicción europea de la Orden,
              que coordina las actividades de los países de habla hispana y
              portuguesa en Europa.
            </p>
            <p>
              A nivel mundial, la AMORC tiene su sede central en el Parque
              Rosacruz de San José, California — un complejo de edificios de
              inspiración egipcia que incluye un museo, una biblioteca, un
              planetario y varios espacios de reunión y meditación. Es una
              de las pocas organizaciones esotéricas del mundo que tiene un
              campus permanente y abierto al público en parte de sus
              instalaciones.
            </p>

            <div className="my-8 space-y-4">
              {[
                { n: "1", text: "Más de 100 países con presencia activa de la AMORC." },
                { n: "2", text: "12 grados de enseñanza que el miembro recorre a su propio ritmo." },
                { n: "3", text: "Fundada en 1915 en Nueva York por H. Spencer Lewis." },
                { n: "4", text: "Sede mundial en San José, California, desde 1927." },
                { n: "5", text: "La mayor organización rosacruz del mundo, con decenas de miles de miembros activos." },
              ].map((item) => (
                <div key={item.n} className="flex gap-5">
                  <span className="mt-1 shrink-0 font-serif text-lg text-amber-500/50">{item.n}.</span>
                  <p className="text-stone-400">{item.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          <Section id="faq">
            <H2>Preguntas frecuentes sobre la AMORC</H2>
            <div className="my-6 space-y-6">
              {[
                {
                  q: "¿Es la AMORC una secta?",
                  a: "No según las definiciones académicas más aceptadas. La AMORC no aísla a sus miembros, no exige la renuncia a otras creencias, no ejerce control coercitivo sobre sus miembros y no les impide abandonar la Orden. Es una organización filosófica e iniciática que transmite un conjunto de enseñanzas esotéricas a través de un sistema de grados.",
                },
                {
                  q: "¿Hay que abandonar la propia religión para unirse a la AMORC?",
                  a: "No. La AMORC acepta miembros de cualquier tradición religiosa y no exige que sus miembros abandonen sus creencias previas. Se presenta como complementaria a las religiones, no como sustituta. Entre sus miembros hay católicos, protestantes, judíos, musulmanes y agnósticos.",
                },
                {
                  q: "¿Qué relación tiene la AMORC con la masonería?",
                  a: "Comparten raíces históricas en las corrientes esotéricas del Renacimiento europeo y en el simbolismo del Templo de Salomón, pero son organizaciones distintas con estructuras, enseñanzas y rituales diferentes. Algunos masones son también miembros de la AMORC, y viceversa, pero no existe ninguna relación orgánica entre las dos organizaciones.",
                },
                {
                  q: "¿Existía realmente la AMORC en los tiempos del Anillo de Salomón?",
                  a: "La AMORC como organización formal fue fundada en 1915. Lo que sí afirma la Orden es que su tradición de enseñanzas — la sabiduría esotérica que transmite — tiene raíces que se remontan al Antiguo Egipto y que fue transmitida a través de diferentes vehículos a lo largo de los siglos. La distinción entre la Orden como institución y la tradición que transmite es importante.",
                },
                {
                  q: "¿Cómo se puede contactar con la AMORC?",
                  a: "La AMORC tiene web pública en amorc.org y gran-logia-espanola.org para España. Es posible solicitar información y, si se desea, comenzar el proceso de afiliación a través de sus canales oficiales. La Orden no hace proselitismo — son los interesados quienes dan el primer paso.",
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
              La AMORC en la novela
            </p>
            <p className="mb-5 font-serif text-2xl font-light leading-relaxed text-stone-200">
              Algunos custodios llevan siglos esperando que alguien llegue demasiado lejos.
            </p>
            <div className="space-y-4 text-base leading-relaxed text-stone-400">
              <p>
                La AMORC no es un elemento decorativo en
                <em className="text-stone-300"> El Anillo de Salomón</em> — es
                una fuerza real en la trama. Una organización con siglos de
                historia, con acceso a conocimientos que muy pocos poseen, y
                con razones muy concretas para que algunos secretos no salgan
                nunca a la luz.
              </p>
              <p>
                Cuando el arqueólogo Álvaro Ballester se acerca demasiado al
                Anillo de Salomón, no solo tiene enfrente a sus antagonistas
                directos. Tiene enfrente a una tradición de custodia que
                lleva operando, en silencio, desde antes de que existiera
                ningún estado moderno.
              </p>
              <p className="text-stone-300">
                Algunas puertas están cerradas por una razón.
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

          {/* Volver */}
          <div className="mt-16 border-t border-stone-800 pt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/blog" className="text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400">
              ← Volver a Tras las páginas
            </Link>
            <Link href="/blog/caballeros-templarios-historia-secretos-maldicion" className="text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400">
              Leer también: Los Templarios →
            </Link>
          </div>

        </div>
      </article>
    </main>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 mt-2 scroll-mt-24 font-serif text-3xl font-light leading-snug text-stone-100">
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

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mb-4 scroll-mt-24 space-y-5 text-base leading-relaxed text-stone-300">
      {children}
    </section>
  );
}

function Divider() {
  return <div className="my-12 border-t border-stone-800" />;
}
