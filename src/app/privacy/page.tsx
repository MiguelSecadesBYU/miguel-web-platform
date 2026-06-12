import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de miguelseacades.com conforme al RGPD y la LOPDGDD.",
};

const LAST_UPDATE = "Junio 2026";
const RESPONSIBLE_NAME = "Miguel Secades García";
const EMAIL = "miguel.secades.garcia@gmail.com";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-3xl">

          {/* Cabecera */}
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
            Legal
          </p>
          <h1 className="mb-4 font-serif text-4xl font-light leading-tight md:text-5xl">
            Política de Privacidad
          </h1>
          <p className="mb-12 text-sm text-stone-600">
            Última actualización: {LAST_UPDATE}
          </p>

          <div className="space-y-10 text-sm leading-relaxed text-stone-400">

            {/* 1 */}
            <LegalSection title="1. Responsable del tratamiento">
              <p>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa que el Responsable del tratamiento de los datos personales recabados a través de este sitio web es:</p>
              <DataBox items={[
                { label: "Nombre", value: RESPONSIBLE_NAME },
                { label: "Correo electrónico", value: EMAIL },
                { label: "Sitio web", value: "https://miguelsecades.com" },
              ]} />
            </LegalSection>

            {/* 2 */}
            <LegalSection title="2. Datos que recopilamos y finalidad del tratamiento">
              <p>Este sitio web recaba los siguientes datos personales:</p>
              <SubSection title="2.1 Formulario de contacto">
                <p>Datos: nombre, dirección de correo electrónico y el contenido del mensaje.</p>
                <p>Finalidad: gestionar y responder las consultas, solicitudes de información o peticiones de prensa enviadas por el usuario.</p>
                <p>Base jurídica: consentimiento del interesado (art. 6.1.a RGPD).</p>
                <p>Conservación: hasta que se resuelva la consulta y, en su caso, durante el plazo legal de prescripción de responsabilidades.</p>
              </SubSection>
              <SubSection title="2.2 Formulario de suscripción a la newsletter">
                <p>Datos: nombre y dirección de correo electrónico.</p>
                <p>Finalidad: envío de comunicaciones periódicas sobre novedades editoriales, artículos del blog, eventos y contenido relacionado con la actividad literaria de Miguel Secades García.</p>
                <p>Base jurídica: consentimiento del interesado (art. 6.1.a RGPD).</p>
                <p>Conservación: hasta que el usuario retire su consentimiento o solicite la baja de la newsletter.</p>
              </SubSection>
            </LegalSection>

            {/* 3 */}
            <LegalSection title="3. Encargados del tratamiento y terceros receptores de datos">
              <p>Para la gestión de la newsletter, los datos son tratados por <strong className="text-stone-300">Brevo SAS</strong> (anteriormente Sendinblue), empresa con domicilio en 7 rue de Madrid, 75008 París, Francia, en calidad de encargada del tratamiento. Brevo opera dentro del Espacio Económico Europeo y cumple con el RGPD. Puede consultar su política de privacidad en <a href="https://www.brevo.com/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">brevo.com/legal/privacypolicy</a>.</p>
              <p>El sitio web está alojado en <strong className="text-stone-300">Vercel Inc.</strong>, 340 Pine Street, Suite 900, San Francisco, CA 94104, EE.UU. Vercel cumple con el Marco de Privacidad de Datos UE-EE.UU. (DPF) aprobado por la Comisión Europea. Puede consultar su política en <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">vercel.com/legal/privacy-policy</a>.</p>
              <p>No se ceden datos a terceros salvo obligación legal.</p>
            </LegalSection>

            {/* 4 */}
            <LegalSection title="4. Derechos de los interesados">
              <p>De acuerdo con el RGPD y la LOPDGDD, el usuario puede ejercer en cualquier momento los siguientes derechos:</p>
              <ul className="ml-4 space-y-1">
                {[
                  "Derecho de acceso: conocer qué datos personales se tratan.",
                  "Derecho de rectificación: solicitar la corrección de datos inexactos.",
                  "Derecho de supresión («derecho al olvido»): solicitar la eliminación de sus datos.",
                  "Derecho de oposición: oponerse al tratamiento de sus datos.",
                  "Derecho a la limitación del tratamiento: solicitar que se restrinja el tratamiento.",
                  "Derecho a la portabilidad: recibir sus datos en formato estructurado.",
                  "Derecho a retirar el consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.",
                ].map((right) => (
                  <li key={right} className="flex gap-2">
                    <span className="mt-1 shrink-0 text-amber-500">—</span>
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
              <p>Para ejercer estos derechos, el usuario puede dirigirse por escrito a <a href={`mailto:${EMAIL}`} className="text-amber-500 hover:underline">{EMAIL}</a>, indicando en el asunto "Protección de datos" y adjuntando una copia de su documento de identidad.</p>
              <p>Si considera que el tratamiento de sus datos no es conforme a la normativa, puede presentar una reclamación ante la <strong className="text-stone-300">Agencia Española de Protección de Datos (AEPD)</strong> a través de su sede electrónica: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">www.aepd.es</a>.</p>
            </LegalSection>

            {/* 5 */}
            <LegalSection title="5. Cookies">
              <p>Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para su funcionamiento. No se utilizan cookies de seguimiento, analíticas ni publicitarias de terceros. No se requiere el consentimiento del usuario para las cookies técnicas, de conformidad con el art. 22.2 de la LSSI-CE.</p>
              <p>Si en el futuro se incorporaran cookies no técnicas, esta política será actualizada y se solicitará el consentimiento correspondiente.</p>
            </LegalSection>

            {/* 6 */}
            <LegalSection title="6. Medidas de seguridad">
              <p>El Responsable ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.</p>
            </LegalSection>

            {/* 7 */}
            <LegalSection title="7. Modificaciones de la política de privacidad">
              <p>El Responsable se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas, jurisprudenciales o de práctica empresarial. Los cambios serán notificados en esta misma página con indicación de la fecha de actualización. Se recomienda al usuario revisarla periódicamente.</p>
            </LegalSection>

          </div>

          <div className="mt-16 border-t border-stone-800 pt-8">
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2 border-l border-stone-800 pl-5">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-500/80">{title}</p>
      {children}
    </div>
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
