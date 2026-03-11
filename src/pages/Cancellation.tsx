export default function Cancellation() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            INFORMACIÓN IMPORTANTE
          </p>
          <h1 className="headline-lg text-white">
            Política de Cancelación
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 lg:p-12 shadow-card space-y-8">
            <p className="body-text text-graytext">
              En Wild Path Costa Rica entendemos que los planes pueden cambiar. 
              Nuestra política de cancelación está diseñada para ser justa tanto 
              para nuestros viajeros como para las comunidades locales con las que trabajamos.
            </p>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                Cancelaciones por Parte del Viajero
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-wp-yellow/5 border-l-4 border-wp-yellow">
                  <h3 className="font-display font-semibold text-wp-forest mb-2">
                    Más de 30 días antes del inicio
                  </h3>
                  <p className="body-text text-graytext">
                    Reembolso del 100% del depósito inicial, menos gastos administrativos 
                    de $50 por persona.
                  </p>
                </div>

                <div className="p-6 bg-wp-yellow/5 border-l-4 border-wp-yellow">
                  <h3 className="font-display font-semibold text-wp-forest mb-2">
                    Entre 15 y 30 días antes del inicio
                  </h3>
                  <p className="body-text text-graytext">
                    Reembolso del 50% del depósito inicial. El 50% restante puede 
                    ser utilizado como crédito para una futura reserva dentro de 
                    los 12 meses siguientes.
                  </p>
                </div>

                <div className="p-6 bg-wp-yellow/5 border-l-4 border-wp-yellow">
                  <h3 className="font-display font-semibold text-wp-forest mb-2">
                    Menos de 15 días antes del inicio
                  </h3>
                  <p className="body-text text-graytext">
                    No hay reembolso del depósito inicial. Sin embargo, el monto 
                    pagado puede ser transferido a otra persona.
                  </p>
                </div>

                <div className="p-6 bg-wp-yellow/5 border-l-4 border-wp-yellow">
                  <h3 className="font-display font-semibold text-wp-forest mb-2">
                    Menos de 7 días antes del inicio
                  </h3>
                  <p className="body-text text-graytext">
                    No hay reembolso ni transferencia posible. Se cobrará el 
                    100% del valor total del itinerario.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                Cancelaciones por Parte de Wild Path Costa Rica
              </h2>
              <p className="body-text text-graytext mb-4">
                En casos excepcionales donde Wild Path Costa Rica deba cancelar 
                una experiencia:
              </p>
              <ul className="list-disc list-inside space-y-2 body-text text-graytext ml-4">
                <li>Se ofrecerá un reembolso del 100% de todos los pagos realizados</li>
                <li>O la opción de reprogramar la experiencia sin costo adicional</li>
                <li>O un crédito del 120% del valor pagado para una futura reserva</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                Seguro de Viaje
              </h2>
              <p className="body-text text-graytext">
                Recomendamos encarecidamente contratar un seguro de viaje que cubra 
                cancelaciones por emergencias médicas, problemas familiares o cualquier 
                otra circunstancia imprevista.
              </p>
            </section>

            <div className="pt-8 border-t border-wp-forest/10">
              <p className="text-sm text-graytext">
                Última actualización: Febrero 2025
              </p>
              <p className="text-sm text-graytext mt-4">
                Para preguntas, contáctanos en{' '}
                <a href="mailto:wildpathcr@gmail.com" className="text-wp-yellow hover:underline">
                  wildpathcr@gmail.com
                </a>
                {' '}o por WhatsApp al +506 8985 7750.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
