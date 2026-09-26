import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "El Templo de Salomón: historia, secretos y el misterio que sigue vivo",
  description:
    "El Templo de Salomón fue el edificio más sagrado de la antigüedad. Descubre su construcción, sus tesoros perdidos, la leyenda de Hiram Abif y su influencia en la masonería.",
};

export default function PostTemploSalomon() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* ── HERO DEL POST ── */}
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
            El Templo de Salomón: historia, secretos y el misterio que sigue vivo
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-stone-400">
            Fue el edificio más sagrado que jamás construyó el pueblo de Israel.
            Albergó el objeto más poderoso de la antigüedad. Lo destruyeron en
            586 a.C. Y desde entonces, el mundo no ha dejado de buscarlo —
            en sus ruinas, en sus leyendas, en los rituales que lo evocan cada
            noche en miles de logias masónicas de todo el mundo.
          </p>

          <div className="flex flex-wrap items-center gap-6 border-t border-stone-800 pt-6 text-xs uppercase tracking-[0.2em] text-stone-600">
            <span>Miguel Secades</span>
            <span>·</span>
            <span>Septiembre 2026</span>
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
              Hay edificios que marcan una época. Y hay edificios que marcan la
              historia de la humanidad entera. El Templo de Salomón pertenece a
              esta segunda categoría — no solo por su magnificencia arquitectónica,
              sino por lo que representó, por lo que guardó dentro y por el
              vacío que dejó cuando desapareció.
            </p>
            <p>
              Más de dos mil seiscientos años después de su destrucción, el
              Templo sigue vivo. En los rituales masónicos. En las leyendas
              templarias. En la pregunta que no tiene respuesta: ¿qué pasó con
              sus tesoros?
            </p>
          </div>

          <Divider />

          <Section>
            <H2>El hombre que lo construyó — y el padre que lo soñó</H2>
            <p>
              Para entender el Templo hay que entender primero a los dos hombres
              que lo hicieron posible. El primero fue David, el rey guerrero que
              unificó Israel y conquistó Jerusalén. David quería construir una
              Casa para Dios — un lugar permanente donde residiera la presencia
              divina en lugar del Tabernáculo portátil que el pueblo llevaba
              cargando desde los tiempos de Moisés. Dios le dijo que no: David
              había derramado demasiada sangre. La Casa la construiría su hijo.
            </p>
            <p>
              Ese hijo fue Salomón. Gobernó Israel aproximadamente entre el 970
              y el 931 a.C., durante el período de mayor esplendor del reino
              unificado. Y la obra que lo definiría para la eternidad comenzó en
              el cuarto año de su reinado, alrededor del año 966 a.C., en la
              colina de Moriah — el mismo lugar donde, según la tradición,
              Abraham había estado dispuesto a sacrificar a su hijo Isaac.
            </p>
            <H3>La construcción: un proyecto sin precedentes</H3>
            <p>
              Las dimensiones del Templo, tal como las describe el Libro de los
              Reyes, eran extraordinarias para su época: aproximadamente 27
              metros de largo, 9 de ancho y 13 de alto. No era un edificio
              masivo en términos modernos, pero su riqueza y su precisión
              constructiva no tenían paralelo en la región.
            </p>
            <p>
              Para llevarlo a cabo, Salomón negoció con Hiram, rey de Tiro —
              la gran potencia fenicia del Mediterráneo oriental. Hiram le
              proporcionó madera de cedro del Líbano, uno de los materiales más
              preciados de la antigüedad, así como artesanos especializados.
              Entre ellos, un maestro del metal de nombre extraordinariamente
              significativo: Hiram Abif.
            </p>
          </Section>

          <Divider />

          <Section>
            <H2>La arquitectura del sagrado: lo que había dentro</H2>
            <p>
              El Templo estaba dividido en tres zonas de acceso progresivamente
              restringido, cada una más sagrada que la anterior:
            </p>

            <div className="my-8 space-y-5">
              {[
                {
                  title: "El Ulam — el pórtico",
                  text: "La entrada al Templo. Aquí se encontraban las dos columnas de bronce más famosas de la antigüedad: Jaquín, a la derecha, y Boaz, a la izquierda. Construidas por Hiram Abif, medían aproximadamente ocho metros de altura y no tenían función estructural — eran puramente simbólicas. Jaquín significa 'Él establecerá' y Boaz 'En él hay fuerza'. Más de dos milenios después, estas dos columnas siguen presidiendo la entrada de cada logia masónica del mundo.",
                },
                {
                  title: "El Hekal — el lugar santo",
                  text: "La sala principal del Templo, donde solo podían entrar los sacerdotes. Aquí se encontraba el altar de incienso de oro, la mesa de los panes de la proposición y diez candelabros de oro. Las paredes estaban revestidas de madera de cedro tallada con querubines, palmeras y flores, y recubiertas de oro puro. El suelo era también de oro.",
                },
                {
                  title: "El Debir — el Santo de los Santos",
                  text: "La cámara más interior, completamente oscura, sin ventanas ni luz. Un cubo perfecto de nueve metros de lado. Aquí residía el Arca de la Alianza, custodiada por dos querubines de madera de olivo recubiertos de oro con las alas extendidas. Solo el Sumo Sacerdote podía entrar — una vez al año, el Día de la Expiación, con incienso y la sangre del sacrificio.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-stone-800 bg-black/30 p-5">
                  <p className="mb-2 font-serif text-lg text-amber-400">{item.title}</p>
                  <p className="text-sm leading-relaxed text-stone-400">{item.text}</p>
                </div>
              ))}
            </div>

            <p>
              En torno al edificio principal se extendían los patios, los
              depósitos, las dependencias sacerdotales y el famoso Mar de
              Bronce — una gigantesca fuente circular de más de cuatro metros
              de diámetro sostenida por doce toros de bronce, también obra de
              Hiram Abif, que servía para las purificaciones rituales.
            </p>
          </Section>

          <Divider />

          <Section>
            <H2>Hiram Abif: el arquitecto que se convirtió en leyenda</H2>
            <p>
              La Biblia menciona a Hiram Abif de forma breve: era el maestro
              artesano del metal enviado por el rey Hiram de Tiro, hijo de una
              mujer de la tribu de Neftalí. Fue el creador de las columnas
              Jaquín y Boaz, del Mar de Bronce y de los principales ornamentos
              metálicos del Templo. Eso es todo lo que dice el texto sagrado.
            </p>
            <p>
              Pero en el mundo de la masonería, Hiram Abif se convirtió en
              algo mucho mayor: el héroe central del ritual más importante de
              la Orden, el grado de Maestro Masón.
            </p>

            <blockquote className="my-10 border-l-2 border-amber-500 pl-8">
              <p className="font-serif text-xl font-light italic leading-relaxed text-stone-200">
                "Según la leyenda masónica, tres aprendices intentaron arrancarle
                a Hiram la palabra secreta del Maestro. Al negarse, fue asesinado.
                Su tumba fue descubierta por sus compañeros que lo buscaban.
                Su muerte y su búsqueda son el corazón del ritual iniciático
                más importante de la masonería."
              </p>
            </blockquote>

            <p>
              Esta leyenda no tiene base bíblica — ningún texto sagrado narra
              nada semejante. Es una construcción iniciática elaborada entre
              los siglos XVII y XVIII que convierte a Hiram en símbolo de la
              lealtad al conocimiento y de la muerte que precede a la
              resurrección espiritual. Su figura, junto con las columnas
              Jaquín y Boaz, hace del Templo de Salomón el corazón simbólico
              de toda la tradición masónica.
            </p>
          </Section>

          <Divider />

          <Section>
            <H2>Las columnas Jaquín y Boaz: el símbolo que sobrevivió al Templo</H2>
            <p>
              De todos los elementos del Templo, ninguno ha tenido una vida
              simbólica tan larga como las dos columnas del pórtico. Construidas
              en bronce por Hiram Abif, representaban en origen las promesas
              divinas a la dinastía davídica.
            </p>
            <p>
              Cuando los babilonios destruyeron el Templo en 586 a.C., las
              columnas fueron quebradas y el bronce llevado a Babilonia. Pero
              su significado sobrevivió a su destrucción física y fue
              creciendo durante siglos hasta convertirse en uno de los símbolos
              más reconocibles del esoterismo occidental.
            </p>

            <div className="my-8 space-y-4">
              {[
                { label: "En la masonería", value: "Toda logia masónica tiene dos columnas a la entrada, marcadas con J y B, que reproducen simbólicamente el pórtico del Templo. Representan la dualidad: fuerza y establecimiento, lo masculino y lo femenino, lo terrenal y lo celeste." },
                { label: "En la Cábala", value: "Las columnas corresponden a dos de los pilares del Árbol de la Vida: Boaz (columna de la misericordia) y Jaquín (columna de la fuerza), con el pilar central del equilibrio entre ambas." },
                { label: "En el Tarot", value: "Las dos columnas aparecen en la carta de la Sacerdotisa, flanqueando su trono, como guardas del umbral entre el mundo visible y el oculto." },
                { label: "En la arquitectura", value: "Desde las catedrales góticas hasta el Capitolio de Washington, el simbolismo de los dos pilares en la entrada de los edificios sagrados y civiles tiene sus raíces en el pórtico del Templo de Salomón." },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-stone-700 pl-6">
                  <p className="mb-1 text-xs uppercase tracking-[0.25em] text-amber-500">{item.label}</p>
                  <p className="text-sm leading-relaxed text-stone-400">{item.value}</p>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          <Section>
            <H2>La destrucción y los tesoros perdidos</H2>
            <p>
              El Templo de Salomón existió durante casi cuatrocientos años.
              En ese tiempo fue saqueado varias veces — por el faraón egipcio
              Sisac en el año 925 a.C., apenas tres décadas después de su
              inauguración, y por Nabucodonosor de Babilonia en el 598 a.C.
            </p>
            <p>
              Pero el golpe definitivo llegó en el 586 a.C. Tras dieciocho
              meses de asedio, Jerusalén cayó. El Templo fue saqueado y luego
              quemado. El pueblo judío fue deportado a Babilonia, iniciando
              el período conocido como el Exilio Babilónico. La destrucción
              fue tan completa que hoy no existe un solo fragmento
              arquitectónico identificado con certeza como parte del Primer
              Templo.
            </p>
            <p>
              Los textos babilónicos detallan los objetos llevados como botín
              de guerra: vasijas de oro y plata, los pilares de bronce, el Mar
              de Bronce. Pero guardan un silencio absoluto sobre el objeto más
              importante de todos.
            </p>
            <H3>El enigma del Arca</H3>
            <p>
              El Arca de la Alianza no aparece en ninguna lista de botín
              babilónico. No aparece destruida. No aparece escondida. Sencillamente
              desaparece de los textos. Como ya exploré en el artículo sobre
              el Arca de la Alianza, las teorías sobre su paradero van desde
              una cámara subterránea bajo el Monte del Templo hasta la ciudad
              etíope de Axum, donde la Iglesia ortodoxa etíope afirma
              custodiarla desde hace más de dos milenios.
            </p>
            <p>
              Lo que sí sabemos es que la destrucción del Templo fue un
              punto de inflexión teológico tan profundo que transformó el
              judaísmo para siempre. Sin Templo, sin el lugar físico donde
              Dios residía entre los hombres, el pueblo judío tuvo que
              reinventarse: nació la sinagoga, la oración sustituyó al
              sacrificio, y la Torá se convirtió en el centro de la vida
              religiosa.
            </p>
          </Section>

          <Divider />

          <Section>
            <H2>Los Templarios y el Monte del Templo</H2>
            <p>
              En el año 1119, nueve caballeros cruzados fundaron una orden
              militar en Jerusalén. Su sede: las caballerizas del rey, en el
              Monte del Templo — exactamente donde había estado el Templo de
              Salomón. Se llamaron a sí mismos los Pobres Caballeros de Cristo
              y del Templo de Salomón. La historia los conoce como los Caballeros
              Templarios.
            </p>
            <p>
              Durante décadas, los nueve caballeros fundadores vivieron en
              ese emplazamiento sin aparente actividad militar. Lo que hacían
              exactamente durante ese tiempo es una de las preguntas que
              ha alimentado siglos de especulación. Las teorías van desde
              excavaciones secretas en busca de tesoros del Templo — el Arca,
              el Santo Grial, documentos que probarían verdades prohibidas —
              hasta interpretaciones más mundanas sobre su papel diplomático
              y religioso.
            </p>
            <p>
              Lo que sí es cierto es que cuando los Templarios regresaron a
              Europa, eran una orden extraordinariamente poderosa y rica, con
              conocimientos financieros y arquitectónicos que revolucionaron
              el continente. Y que su disolución violenta en 1307 — con el
              Gran Maestre Jacques de Molay quemado en la hoguera — dejó
              abierta la pregunta sobre qué sabían realmente y qué se llevaron
              del Monte del Templo.
            </p>

            <blockquote className="my-10 border-l-2 border-amber-500 pl-8">
              <p className="font-serif text-xl font-light italic leading-relaxed text-stone-200">
                "Algunos mitos sugieren que los Templarios podrían haber
                estado interesados en objetos vinculados al Templo de Salomón,
                como el Arca de la Alianza u otros tesoros. Es crucial destacar
                que gran parte de esta mitología ha sido influenciada por
                novelas, leyendas y especulaciones."
              </p>
            </blockquote>
          </Section>

          <Divider />

          <Section>
            <H2>El Templo de Salomón y la masonería: un vínculo eterno</H2>
            <p>
              De todas las tradiciones que han adoptado el Templo como símbolo
              central, ninguna lo ha hecho con tanta profundidad como la
              masonería. El Templo no es para los masones un edificio histórico
              — es una metáfora del ser humano en construcción.
            </p>
            <p>
              Cada logia masónica reproduce simbólicamente el Templo: las dos
              columnas en la entrada, la orientación del espacio, la división
              en grados de iniciación que recuerda la división entre el Ulam,
              el Hekal y el Debir. El ritual del Maestro Masón recrea la muerte
              y resurrección de Hiram Abif. El candidato al grado de Maestro
              simboliza al propio arquitecto del Templo.
            </p>
            <p>
              La masonería adoptó el Templo como su símbolo fundacional
              precisamente porque encarna sus valores centrales: la búsqueda
              del conocimiento, la perfección a través del trabajo, la
              fraternidad entre los constructores. El maestro artesano que da
              su vida por no revelar los secretos de su oficio es el modelo
              del masón ideal.
            </p>

            <div className="my-8 space-y-4">
              {[
                { n: "1", text: "Las dos columnas Jaquín y Boaz presiden la entrada de cada logia del mundo, recordando el pórtico del Templo." },
                { n: "2", text: "El ritual del grado de Maestro Masón recrea la leyenda de Hiram Abif, el arquitecto del Templo." },
                { n: "3", text: "El propio término 'logia' deriva de los talleres de los constructores medievales que se organizaban en logias para trabajar en las grandes catedrales." },
                { n: "4", text: "La orden de los Rosacruces — que juega un papel central en El Anillo de Salomón — también considera el Templo como uno de sus símbolos fundacionales." },
              ].map((item) => (
                <div key={item.n} className="flex gap-5">
                  <span className="mt-1 shrink-0 font-serif text-lg text-amber-500/50">{item.n}.</span>
                  <p className="text-stone-400">{item.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          <Section>
            <H2>Lo que dice la arqueología</H2>
            <p>
              La arqueología moderna ha excavado extensamente en Jerusalén y
              sus alrededores. Y el resultado es paradójico: no existe un solo
              fragmento arquitectónico identificado con certeza como perteneciente
              al Primer Templo de Salomón.
            </p>
            <p>
              Esto no significa que el Templo no existiera. El Monte del Templo
              — donde hoy se alza la Cúpula de la Roca y la Mezquita de
              Al-Aqsa — es políticamente inaccesible para excavaciones
              arqueológicas. Las restricciones religiosas y políticas hacen
              imposible cualquier investigación directa en el lugar exacto
              donde estuvo el Templo.
            </p>
            <p>
              Sin embargo, la arqueología ha encontrado evidencias indirectas.
              En 2004 se estableció el Proyecto de Tamizado del Monte del Templo,
              que analiza la tierra removida ilegalmente por las autoridades
              islámicas durante obras de construcción. Entre los hallazgos:
              cerámicas del período del Primer Templo, sellos administrativos
              y objetos cultuales compatibles con las descripciones bíblicas.
            </p>
            <p>
              El paralelo arqueológico más cercano al Templo de Salomón es el
              templo de Ain Dara, en Siria, descubierto en los años 80 del
              siglo XX. Sus dimensiones, su diseño tripartito y su decoración
              con querubines y leones son extraordinariamente similares a las
              descripciones bíblicas del Templo de Salomón, confirmando que
              el tipo arquitectónico descrito en la Biblia era real y conocido
              en la región.
            </p>
          </Section>

          <Divider />

          {/* FAQ */}
          <Section>
            <H2>Preguntas frecuentes sobre el Templo de Salomón</H2>
            <div className="my-6 space-y-6">
              {[
                {
                  q: "¿Existió realmente el Templo de Salomón?",
                  a: "La mayoría de los historiadores aceptan que existió un templo importante en el Monte del Templo de Jerusalén durante el período del Hierro II (siglos X-VI a.C.). Las evidencias arqueológicas indirectas y los paralelos arquitectónicos de la región respaldan la descripción bíblica. Sin embargo, no se ha encontrado ningún fragmento arquitectónico identificado con certeza como parte del Primer Templo.",
                },
                {
                  q: "¿Qué pasó con los tesoros del Templo?",
                  a: "Los textos babilónicos confirman que Nabucodonosor se llevó utensilios de oro y plata, las columnas de bronce y el Mar de Bronce. Sobre el Arca de la Alianza — el objeto más sagrado del Templo — los textos guardan silencio absoluto. Su paradero sigue siendo uno de los grandes misterios de la historia.",
                },
                {
                  q: "¿Qué son las columnas Jaquín y Boaz?",
                  a: "Eran dos columnas de bronce de aproximadamente ocho metros de altura que flanqueaban el pórtico del Templo. Las construyó Hiram Abif por orden de Salomón. No tenían función estructural — eran puramente simbólicas. Sus nombres significan 'Él establecerá' (Jaquín) y 'En él hay fuerza' (Boaz). Fueron destruidas por los babilonios en 586 a.C., pero su simbolismo sobrevivió y hoy preside la entrada de cada logia masónica del mundo.",
                },
                {
                  q: "¿Por qué los Templarios se instalaron en el Monte del Templo?",
                  a: "La explicación oficial es que el rey Balduino II de Jerusalén les cedió sus caballerizas, situadas en el Monte del Templo, como sede. Las teorías alternativas sugieren que los nueve caballeros fundadores eligieron ese emplazamiento deliberadamente en busca de tesoros o conocimientos ocultos relacionados con el Templo de Salomón. No existe evidencia histórica concluyente de excavaciones templarias en el lugar.",
                },
                {
                  q: "¿Por qué es tan importante el Templo de Salomón para la masonería?",
                  a: "La masonería adoptó el Templo como símbolo central porque representa la obra perfecta — la construcción más magnífica y significativa que la humanidad ha emprendido en nombre de lo sagrado. El arquitecto del Templo, Hiram Abif, es el héroe del ritual iniciático más importante de la Orden. Las columnas Jaquín y Boaz simbolizan los principios duales que estructuran la cosmovisión masónica.",
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
              El Templo en la novela
            </p>
            <p className="mb-5 font-serif text-2xl font-light leading-relaxed text-stone-200">
              Jaquín y Boaz. El Arca. Los secretos que nadie debería encontrar.
            </p>
            <div className="space-y-4 text-base leading-relaxed text-stone-400">
              <p>
                El universo del Templo de Salomón — sus columnas, sus tesoros,
                sus sociedades secretas — es el territorio en el que se mueve
                el arqueólogo Álvaro Ballester en <em className="text-stone-300">El Anillo de Salomón</em>.
                Un papiro sumerio. Una carrera desde Madrid hasta Axum. Y la
                certeza de que algunos secretos llevan siglos siendo custodiados
                por quienes no están dispuestos a compartirlos.
              </p>
              <p className="text-stone-300">
                La historia del Templo no terminó en 586 a.C. Solo cambió de forma.
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
  return (
    <section className="mb-4 space-y-5 text-base leading-relaxed text-stone-300">
      {children}
    </section>
  );
}

function Divider() {
  return <div className="my-12 border-t border-stone-800" />;
}
