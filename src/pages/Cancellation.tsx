import { useTranslation } from 'react-i18next'
import useSeo from '../hooks/useSeo'

export default function Cancellation() {
  const { i18n } = useTranslation()
  const isEs = i18n.language === 'es'

  useSeo({
    title: isEs ? 'Política de Cancelación y Reembolso' : 'Cancellation & Refund Policy',
    description: isEs
      ? 'Política de cancelación y reembolso para reservas en Costa Rica: tours de un día, itinerarios personalizados y programas en Latinoamérica.'
      : 'Cancellation and refund policy for bookings in Costa Rica: day tours, tailored itineraries, and Latin America programs.',
    image: 'https://wildpath.lat/images/logo-wildpath.png',
    canonicalPath: '/cancelacion',
  })

  /* ─── Shared helpers ─── */
  const Tag = ({ color, label }: { color: 'green' | 'amber' | 'red' | 'teal'; label: string }) => {
    const map = {
      green: 'bg-green-50 text-green-900',
      amber: 'bg-amber-50 text-amber-900',
      red: 'bg-red-50 text-red-900',
      teal: 'bg-teal-50 text-teal-900',
    }
    return (
      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md ${map[color]}`}>
        {label}
      </span>
    )
  }

  const Alert = ({ color, children }: { color: 'red' | 'amber' | 'teal'; children: React.ReactNode }) => {
    const map = {
      red: 'bg-red-50 border-red-200 text-red-900',
      amber: 'bg-amber-50 border-amber-200 text-amber-900',
      teal: 'bg-teal-50 border-teal-200 text-teal-900',
    }
    return (
      <div className={`flex gap-3 p-4 rounded-lg border text-sm leading-relaxed ${map[color]}`}>
        <p>{children}</p>
      </div>
    )
  }

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-base font-semibold text-wp-forest">{title}</h2>
      </div>
      <div className="px-5 py-5 bg-white space-y-4">{children}</div>
    </div>
  )

  const Th = ({ children }: { children: React.ReactNode }) => (
    <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">
      {children}
    </th>
  )
  const Td = ({ children }: { children: React.ReactNode }) => (
    <td className="px-3 py-3 border-b border-gray-100">{children}</td>
  )
  const TdLast = ({ children }: { children: React.ReactNode }) => (
    <td className="px-3 py-3">{children}</td>
  )

  /* ══════════════════════════════════════════
     ENGLISH VERSION
  ══════════════════════════════════════════ */
  if (!isEs) {
    return (
      <div className="pt-24 lg:pt-32">
        <section className="relative py-16 lg:py-24 px-6 lg:px-12 bg-wp-forest">
          <div className="max-w-4xl mx-auto text-center">
            <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">LEGAL</p>
            <h1 className="headline-lg text-white">Cancellation & Refund Policy</h1>
          </div>
        </section>

        <section className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
          <div className="max-w-3xl mx-auto space-y-6">

            <p className="text-sm text-gray-500">
              Effective for all bookings — day tours, tailored itineraries, field trips & Latin America programs
            </p>

            <Alert color="red">
              <strong>All bookings require written confirmation.</strong> A reservation is only confirmed upon receipt of the deposit and a written acknowledgment from us. Verbal agreements do not constitute a binding reservation.
            </Alert>

            {/* Day Tours */}
            <Section title="Day Tours — Waterfalls, Birdwatching & Night Walks">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead><tr><Th>Notice given before tour</Th><Th>Refund</Th><Th>Status</Th></tr></thead>
                  <tbody>
                    <tr><Td>7 days or more</Td><Td>100% refund of all payments made</Td><Td><Tag color="green" label="Full refund" /></Td></tr>
                    <tr><Td>48 hours to 6 days</Td><Td>50% refund — 50% retained as cancellation fee</Td><Td><Tag color="amber" label="Partial refund" /></Td></tr>
                    <tr><Td>Less than 48 hours</Td><Td>No refund</Td><Td><Tag color="red" label="No refund" /></Td></tr>
                    <tr><TdLast>No-show</TdLast><TdLast>No refund — full charge applies</TdLast><TdLast><Tag color="red" label="No refund" /></TdLast></tr>
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Tailored Itineraries */}
            <Section title="Tailored Itineraries — Multi-Day Tours Within Costa Rica">
              <p className="text-sm leading-relaxed text-gray-700">A non-refundable deposit of <strong>30% of the total package price</strong> is required to confirm all tailored itineraries. This deposit covers planning, coordination, and third-party reservations made on your behalf.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead><tr><Th>Notice given before departure</Th><Th>Refund of remaining balance</Th><Th>Status</Th></tr></thead>
                  <tbody>
                    <tr><Td>30 days or more</Td><Td>100% of balance paid (deposit non-refundable)</Td><Td><Tag color="teal" label="Balance refunded" /></Td></tr>
                    <tr><Td>15 to 29 days</Td><Td>50% of balance paid</Td><Td><Tag color="amber" label="Partial refund" /></Td></tr>
                    <tr><Td>7 to 14 days</Td><Td>25% of balance paid</Td><Td><Tag color="amber" label="Partial refund" /></Td></tr>
                    <tr><TdLast>Less than 7 days</TdLast><TdLast>No refund</TdLast><TdLast><Tag color="red" label="No refund" /></TdLast></tr>
                  </tbody>
                </table>
              </div>
              <Alert color="amber">
                Pre-paid third-party services (hotels, domestic flights, tickets) are subject to each provider's own cancellation terms. We will recover whatever is refundable on your behalf, but cannot guarantee those amounts.
              </Alert>
            </Section>

            {/* Field Trips */}
            <Section title="University Field Trips & Group Programs">
              <p className="text-sm leading-relaxed text-gray-700">Field trips require a <strong>40% non-refundable deposit</strong> upon contract signing to secure permits, guides, transportation, and logistics. The remaining 60% is due no later than <strong>30 days before the program start date</strong>.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead><tr><Th>Notice given before program</Th><Th>Refund of balance</Th><Th>Status</Th></tr></thead>
                  <tbody>
                    <tr><Td>45 days or more</Td><Td>100% of balance (deposit non-refundable)</Td><Td><Tag color="teal" label="Balance refunded" /></Td></tr>
                    <tr><Td>30 to 44 days</Td><Td>50% of balance</Td><Td><Tag color="amber" label="Partial refund" /></Td></tr>
                    <tr><TdLast>Less than 30 days</TdLast><TdLast>No refund</TdLast><TdLast><Tag color="red" label="No refund" /></TdLast></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">Group size reductions of more than 20% after confirmation are treated as a partial cancellation and subject to the same schedule above, applied to the reduced portion.</p>
            </Section>

            {/* Latin America */}
            <Section title="Organized Trips to Latin America">
              <p className="text-sm leading-relaxed text-gray-700">International programs require a <strong>35% non-refundable deposit</strong> at booking. Full payment is due <strong>45 days before departure</strong>. Failure to pay by this date constitutes a cancellation with no refund issued.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead><tr><Th>Notice given before departure</Th><Th>Refund of balance paid</Th><Th>Status</Th></tr></thead>
                  <tbody>
                    <tr><Td>60 days or more</Td><Td>100% of balance (deposit non-refundable)</Td><Td><Tag color="teal" label="Balance refunded" /></Td></tr>
                    <tr><Td>45 to 59 days</Td><Td>50% of balance</Td><Td><Tag color="amber" label="Partial refund" /></Td></tr>
                    <tr><Td>30 to 44 days</Td><Td>25% of balance</Td><Td><Tag color="amber" label="Partial refund" /></Td></tr>
                    <tr><TdLast>Less than 30 days</TdLast><TdLast>No refund</TdLast><TdLast><Tag color="red" label="No refund" /></TdLast></tr>
                  </tbody>
                </table>
              </div>
              <Alert color="red">
                <strong>Important:</strong> International airline tickets, entry permits, and cross-border accommodation are non-refundable once issued. We strongly recommend purchasing comprehensive travel insurance covering cancellation, medical evacuation, and trip interruption.
              </Alert>
            </Section>

            {/* Weather */}
            <Section title="Cancellations Due to Weather or Force Majeure">
              <p className="text-sm leading-relaxed text-gray-700">If we cancel a tour due to extreme weather, road closures, natural events, or circumstances beyond our control, clients will receive a <strong>full credit valid for 12 months</strong>, or a <strong>full refund</strong> if rescheduling is not possible. This is at our sole discretion based on the situation.</p>
              <p className="text-sm leading-relaxed text-gray-700">We are not responsible for cancellations caused by client-side circumstances (illness, missed flights, travel restrictions, personal emergencies). We strongly recommend travel insurance for all bookings.</p>
              <Alert color="amber">
                Costa Rica's tropical climate involves rain year-round. Light or typical rain does not constitute grounds for cancellation — tours operate in these conditions. Only severe weather that presents a genuine safety risk qualifies.
              </Alert>
            </Section>

            {/* Rescheduling */}
            <Section title="Rescheduling">
              <p className="text-sm leading-relaxed text-gray-700">One complimentary reschedule is offered per booking, provided notice is given at least <strong>48 hours in advance</strong> for day tours, and <strong>14 days in advance</strong> for multi-day programs. Subject to availability. A second reschedule incurs a 15% administrative fee. Rescheduling within the minimum notice window is not permitted and will be treated as a cancellation.</p>
            </Section>

            {/* How to Cancel */}
            <Section title="How to Cancel — Required Procedure">
              <p className="text-sm leading-relaxed text-gray-700">All cancellations must be submitted <strong>in writing</strong> via email to our official contact address. The cancellation date is the date we receive your written notice — not the date of verbal communication or the date the email was sent. No exceptions.</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-2">
                <li>Cancellation requests made by phone, WhatsApp, or social media are <strong>not accepted</strong> as formal notice.</li>
                <li>Refunds, when applicable, are processed within <strong>10 business days</strong> by the same payment method used at booking.</li>
                <li>Bank transfer fees or currency conversion losses are the client's responsibility.</li>
              </ul>
            </Section>

            <Alert color="teal">
              By confirming a booking and paying a deposit, the client acknowledges they have read, understood, and accepted this cancellation policy in full. This policy is binding regardless of whether the client has explicitly signed a separate contract.
            </Alert>

            <hr className="border-t border-gray-200" />
            <p className="text-xs text-gray-400 text-center pb-4">Questions about this policy? Contact us before booking — we're happy to clarify anything.</p>

          </div>
        </section>
      </div>
    )
  }

  /* ══════════════════════════════════════════
     SPANISH VERSION
  ══════════════════════════════════════════ */
  return (
    <div className="pt-24 lg:pt-32">
      <section className="relative py-16 lg:py-24 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">LEGAL</p>
          <h1 className="headline-lg text-white">Política de Cancelación y Reembolso</h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-3xl mx-auto space-y-6">

          <p className="text-sm text-gray-500">
            Vigente para todas las reservas — tours de un día, itinerarios personalizados, salidas de campo y programas en Latinoamérica
          </p>

          <Alert color="red">
            <strong>Todas las reservas requieren confirmación por escrito.</strong> Una reserva solo se confirma al recibir el depósito y un acuse de recibo escrito de nuestra parte. Los acuerdos verbales no constituyen una reserva vinculante.
          </Alert>

          {/* Tours de un día */}
          <Section title="Tours de un Día — Cataratas, Avistamiento de Aves y Caminatas Nocturnas">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr><Th>Aviso previo al tour</Th><Th>Reembolso</Th><Th>Estado</Th></tr></thead>
                <tbody>
                  <tr><Td>7 días o más</Td><Td>100% de reembolso de todos los pagos realizados</Td><Td><Tag color="green" label="Reembolso total" /></Td></tr>
                  <tr><Td>48 horas a 6 días</Td><Td>50% de reembolso — 50% retenido como cargo por cancelación</Td><Td><Tag color="amber" label="Reembolso parcial" /></Td></tr>
                  <tr><Td>Menos de 48 horas</Td><Td>Sin reembolso</Td><Td><Tag color="red" label="Sin reembolso" /></Td></tr>
                  <tr><TdLast>No presentación</TdLast><TdLast>Sin reembolso — se aplica el cargo completo</TdLast><TdLast><Tag color="red" label="Sin reembolso" /></TdLast></tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* Itinerarios personalizados */}
          <Section title="Itinerarios Personalizados — Tours de Varios Días en Costa Rica">
            <p className="text-sm leading-relaxed text-gray-700">Se requiere un depósito no reembolsable del <strong>30% del precio total del paquete</strong> para confirmar todos los itinerarios personalizados. Este depósito cubre planificación, coordinación y reservas con terceros realizadas en su nombre.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr><Th>Aviso previo a la salida</Th><Th>Reembolso del saldo restante</Th><Th>Estado</Th></tr></thead>
                <tbody>
                  <tr><Td>30 días o más</Td><Td>100% del saldo pagado (depósito no reembolsable)</Td><Td><Tag color="teal" label="Saldo reembolsado" /></Td></tr>
                  <tr><Td>15 a 29 días</Td><Td>50% del saldo pagado</Td><Td><Tag color="amber" label="Reembolso parcial" /></Td></tr>
                  <tr><Td>7 a 14 días</Td><Td>25% del saldo pagado</Td><Td><Tag color="amber" label="Reembolso parcial" /></Td></tr>
                  <tr><TdLast>Menos de 7 días</TdLast><TdLast>Sin reembolso</TdLast><TdLast><Tag color="red" label="Sin reembolso" /></TdLast></tr>
                </tbody>
              </table>
            </div>
            <Alert color="amber">
              Los servicios de terceros prepagados (hoteles, vuelos domésticos, entradas) están sujetos a las propias políticas de cancelación de cada proveedor. Recuperaremos lo que sea reembolsable en su nombre, pero no podemos garantizar esos montos.
            </Alert>
          </Section>

          {/* Salidas de campo */}
          <Section title="Salidas de Campo Universitarias y Programas Grupales">
            <p className="text-sm leading-relaxed text-gray-700">Las salidas de campo requieren un <strong>depósito no reembolsable del 40%</strong> al momento de firmar el contrato para asegurar permisos, guías, transporte y logística. El 60% restante debe pagarse a más tardar <strong>30 días antes de la fecha de inicio del programa</strong>.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr><Th>Aviso previo al programa</Th><Th>Reembolso del saldo</Th><Th>Estado</Th></tr></thead>
                <tbody>
                  <tr><Td>45 días o más</Td><Td>100% del saldo (depósito no reembolsable)</Td><Td><Tag color="teal" label="Saldo reembolsado" /></Td></tr>
                  <tr><Td>30 a 44 días</Td><Td>50% del saldo</Td><Td><Tag color="amber" label="Reembolso parcial" /></Td></tr>
                  <tr><TdLast>Menos de 30 días</TdLast><TdLast>Sin reembolso</TdLast><TdLast><Tag color="red" label="Sin reembolso" /></TdLast></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">Las reducciones de grupo superiores al 20% tras la confirmación se tratan como una cancelación parcial y están sujetas al mismo calendario anterior, aplicado a la porción reducida.</p>
          </Section>

          {/* Latinoamérica */}
          <Section title="Viajes Organizados a Latinoamérica">
            <p className="text-sm leading-relaxed text-gray-700">Los programas internacionales requieren un <strong>depósito no reembolsable del 35%</strong> al reservar. El pago total debe realizarse <strong>45 días antes de la salida</strong>. No pagar en esa fecha constituye una cancelación sin reembolso.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr><Th>Aviso previo a la salida</Th><Th>Reembolso del saldo pagado</Th><Th>Estado</Th></tr></thead>
                <tbody>
                  <tr><Td>60 días o más</Td><Td>100% del saldo (depósito no reembolsable)</Td><Td><Tag color="teal" label="Saldo reembolsado" /></Td></tr>
                  <tr><Td>45 a 59 días</Td><Td>50% del saldo</Td><Td><Tag color="amber" label="Reembolso parcial" /></Td></tr>
                  <tr><Td>30 a 44 días</Td><Td>25% del saldo</Td><Td><Tag color="amber" label="Reembolso parcial" /></Td></tr>
                  <tr><TdLast>Menos de 30 días</TdLast><TdLast>Sin reembolso</TdLast><TdLast><Tag color="red" label="Sin reembolso" /></TdLast></tr>
                </tbody>
              </table>
            </div>
            <Alert color="red">
              <strong>Importante:</strong> Los tiquetes aéreos internacionales, permisos de entrada y alojamiento transfronterizo no son reembolsables una vez emitidos. Recomendamos ampliamente contratar un seguro de viaje integral que cubra cancelación, evacuación médica e interrupción de viaje.
            </Alert>
          </Section>

          {/* Clima / Fuerza mayor */}
          <Section title="Cancelaciones por Clima o Fuerza Mayor">
            <p className="text-sm leading-relaxed text-gray-700">Si cancelamos un tour por condiciones climáticas extremas, cierres de carreteras, eventos naturales o circunstancias fuera de nuestro control, el cliente recibirá un <strong>crédito completo válido por 12 meses</strong> o un <strong>reembolso total</strong> si no es posible reprogramar. Esto queda a nuestra exclusiva discreción según la situación.</p>
            <p className="text-sm leading-relaxed text-gray-700">No somos responsables de cancelaciones causadas por circunstancias del lado del cliente (enfermedad, vuelos perdidos, restricciones de viaje, emergencias personales). Recomendamos un seguro de viaje para todas las reservas.</p>
            <Alert color="amber">
              El clima tropical de Costa Rica incluye lluvia durante todo el año. La lluvia ligera o típica no es motivo de cancelación — los tours operan en esas condiciones. Solo el clima severo que represente un riesgo real de seguridad aplica.
            </Alert>
          </Section>

          {/* Reprogramación */}
          <Section title="Reprogramación">
            <p className="text-sm leading-relaxed text-gray-700">Se ofrece una reprogramación gratuita por reserva, siempre que se notifique con al menos <strong>48 horas de anticipación</strong> para tours de un día y <strong>14 días de anticipación</strong> para programas de varios días. Sujeto a disponibilidad. Una segunda reprogramación genera un cargo administrativo del 15%. Reprogramar dentro del período mínimo de aviso no está permitido y se tratará como cancelación.</p>
          </Section>

          {/* Cómo cancelar */}
          <Section title="Cómo Cancelar — Procedimiento Requerido">
            <p className="text-sm leading-relaxed text-gray-700">Todas las cancelaciones deben enviarse <strong>por escrito</strong> vía correo electrónico a nuestra dirección de contacto oficial. La fecha de cancelación es la fecha en que recibimos su aviso escrito — no la fecha de comunicación verbal ni la fecha de envío del correo. Sin excepciones.</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-2">
              <li>Las solicitudes de cancelación por teléfono, WhatsApp o redes sociales <strong>no se aceptan</strong> como aviso formal.</li>
              <li>Los reembolsos, cuando corresponda, se procesan en <strong>10 días hábiles</strong> por el mismo método de pago utilizado al reservar.</li>
              <li>Los cargos por transferencia bancaria o pérdidas por conversión de divisas son responsabilidad del cliente.</li>
            </ul>
          </Section>

          <Alert color="teal">
            Al confirmar una reserva y pagar un depósito, el cliente reconoce haber leído, comprendido y aceptado en su totalidad esta política de cancelación. Esta política es vinculante independientemente de si el cliente ha firmado por separado un contrato adicional.
          </Alert>

          <hr className="border-t border-gray-200" />
          <p className="text-xs text-gray-400 text-center pb-4">¿Preguntas sobre esta política? Contáctenos antes de reservar — con gusto le aclaramos cualquier duda.</p>

        </div>
      </section>
    </div>
  )
}
