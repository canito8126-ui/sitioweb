export default function Terms() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            INFORMACIÓN LEGAL
          </p>
          <h1 className="headline-lg text-white">
            Términos y Condiciones
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 lg:p-12 shadow-card space-y-8">
            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                1. Reservas y Pagos
              </h2>
              <p className="body-text text-graytext mb-4">
                Para confirmar una reserva, se requiere un depósito del 30% del valor total 
                del itinerario. El saldo restante debe ser cancelado hasta 15 días antes 
                del inicio de la experiencia.
              </p>
              <p className="body-text text-graytext">
                Aceptamos transferencias bancarias, SINPE Móvil y pagos en efectivo. 
                Para pagos internacionales, se aplican las comisiones bancarias correspondientes.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                2. Inclusión en los Itinerarios
              </h2>
              <p className="body-text text-graytext mb-4">
                Nuestros itinerarios personalizados incluyen:
              </p>
              <ul className="list-disc list-inside space-y-2 body-text text-graytext ml-4">
                <li>Transporte durante las actividades programadas</li>
                <li>Guía local especializado</li>
                <li>Entradas a parques y reservas</li>
                <li>Comidas especificadas en el itinerario</li>
                <li>Equipo necesario para las actividades</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                3. No Incluido
              </h2>
              <p className="body-text text-graytext mb-4">
                Los siguientes elementos no están inclidos a menos que se especifique lo contrario:
              </p>
              <ul className="list-disc list-inside space-y-2 body-text text-graytext ml-4">
                <li>Vuelos internacionales o nacionales</li>
                <li>Seguro de viaje (obligatorio)</li>
                <li>Bebidas alcohólicas</li>
                <li>Gastos personales</li>
                <li>Propinas (opcionales)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                4. Responsabilidades del Viajero
              </h2>
              <p className="body-text text-graytext mb-4">
                El viajero es responsable de:
              </p>
              <ul className="list-disc list-inside space-y-2 body-text text-graytext ml-4">
                <li>Contar con pasaporte vigente (mínimo 6 meses)</li>
                <li>Obtener los visados necesarios</li>
                <li>Contratar seguro de viaje con cobertura médica</li>
                <li>Informar sobre condiciones médicas relevantes</li>
                <li>Seguir las instrucciones de los guías</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                5. Seguridad
              </h2>
              <p className="body-text text-graytext">
                La seguridad de nuestros viajeros es nuestra prioridad. Nos reservamos 
                el derecho de modificar o cancelar actividades si las condiciones 
                climáticas o de seguridad lo requieren.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                6. Modificaciones al Itinerario
              </h2>
              <p className="body-text text-graytext">
                Wild Path Costa Rica se reserva el derecho de realizar modificaciones 
                menores al itinerario cuando sea necesario por razones operativas, 
                climáticas o de seguridad.
              </p>
            </section>

            <div className="pt-8 border-t border-wp-forest/10">
              <p className="text-sm text-graytext">
                Última actualización: Febrero 2025
              </p>
              <p className="text-sm text-graytext mt-2">
                Si tienes alguna pregunta sobre estos términos, contáctanos en{' '}
                <a href="mailto:wildpathcr@gmail.com" className="text-wp-yellow hover:underline">
                  wildpathcr@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
