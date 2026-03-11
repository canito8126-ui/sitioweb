import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Instagram,
  Facebook,
  Send,
  Clock,
  CheckCircle2
} from 'lucide-react'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDates: '',
    travelers: '',
    interests: [] as string[],
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const interests = [
    'Aventura',
    'Fauna y flora',
    'Aves',
    'Cataratas',
    'Cultura local',
    'Gastronomía',
    'Fotografía',
    'Relax'
  ]

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/contact-hero.jpg" 
            alt="Contacto" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            EMPIEZA TU AVENTURA
          </p>
          <h1 className="headline-xl text-white mb-6">
            Contacto
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            Agenda tu llamada gratuita y descubre cómo podemos diseñar 
            tu experiencia perfecta en Costa Rica.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="headline-lg text-wp-forest mb-8">
                Hablemos de tu viaje
              </h2>
              <p className="body-text text-graytext mb-10">
                Estamos aquí para escuchar tus ideas y convertirlas en una experiencia 
                inolvidable. Contáctanos por el medio que prefieras.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-10">
                <a 
                  href="https://wa.me/50689857750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white shadow-card hover:shadow-hover transition-shadow group"
                >
                  <div className="w-14 h-14 bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={28} className="text-white" fill="white" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-wp-forest group-hover:text-wp-yellow transition-colors">
                      WhatsApp
                    </p>
                    <p className="text-graytext">+506 8985 7750</p>
                  </div>
                </a>

                <a 
                  href="tel:+50689857750"
                  className="flex items-center gap-4 p-4 bg-white shadow-card hover:shadow-hover transition-shadow group"
                >
                  <div className="w-14 h-14 bg-wp-yellow flex items-center justify-center flex-shrink-0">
                    <Phone size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-wp-forest group-hover:text-wp-yellow transition-colors">
                      Llámanos
                    </p>
                    <p className="text-graytext">+506 8985 7750</p>
                  </div>
                </a>

                <a 
                  href="mailto:wildpathcr@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white shadow-card hover:shadow-hover transition-shadow group"
                >
                  <div className="w-14 h-14 bg-wp-forest flex items-center justify-center flex-shrink-0">
                    <Mail size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-wp-forest group-hover:text-wp-yellow transition-colors">
                      Email
                    </p>
                    <p className="text-graytext">wildpathcr@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 mb-10">
                <MapPin size={24} className="text-wp-yellow flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-semibold text-wp-forest mb-1">
                    Ubicación
                  </p>
                  <p className="text-graytext">
                    Bajos del Toro, Costa Rica
                  </p>
                  <p className="text-sm text-graytext/70 mt-1">
                    Operamos en toda Costa Rica con base en la zona central
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-10">
                <Clock size={24} className="text-wp-yellow flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-semibold text-wp-forest mb-1">
                    Horario de atención
                  </p>
                  <p className="text-graytext">
                    Lunes a Domingo: 7:00 AM - 8:00 PM
                  </p>
                  <p className="text-sm text-graytext/70 mt-1">
                    Respondemos en menos de 24 horas
                  </p>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-display font-semibold text-wp-forest mb-4">
                  Síguenos
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/wildpath.cr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-wp-forest flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Wild-Path-Costa-Rica/61561795049271/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-wp-forest flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@wildpathcostarica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-wp-forest flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
                  >
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-10 shadow-card">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-wp-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-wp-yellow" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-wp-forest mb-4">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-graytext mb-6">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas 
                    para agendar tu llamada gratuita.
                  </p>
                  <a 
                    href="https://wa.me/50689857750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-[#25D366] hover:bg-[#128C7E]"
                  >
                    <MessageCircle size={18} className="inline mr-2" />
                    ESCRÍBENOS POR WHATSAPP
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-xl text-wp-forest mb-6">
                    Cuéntanos sobre tu viaje soñado
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="micro-label text-wp-forest mb-2 block">
                          NOMBRE
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Tu nombre"
                          className="w-full border-b border-wp-forest/30 py-3 focus:outline-none focus:border-wp-yellow transition-colors"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="micro-label text-wp-forest mb-2 block">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="tu@email.com"
                          className="w-full border-b border-wp-forest/30 py-3 focus:outline-none focus:border-wp-yellow transition-colors"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    {/* Phone & Travel Dates */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="micro-label text-wp-forest mb-2 block">
                          TELÉFONO
                        </label>
                        <input
                          type="tel"
                          placeholder="+506 0000 0000"
                          className="w-full border-b border-wp-forest/30 py-3 focus:outline-none focus:border-wp-yellow transition-colors"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="micro-label text-wp-forest mb-2 block">
                          FECHAS APROXIMADAS
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: Marzo 2025"
                          className="w-full border-b border-wp-forest/30 py-3 focus:outline-none focus:border-wp-yellow transition-colors"
                          value={formData.travelDates}
                          onChange={(e) => setFormData({...formData, travelDates: e.target.value})}
                        />
                      </div>
                    </div>

                    {/* Number of Travelers */}
                    <div>
                      <label className="micro-label text-wp-forest mb-2 block">
                        NÚMERO DE VIAJEROS
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: 2 adultos, 1 niño"
                        className="w-full border-b border-wp-forest/30 py-3 focus:outline-none focus:border-wp-yellow transition-colors"
                        value={formData.travelers}
                        onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                      />
                    </div>

                    {/* Interests */}
                    <div>
                      <label className="micro-label text-wp-forest mb-4 block">
                        ¿QUÉ TE INTERESA? (Selecciona varios)
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {interests.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => handleInterestChange(interest)}
                            className={`px-4 py-2 text-sm border transition-colors ${
                              formData.interests.includes(interest)
                                ? 'bg-wp-yellow border-wp-yellow text-white'
                                : 'border-wp-forest/30 text-wp-forest hover:border-wp-yellow'
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="micro-label text-wp-forest mb-2 block">
                        CUÉNTANOS MÁS
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe tu viaje ideal, experiencias previas, o cualquier detalle importante..."
                        className="w-full border-b border-wp-forest/30 py-3 focus:outline-none focus:border-wp-yellow transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      ENVIAR MENSAJE
                    </button>

                    <p className="text-xs text-graytext text-center">
                      Al enviar, aceptas nuestra{' '}
                      <a href="/privacidad" className="text-wp-yellow hover:underline">
                        política de privacidad
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
