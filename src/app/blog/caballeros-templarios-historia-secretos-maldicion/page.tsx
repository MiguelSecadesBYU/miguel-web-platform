import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Los Caballeros Templarios: historia, secretos y la maldición que cambió el mundo",
  description:
    "Los Templarios fueron guerreros, banqueros y custodios de secretos prohibidos. Descubre su origen, sus tesoros perdidos, el viernes 13 y la maldición de Jacques de Molay.",
  openGraph: {
    title: "Los Caballeros Templarios: historia, secretos y la maldición que cambió el mundo",
    description:
      "Nueve caballeros en Jerusalén. Dos siglos de poder sin precedentes. Una caída en viernes 13. Y una maldición que algunos dicen que aún no se ha cumplido del todo.",
    url: "https://www.miguelsecades.com/blog/caballeros-templarios-historia-secretos-maldicion",
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
    title: "Los Caballeros Templarios: historia, secretos y la maldición que cambió el mundo",
    description:
      "Nueve caballeros, dos siglos de poder, una caída en viernes 13 y una maldición que resuena hasta hoy.",
    images: ["/images/books/Portada-El_Anillo_de_Salomon.jpg"],
  },
  alternates: {
    canonical: "https://www.miguelsecades.com/blog/caballeros-templarios-historia-secretos-maldicion",
  },
};

