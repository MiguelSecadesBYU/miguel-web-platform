import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal y Términos de Uso",
  description: "Aviso legal y condiciones de uso de miguelseacades.com conforme a la LSSI-CE.",
};

const LAST_UPDATE = "Junio 2026";
const RESPONSIBLE_NAME = "Miguel Secades García";
const NIF = "53539017P";
const EMAIL = "miguel.secades.garcia@gmail.com";
const ADDRESS = "[DIRECCIÓN POSTAL]"; // Reemplazar con dirección real antes de publicar
const DOMAIN = "miguel-web-platform.vercel.app";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-3xl">

          {/* Cabecera */}
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Legal
          </p>
          <h1 className="mb-4 font-serif text-4xl font-light leading-tight md:text-5xl">
            Aviso Legal y Términos de Uso
          </h1>
          <p className="mb-12 text-sm text-stone-600">
            Última actualización: {LAST_UPDATE}
          </p>

          <div className="space-y-10 text-sm leading-relaxed text-stone-400">

            {/* 1 — Identificación */}
            <LegalSection title="1. Identificación del titular">
              <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular del sitio web <strong className="text-stone-300">{DOMAIN}</strong> es:</p>
              <DataBox items={[
                { label: "Nombre completo", value: RESPONSIBLE_NAME },
                { label: "NIF", value: NIF },
                { label: "Domicilio", value: ADDRESS },
                { label: "Correo electrónico", value: EMAIL },
                { label: "Sitio web", value: `https://${DOMAIN}` },
              ]} />
            </LegalSection>

            {/* 2 — Objeto */}
            <LegalSection title="2. Objeto y actividad">
              <p>El presente sitio web tiene por objeto la promoción de la actividad literaria de Miguel Secades García, autor de la novela <em className="text-stone-300">El Anillo de Salomón</em>, así como la difusión de contenidos relacionados con la escritura, la historia y los misterios históricos a través de su blog.</p>
              <p>El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal y en la <Link href="/privacy" className="text-amber-500 hover:underline">Política de Privacidad</Link>.</p>
            </LegalSection>

            {/* 3 — Propiedad intelectual */}
            <LegalSection title="3. Propiedad intelectual e industrial">
              <p>Todos los contenidos del sitio web — incluyendo, sin carácter limitativo, textos, imágenes, diseño gráfico, logotipos, iconos, código fuente y cualquier otro elemento — son propiedad de Miguel Secades García o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.</p>
              <p>Queda expresamente prohibida la reproducción total o parcial, distribución, comunicación pública, transformación o cualquier otro acto de explotación de los contenidos de este sitio web sin la autorización expresa y por escrito del titular.</p>
              <p>La novela <em className="text-stone-300">El Anillo de Salomón</em> es obra original de Miguel Secades García y está protegida por los derechos de autor reconocidos en el Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual.</p>
            </LegalSection>

            {/* 4 — Condiciones de uso */}
            <LegalSection title="4. Condiciones de uso del sitio web">
              <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través del sitio web, con sujeción a la ley, a la moral, al orden público y a las presentes condiciones. En particular, el usuario se obliga a no:</p>
              <ul className="ml-4 space-y-1">
                {[
                  "Utilizar el sitio web con fines ilícitos o contrarios a las presentes condiciones.",
                  "Reproducir, copiar, distribuir o modificar los contenidos sin autorización expresa.",
                  "Introducir o difundir contenidos falsos, difamatorios, obscenos o que vulneren derechos de terceros.",
                  "Realizar acciones que puedan dañar, inutilizar o sobrecargar el sitio web.",
                  "Utilizar técnicas de web scraping, robots o cualquier otro medio automatizado para extraer contenidos.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 shrink-0 text-amber-500">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </LegalSection>

            {/* 5 — Exclusión de responsabilidad */}
            <LegalSection title="5. Exclusión de responsabilidad">
              <p>Miguel Secades García no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso del sitio web, ni de la eventual indisponibilidad técnica del mismo.</p>
              <p>Los contenidos del blog tienen finalidad divulgativa e informativa. El titular no garantiza la exactitud, integridad o actualidad de la información publicada, y no asume responsabilidad por el uso que el usuario haga de dicha información.</p>
              <p>El sitio web puede incluir enlaces a páginas web de terceros (como Amazon para la adquisición de la novela). El titular no controla ni es responsable del contenido de dichas páginas externas.</p>
            </LegalSection>

            {/* 6 — Newsletter */}
            <LegalSection title="6. Comunicaciones comerciales por correo electrónico">
              <p>De conformidad con lo dispuesto en el artículo 21 de la LSSI-CE, el envío de comunicaciones comerciales por vía electrónica requerirá el consentimiento previo y expreso del destinatario. El usuario que se suscriba a la newsletter presta dicho consentimiento y podrá revocarlo en cualquier momento haciendo clic en el enlace de baja incluido en cada comunicación o escribiendo a <a href={`mailto:${EMAIL}`} className="text-amber-500 hover:underline">{EMAIL}</a>.</p>
            </LegalSection>

            {/* 7 — Legislación */}
            <LegalSection title="7. Legislación aplicable y jurisdicción">
              <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten a la jurisdicción de los Juzgados y Tribunales de Gijón (Asturias), salvo que la normativa de consumidores y usuarios establezca otro fuero imperativo.</p>
              <p>Normativa aplicable:</p>
              <ul className="ml-4 space-y-1">
                {[
                  "Reglamento (UE) 2016/679 — RGPD",
                  "Ley Orgánica 3/2018 — LOPDGDD",
                  "Ley 34/2002 — LSSI-CE",
                  "Real Decreto Legislativo 1/1996 — Ley de Propiedad Intelectual",
                  "Real Decreto Legislativo 1/2007 — Ley General para la Defensa de los Consumidores y Usuarios",
                ].map((law) => (
                  <li key={law} className="flex gap-2">
                    <span className="mt-1 shrink-0 text-amber-500">—</span>
                    <span>{law}</span>
                  </li>
                ))}
              </ul>
            </LegalSection>

            {/* 8 — Modificaciones */}
            <LegalSection title="8. Modificaciones">
              <p>El titular se reserva el derecho a modificar en cualquier momento el presente Aviso Legal para adaptarlo a cambios legislativos, jurisprudenciales o de funcionamiento del sitio. La versión vigente será siempre la publicada en esta página, con indicación de la fecha de última actualización.</p>
            </LegalSection>

          </div>

          <div className="mt-16 border-t border-stone-800 pt-8 flex gap-8">
            <Link href="/privacy" className="text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400">
              Política de privacidad →
            </Link>
            <Link href="/" className="text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-400">
              ← Volver al inicio
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-serif text-xl font-light text-stone-200">{title}</h2>
      {children}
    </section>
  );
}

function DataBox({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="border border-stone-800 bg-black/30 p-5">
      <dl className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex gap-3">
            <dt className="w-36 shrink-0 text-stone-500">{item.label}:</dt>
            <dd className="text-stone-300">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
