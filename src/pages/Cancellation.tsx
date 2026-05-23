export default function Cancellation() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">LEGAL</p>
          <h1 className="headline-lg text-white">Cancellation & Refund Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Effective date / subtitle */}
          <p className="text-sm text-gray-500">
            Effective for all bookings — day tours, tailored itineraries, field trips & Latin America programs
          </p>

          {/* Global alert */}
          <div className="flex gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 text-sm leading-relaxed">
            <p><strong>All bookings require written confirmation.</strong> A reservation is only confirmed upon receipt of the deposit and a written acknowledgment from us. Verbal agreements do not constitute a binding reservation.</p>
          </div>

          {/* Day Tours */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-base font-semibold text-wp-forest">Day Tours — Waterfalls, Birdwatching & Night Walks</h2>
            </div>
            <div className="px-5 py-5 bg-white overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Notice given before tour</th>
                    <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Refund</th>
                    <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-3 border-b border-gray-100">7 days or more</td>
                    <td className="px-3 py-3 border-b border-gray-100">100% refund of all payments made</td>
                    <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-green-50 text-green-900">Full refund</span></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 border-b border-gray-100">48 hours to 6 days</td>
                    <td className="px-3 py-3 border-b border-gray-100">50% refund — 50% retained as cancellation fee</td>
                    <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-900">Partial refund</span></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 border-b border-gray-100">Less than 48 hours</td>
                    <td className="px-3 py-3 border-b border-gray-100">No refund</td>
                    <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-red-50 text-red-900">No refund</span></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3">No-show</td>
                    <td className="px-3 py-3">No refund — full charge applies</td>
                    <td className="px-3 py-3"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-red-50 text-red-900">No refund</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tailored Itineraries */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-base font-semibold text-wp-forest">Tailored Itineraries — Multi-Day Tours Within Costa Rica</h2>
            </div>
            <div className="px-5 py-5 bg-white space-y-4">
              <p className="text-sm leading-relaxed text-gray-700">A non-refundable deposit of <strong>30% of the total package price</strong> is required to confirm all tailored itineraries. This deposit covers planning, coordination, and third-party reservations made on your behalf.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Notice given before departure</th>
                      <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Refund of remaining balance</th>
                      <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-3 border-b border-gray-100">30 days or more</td>
                      <td className="px-3 py-3 border-b border-gray-100">100% of balance paid (deposit non-refundable)</td>
                      <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-50 text-teal-900">Balance refunded</span></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 border-b border-gray-100">15 to 29 days</td>
                      <td className="px-3 py-3 border-b border-gray-100">50% of balance paid</td>
                      <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-900">Partial refund</span></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 border-b border-gray-100">7 to 14 days</td>
                      <td className="px-3 py-3 border-b border-gray-100">25% of balance paid</td>
                      <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-900">Partial refund</span></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3">Less than 7 days</td>
                      <td className="px-3 py-3">No refund</td>
                      <td className="px-3 py-3"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-red-50 text-red-900">No refund</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm leading-relaxed">
                <p>Pre-paid third-party services (hotels, domestic flights, tickets) are subject to each provider's own cancellation terms. We will recover whatever is refundable on your behalf, but cannot guarantee those amounts.</p>
              </div>
            </div>
          </div>

          {/* Field Trips */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-base font-semibold text-wp-forest">University Field Trips & Group Programs</h2>
            </div>
            <div className="px-5 py-5 bg-white space-y-4">
              <p className="text-sm leading-relaxed text-gray-700">Field trips require a <strong>40% non-refundable deposit</strong> upon contract signing to secure permits, guides, transportation, and logistics. The remaining 60% is due no later than <strong>30 days before the program start date</strong>.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Notice given before program</th>
                      <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Refund of balance</th>
                      <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-3 border-b border-gray-100">45 days or more</td>
                      <td className="px-3 py-3 border-b border-gray-100">100% of balance (deposit non-refundable)</td>
                      <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-50 text-teal-900">Balance refunded</span></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 border-b border-gray-100">30 to 44 days</td>
                      <td className="px-3 py-3 border-b border-gray-100">50% of balance</td>
                      <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-900">Partial refund</span></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3">Less than 30 days</td>
                      <td className="px-3 py-3">No refund</td>
                      <td className="px-3 py-3"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-red-50 text-red-900">No refund</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">Group size reductions of more than 20% after confirmation are treated as a partial cancellation and subject to the same schedule above, applied to the reduced portion.</p>
            </div>
          </div>

          {/* Latin America Trips */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-base font-semibold text-wp-forest">Organized Trips to Latin America</h2>
            </div>
            <div className="px-5 py-5 bg-white space-y-4">
              <p className="text-sm leading-relaxed text-gray-700">International programs require a <strong>35% non-refundable deposit</strong> at booking. Full payment is due <strong>45 days before departure</strong>. Failure to pay by this date constitutes a cancellation with no refund issued.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Notice given before departure</th>
                      <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Refund of balance paid</th>
                      <th className="text-left px-3 py-2 font-semibold bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wide">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-3 border-b border-gray-100">60 days or more</td>
                      <td className="px-3 py-3 border-b border-gray-100">100% of balance (deposit non-refundable)</td>
                      <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-50 text-teal-900">Balance refunded</span></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 border-b border-gray-100">45 to 59 days</td>
                      <td className="px-3 py-3 border-b border-gray-100">50% of balance</td>
                      <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-900">Partial refund</span></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 border-b border-gray-100">30 to 44 days</td>
                      <td className="px-3 py-3 border-b border-gray-100">25% of balance</td>
                      <td className="px-3 py-3 border-b border-gray-100"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-900">Partial refund</span></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3">Less than 30 days</td>
                      <td className="px-3 py-3">No refund</td>
                      <td className="px-3 py-3"><span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-red-50 text-red-900">No refund</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 text-sm leading-relaxed">
                <p><strong>Important:</strong> International airline tickets, entry permits, and cross-border accommodation are non-refundable once issued. We strongly recommend purchasing comprehensive travel insurance covering cancellation, medical evacuation, and trip interruption.</p>
              </div>
            </div>
          </div>

          {/* Weather / Force Majeure */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-base font-semibold text-wp-forest">Cancellations Due to Weather or Force Majeure</h2>
            </div>
            <div className="px-5 py-5 bg-white space-y-4">
              <p className="text-sm leading-relaxed text-gray-700">If we cancel a tour due to extreme weather, road closures, natural events, or circumstances beyond our control, clients will receive a <strong>full credit valid for 12 months</strong>, or a <strong>full refund</strong> if rescheduling is not possible. This is at our sole discretion based on the situation.</p>
              <p className="text-sm leading-relaxed text-gray-700">We are not responsible for cancellations caused by client-side circumstances (illness, missed flights, travel restrictions, personal emergencies). We strongly recommend travel insurance for all bookings.</p>
              <div className="flex gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm leading-relaxed">
                <p>Costa Rica's tropical climate involves rain year-round. Light or typical rain does not constitute grounds for cancellation — tours operate in these conditions. Only severe weather that presents a genuine safety risk qualifies.</p>
              </div>
            </div>
          </div>

          {/* Rescheduling */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-base font-semibold text-wp-forest">Rescheduling</h2>
            </div>
            <div className="px-5 py-5 bg-white">
              <p className="text-sm leading-relaxed text-gray-700">One complimentary reschedule is offered per booking, provided notice is given at least <strong>48 hours in advance</strong> for day tours, and <strong>14 days in advance</strong> for multi-day programs. Subject to availability. A second reschedule incurs a 15% administrative fee. Rescheduling within the minimum notice window is not permitted and will be treated as a cancellation.</p>
            </div>
          </div>

          {/* How to Cancel */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-base font-semibold text-wp-forest">How to Cancel — Required Procedure</h2>
            </div>
            <div className="px-5 py-5 bg-white space-y-3">
              <p className="text-sm leading-relaxed text-gray-700">All cancellations must be submitted <strong>in writing</strong> via email to our official contact address. The cancellation date is the date we receive your written notice — not the date of verbal communication or the date the email was sent. No exceptions.</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-2">
                <li>Cancellation requests made by phone, WhatsApp, or social media are <strong>not accepted</strong> as formal notice.</li>
                <li>Refunds, when applicable, are processed within <strong>10 business days</strong> by the same payment method used at booking.</li>
                <li>Bank transfer fees or currency conversion losses are the client's responsibility.</li>
              </ul>
            </div>
          </div>

          {/* Binding acceptance */}
          <div className="flex gap-3 p-4 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 text-sm leading-relaxed">
            <p>By confirming a booking and paying a deposit, the client acknowledges they have read, understood, and accepted this cancellation policy in full. This policy is binding regardless of whether the client has explicitly signed a separate contract.</p>
          </div>

          <hr className="border-t border-gray-200" />
          <p className="text-xs text-gray-400 text-center pb-4">Questions about this policy? Contact us before booking — we're happy to clarify anything.</p>

        </div>
      </section>
    </div>
  )
}