export default function PostTemplarios() {
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
            Los Caballeros Templarios: historia, secretos y la maldición que cambió el mundo
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-stone-400">
            Nueve caballeros en Jerusalén. Dos siglos de poder sin precedentes.
            Una caída en viernes 13. Y una maldición pronunciada en la hoguera
            que, según algunos, todavía no se ha cumplido del todo.
          </p>

          <div className="flex flex-wrap items-center gap-6 border-t border-stone-800 pt-6 text-xs uppercase tracking-[0.2em] text-stone-600">
            <span>Miguel Secades</span>
            <span>·</span>
            <span>Octubre 2026</span>
            <span>·</span>
            <span>Lectura: 15 min</span>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <article className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl">

          {/* Índice de contenidos */}
          <nav className="mb-12 border border-amber-500/20 bg-amber-500/5 p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber-500">
              En este artículo
            </p>
            <ol className="space-y-2 text-sm text-stone-400">
              {[
                ["El origen: nueve caballeros en Jerusalén", "#origen"],
                ["Del Templo de Salomón a Europa: el ascenso", "#ascenso"],
                ["Los Templarios como banco de Europa", "#banca"],
                ["Los tesoros y secretos que buscaron", "#tesoros"],
                ["El viernes 13 de octubre de 1307", "#caida"],
                ["La maldición de Jacques de Molay", "#maldicion"],
                ["Los Templarios y la masonería", "#masoneria"],
                ["Los Templarios en España", "#espana"],
                ["Preguntas frecuentes", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="transition hover:text-amber-400"
                  >
                    {label} →
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Intro */}
          <div className="mb-12 space-y-5 text-lg leading-relaxed text-stone-300">
            <p>
              Pocas organizaciones en la historia han generado tanto poder en
              tan poco tiempo — ni han caído de forma tan brutal. Los Caballeros
              Templarios existieron menos de doscientos años. En ese tiempo
              construyeron el primer sistema bancario internacional de Europa,
              lucharon en las Cruzadas, acumularon una riqueza que despertó la
              codicia de reyes y papas, y se convirtieron en los custodios de
              secretos que nadie ha podido verificar del todo.
            </p>
            <p>
              Su historia real es más apasionante que cualquier leyenda. Y su
              sombra llega hasta hoy.
            </p>
          </div>

          <Divider />

          {/* Sección 1 */}
          <Section id="origen">
            <H2>El origen: nueve caballeros en Jerusalén</H2>
            <p>
              En el año 1099, la Primera Cruzada culminó con la conquista de
              Jerusalén. Los peregrinos cristianos comenzaron a llegar en masa
              a Tierra Santa. Y los bandidos comenzaron a atacarlos en los
              caminos, matándolos y robándoles. Los caminos de Palestina eran
              extraordinariamente peligrosos.
            </p>
            <p>
              Hacia 1119, un caballero francés llamado Hugo de Payns y ocho
              compañeros más se presentaron ante Balduino II, rey de Jerusalén,
              con una propuesta: crear una orden de caballeros que se dedicara
              exclusivamente a proteger a esos peregrinos. El rey aceptó y les
              cedió como sede una parte de su palacio — un edificio construido
              sobre lo que se creía que era el solar del Templo de Salomón.
            </p>
            <p>
              El nombre lo eligió el lugar: se llamarían los <em>Pobres
              Caballeros de Cristo y del Templo de Salomón</em>. La historia
              los conocería simplemente como los Templarios.
            </p>
            <H3>El primer misterio: ¿qué hacían realmente esos nueve años?</H3>
            <p>
              Durante los primeros nueve años de su existencia, los nueve
              caballeros fundadores vivieron en el Monte del Templo sin crecer
              en número y sin actividad militar aparente. Eso es lo que dicen
              los textos. Lo que hacían exactamente durante ese tiempo — si es
              que hacían algo fuera de lo ordinario — es la primera gran
              pregunta sin respuesta de su historia.
            </p>
            <p>
              Las teorías van desde las mundanas hasta las extraordinarias.
              Algunos historiadores creen que simplemente eran pocos y pobres,
              esperando reclutas. Otros sostienen que esos nueve años fueron
              un pretexto: que los caballeros fundadores excavaron bajo el
              Monte del Templo en busca de tesoros o conocimientos enterrados
              desde los tiempos de Salomón. Si encontraron algo, nunca lo
              dijeron.
            </p>
          </Section>

          <Divider />

          {/* Sección 2 */}
          <Section id="ascenso">
            <H2>Del Templo de Salomón a Europa: el ascenso</H2>
            <p>
              En 1129, el Concilio de Troyes reconoció oficialmente la Orden
              y redactó su regla. Fue el punto de inflexión. Desde ese momento,
              los Templarios crecieron a una velocidad que no tenía precedentes
              en la historia medieval.
            </p>
            <p>
              El impulsor clave fue Bernardo de Claraval, el monje más
              influyente de su época y tío de uno de los fundadores, que
              escribió el tratado <em>De laude novae militiae</em> —
              "En alabanza de la nueva milicia" — convirtiendo a los Templarios
              en el ideal del guerrero cristiano: hombres que eran a la vez
              monjes y soldados, que habían renunciado a todo lo mundano para
              servir a Dios con la espada.
            </p>
            <p>
              Las donaciones llegaron de toda Europa. Tierras, castillos, rentas,
              heredades. En cincuenta años, hacia 1170, la Orden estaba presente
              en Francia, Alemania, Inglaterra, España y Portugal. En su momento
              de máximo esplendor llegaron a tener entre 15.000 y 20.000
              miembros, aunque solo el 10% eran caballeros combatientes. El
              resto eran sargentos, artesanos, administradores y trabajadores
              que sostenían la inmensa maquinaria logística de la Orden.
            </p>

            <blockquote className="my-10 border-l-2 border-amber-500 pl-8">
              <p className="font-serif text-xl font-light italic leading-relaxed text-stone-200">
                "Nunca tan pocos llegaron a tanto. La historia de los Templarios
                es la historia de cómo nueve hombres sin recursos construyeron
                en dos siglos un imperio que desafió a reyes y papas."
              </p>
            </blockquote>
          </Section>

          <Divider />

          {/* Sección 3 */}
          <Section id="banca">
            <H2>Los Templarios como banco de Europa</H2>
            <p>
              El aspecto menos romántico y más revolucionario de los Templarios
              fue su sistema financiero. Y es, quizás, el legado que más ha
              perdurado.
            </p>
            <p>
              El problema que resolvieron era concreto: un peregrino que quería
              ir a Jerusalén tenía que llevar consigo todo el oro necesario para
              el viaje. En los caminos de Europa y Tierra Santa, eso equivalía
              a llevar una señal en la espalda para los bandidos.
            </p>
            <p>
              Los Templarios inventaron una solución elegante: el peregrino
              depositaba su oro en la encomienda templaria de su ciudad, recibía
              un documento cifrado con el valor del depósito, y al llegar a
              Jerusalén lo canjeaba por la cantidad equivalente en la encomienda
              local. En cierto sentido, era un antecedente de los modernos sistemas 
              de transferencia de dinero.
            </p>

            <div className="my-8 space-y-5">
              {[
                {
                  title: "Cuentas corrientes",
                  text: "Los nobles y reyes europeos podían abrir cuentas en las encomiendas templarias y realizar pagos sin mover físicamente el oro. Luis IX de Francia, conocido como San Luis, utilizó los Templarios como su banco personal durante las Cruzadas.",
                },
                {
                  title: "Préstamos a la Corona",
                  text: "Los Templarios prestaban dinero a los reyes de Europa. Esto les daba un poder enorme — y creaba enemistades peligrosas. El rey Felipe IV de Francia les debía sumas colosales cuando ordenó su destrucción. La coincidencia nunca ha sido satisfactoriamente explicada.",
                },
                {
                  title: "Gestión de activos",
                  text: "La Orden gestionaba el cobro de rentas, la administración de propiedades y la contabilidad de nobles por toda Europa. Su red de encomiendas funcionaba como una red bancaria internacional 700 años antes de que existiera ese concepto.",
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

          {/* Sección 4 */}
          <Section id="tesoros">
            <H2>Los tesoros y secretos que buscaron</H2>
            <p>
              Ningún aspecto de los Templarios ha generado más especulación que
              lo que pudieron haber encontrado durante sus años en el Monte del
              Templo de Jerusalén. Las teorías principales son tres, y ninguna
              tiene pruebas concluyentes — ni ha sido completamente descartada.
            </p>

            <H3>El Arca de la Alianza</H3>
            <p>
              La teoría más extendida es que los Templarios excavaron bajo el
              Monte del Templo y encontraron el Arca de la Alianza, el objeto
              más sagrado del judaísmo antiguo, que había desaparecido en 586
              a.C. durante la destrucción babilónica del Primer Templo de
              Salomón.
            </p>
            <p>
              Los investigadores que defienden esta teoría señalan varias
              evidencias circunstanciales: existen pruebas arqueológicas de que
              los Templarios realizaron excavaciones en el Monte del Templo.
              La inscripción de la catedral de Chartres — construida en el
              área de influencia templaria — dice <em>"Hic dimittitur Archa
              Cederis"</em> ("Aquí queda depositada, obrarás según el Arca"),
              lo que algunos interpretan como una referencia explícita. Y hay
              numerosas referencias iconográficas al Arca en las primeras
              catedrales góticas de la región de Champaña, precisamente donde
              se concentraban los fundadores templarios.
            </p>
            <p>
              Algunas versiones de esta teoría sugieren que el Arca fue
              trasladada finalmente a la Capilla de Rosslyn, en Escocia,
              construida en 1447 por la familia Sinclair — que algunos vinculan
              con los supervivientes templarios.
            </p>

           <p>
            Nada de esto demuestra que los Templarios encontraran el Arca de la Alianza.
             La hipótesis pertenece al terreno de la tradición y la especulación histórica, 
             no al de la evidencia arqueológica demostrada.
            </p> 

            <H3>El Santo Grial</H3>
            <p>
              La asociación entre los Templarios y el Santo Grial es tan antigua
              como la propia leyenda del Grial. En el poema medieval
              <em> Parsifal</em>, de Wolfram von Eschenbach, el castillo donde
              se custodia el Grial está guardado por los <em>templaisin</em>.
              La leyenda artúrica y la tradición templaria se entrelazan desde
              el siglo XII de forma que los investigadores modernos aún
              debaten.
            </p>
            <p>
              La interpretación más heterodoxa — popularizada por el libro
              <em> El Santo Grial y la Sangre Real</em> y luego por Dan Brown
              en <em>El Código Da Vinci</em> — sugiere que el "Grial" no era
              un objeto sino un linaje: la descendencia de Jesucristo, cuyo
              secreto los Templarios habrían descubierto y protegido usando
              como instrumento de poder sobre la Iglesia.
            </p>

            <H3>Documentos prohibidos</H3>
            <p>
              Una tercera teoría, más sobria y quizás más probable, sugiere que
              lo que los Templarios encontraron no era un objeto sino
              conocimiento: textos, documentos, evangelios no canónicos que
              contradecían la doctrina oficial de la Iglesia. Si los Templarios
              poseían información capaz de desestabilizar al papado, eso
              explicaría tanto su poder desproporcionado como el ensañamiento
              con el que fueron destruidos.
            </p>
          </Section>

          <Divider />

          {/* Sección 5 */}
          <Section id="caida">
            <H2>El viernes 13 de octubre de 1307</H2>
            <p>
              El golpe fue coordinado con una precisión que no tenía precedentes.
              En la madrugada del viernes 13 de octubre de 1307, por orden del
              rey Felipe IV de Francia — apodado "el Hermoso" — todos los
              Templarios de Francia fueron arrestados simultáneamente. Las
              órdenes de detención habían sido redactadas en secreto el 14 de
              septiembre y distribuidas a todos los bailes y senescales del
              reino con instrucciones de no abrirlas hasta el amanecer del 13
              de octubre.
            </p>
            <p>
              El Gran Maestre Jacques de Molay fue arrestado en París junto
              con decenas de altos dignatarios de la Orden. Las acusaciones
              eran graves: herejía, blasfemia, idolatría, prácticas
              obscenas durante las ceremonias de iniciación, adoración de
              una cabeza llamada Baphomet. Muchos Templarios confessaron
              bajo tortura. Muchos se retractaron después.
            </p>
            <p>
              La enorme deuda de Felipe IV con los Templarios es uno de los factores 
              económicos que suelen señalarse para explicar la actuación de la Corona francesa.
              Historiadores y divulgadores han debatido cuánto pesaron esas circunstancias 
              económicas frente a las motivaciones políticas y religiosas.
              El papa Clemente V — elegido con el apoyo decisivo de Felipe y
              que había trasladado la sede papal a Aviñón, dentro de la esfera
              de influencia francesa — cedió a las presiones del rey y disolvió
              la Orden en el Concilio de Vienne en 1312.
            </p>
            <p>
              En 1314, Jacques de Molay y Godofredo de Charney fueron
              condenados a cadena perpetua. Pero al conocer la sentencia,
              ambos se retractaron públicamente de sus confesiones y
              proclamaron la inocencia de la Orden. Felipe IV, furioso,
              ordenó quemarlos vivos esa misma tarde en una pequeña isla
              del Sena, frente a la catedral de Notre-Dame.
            </p>
            <p>
              Ese viernes 13 de octubre de 1307 es, según muchos historiadores,
              el origen de la superstición del viernes 13 como día de mala
              suerte en la cultura occidental.
            </p>
          </Section>

          <Divider />

          {/* Sección 6 */}
          <Section id="maldicion">
            <H2>La maldición de Jacques de Molay</H2>
            <p>
              Según la tradición, mientras las llamas comenzaban a consumirlo,
              Jacques de Molay pronunció una maldición solemne: el papa Clemente
              V y el rey Felipe IV le seguirían ante el tribunal de Dios antes
              de que acabara el año.
            </p>
            <p>
              Lo que ocurrió después es histórico: el papa Clemente V murió
              el 20 de abril de 1314, menos de cinco semanas después de la
              ejecución. El rey Felipe IV murió el 29 de noviembre del mismo
              año, en una cacería, a los 46 años. Los tres hijos varones de
              Felipe — herederos directos de la corona — murieron sin
              descendencia masculina en menos de catorce años, extinguiendo
              la dinastía de los Capetos directos.
            </p>
            <p>
              ¿Coincidencia? Probablemente. Pero es una coincidencia que ha
              alimentado leyendas durante más de siete siglos.
            </p>

            <blockquote className="my-10 border-l-2 border-amber-500 pl-8">
              <p className="font-serif text-xl font-light italic leading-relaxed text-stone-200">
                "Papa Clemente. Caballero Guillaume de Nogaret. Rey Felipe.
                Antes de un año os cito a comparecer ante el tribunal de Dios
                para recibir vuestro justo castigo."
              </p>
              <cite className="mt-3 block text-sm text-stone-500 not-italic">
                — Palabras atribuidas a Jacques de Molay, 18 de marzo de 1314
              </cite>
            </blockquote>
          </Section>

          <Divider />

          {/* Sección 7 */}
          <Section id="masoneria">
            <H2>Los Templarios y la masonería</H2>
            <p>
              Una de las teorías más persistentes sobre el legado templario es
              que los supervivientes de la Orden — especialmente los que
              escaparon a Escocia, donde el poder del papa era más débil —
              dieron origen a la masonería moderna.
            </p>
            <p>
              La masonería especulativa tal como la conocemos hoy emerge en
              Gran Bretaña a principios del siglo XVIII. Pero desde el siglo
              XVIII, algunos ritos masónicos — especialmente el Rito Escocés
              Antiguo y Aceptado — incorporaron una narrativa templaria
              explícita: la venganza por la muerte de Jacques de Molay, la
              continuidad del conocimiento secreto de la Orden, la conexión
              con el Templo de Salomón.
            </p>
            <p>
              Los historiadores académicos son escépticos sobre una conexión
              directa e ininterrumpida entre los Templarios medievales y la
              masonería moderna. Pero la conexión simbólica es innegable: ambas
              tradiciones comparten el Templo de Salomón como referencia
              central, la figura de Hiram Abif, el énfasis en el secreto
              iniciático y la transmisión de un conocimiento que no puede
              decirse abiertamente.
            </p>
            <p>
              Hoy existe incluso una orden masónica específicamente templaria —
              los <em>Knights Templar</em> masónicos — activa en muchos países,
              que recoge explícitamente ese legado simbólico.
            </p>
          </Section>

          <Divider />

          {/* Sección 8 */}
          <Section id="espana">
            <H2>Los Templarios en España</H2>
            <p>
              España tuvo una relación particular con los Templarios, distinta
              a la del resto de Europa. Aquí no eran solo guerreros de las
              Cruzadas en Tierra Santa — eran combatientes de la Reconquista,
              la guerra de siglos para recuperar la Península de manos del
              Islam.
            </p>
            <p>
              Los reyes de Aragón y Castilla los convocaron, les cedieron
              tierras y castillos a lo largo de la frontera con Al-Ándalus,
              y los usaron como fuerza de choque en la expansión hacia el sur.
              A cambio, los Templarios recibieron algunas de las encomiendas
              más ricas de Europa.
            </p>
            <p>
              Cuando la Orden fue disuelta en 1312, España fue uno de los
              lugares donde la persecución fue menos violenta. El rey Jaime II
              de Aragón protegió a muchos Templarios y sus bienes fueron
              transferidos en gran parte a la Orden de Montesa — una nueva
              orden creada específicamente para ese fin.
            </p>
            <p>
              Algunos de los castillos templarios más impresionantes del mundo
              están en España: el Castillo de Ponferrada en León, el de
              Miravet en Tarragona, o el de Monzón en Huesca — fortalezas donde,
              según algunas leyendas, aún podrían estar ocultos parte de los
              tesoros que los Templarios sacaron de París antes de las
              detenciones de 1307.
            </p>
          </Section>

          <Divider />

          {/* FAQ */}
          <Section id="faq">
            <H2>Preguntas frecuentes sobre los Caballeros Templarios</H2>
            <div className="my-6 space-y-6">
              {[
                {
                  q: "¿Cuándo y por qué se fundaron los Templarios?",
                  a: "En torno a 1119, en Jerusalén, por Hugo de Payns y otros ocho caballeros franceses. Su misión original era proteger a los peregrinos cristianos que viajaban a Tierra Santa tras la Primera Cruzada, cuando los caminos de Palestina eran extremadamente peligrosos.",
                },
                {
                  q: "¿Por qué se llamaban Templarios?",
                  a: "Porque el rey Balduino II de Jerusalén les cedió como sede una parte de su palacio, construido sobre lo que se creía que era el solar del Templo de Salomón. De ahí su nombre oficial: Pobres Caballeros de Cristo y del Templo de Salomón.",
                },
                {
                  q: "¿Por qué tenían tanto poder económico?",
                  a: "Los Templarios inventaron un sistema de transferencia de fondos que eliminaba la necesidad de transportar oro físicamente — el antecedente directo del cheque bancario. Esto les permitió prestar dinero a reyes y gestionar fortunas por toda Europa, convirtiéndose en el primer banco internacional de la historia.",
                },
                {
                  q: "¿Por qué les acusaron de herejía?",
                  a: "Las acusaciones de herejía, blasfemia e idolatría fueron el pretexto legal que usó Felipe IV de Francia para destruirlos. La motivación real era económica: la Corona francesa estaba enormemente endeudada con la Orden. Muchas confesiones se obtuvieron bajo tortura y fueron retractadas posteriormente.",
                },
                {
                  q: "¿El viernes 13 tiene relación con los Templarios?",
                  a: "Posiblemente. El viernes 13 de octubre de 1307 fue el día en que todos los Templarios de Francia fueron arrestados simultáneamente por orden de Felipe IV. Muchos historiadores consideran este evento el origen de la superstición del viernes 13, aunque la asociación es difícil de probar con certeza.",
                },
                {
                  q: "¿Qué pasó con los tesoros templarios?",
                  a: "Según la leyenda, la noche antes de las detenciones, un grupo de Templarios embarcó 18 galeras desde el puerto de La Rochelle cargadas con los tesoros de la Orden. Nunca aparecieron. El destino de esos tesoros — si es que existieron — sigue siendo uno de los grandes misterios medievales.",
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
              Los Templarios en la novela
            </p>
            <p className="mb-5 font-serif text-2xl font-light leading-relaxed text-stone-200">
              Algunos secretos no mueren en la hoguera.
            </p>
            <div className="space-y-4 text-base leading-relaxed text-stone-400">
              <p>
                El universo de los Templarios — sus excavaciones, sus secretos,
                las órdenes que los sucedieron — forma parte del tejido de
                <em className="text-stone-300"> El Anillo de Salomón</em>.
                Cuando el arqueólogo Álvaro Ballester sigue la pista del
                Anillo de Salomón, no está solo: hay fuerzas con siglos de
                historia que custodian lo que él busca. Y no están dispuestas
                a que nadie lo encuentre.
              </p>
              <p className="text-stone-300">
                Algunos secretos no mueren en la hoguera. Solo cambian de manos.
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
              href="/blog/templo-de-salomon-historia-secretos-misterio"
              className="text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400"
            >
              Leer también: El Templo de Salomón →
            </Link>
          </div>

        </div>
      </article>
    </main>
  );
}

function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mb-5 mt-2 font-serif text-3xl font-light leading-snug text-stone-100 scroll-mt-24">
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
    <section id={id} className="mb-4 space-y-5 text-base leading-relaxed text-stone-300 scroll-mt-24">
      {children}
    </section>
  );
}

function Divider() {
  return <div className="my-12 border-t border-stone-800" />;
}
