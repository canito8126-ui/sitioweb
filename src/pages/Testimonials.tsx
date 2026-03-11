import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.testimonial-card').forEach((card, i) => {
        gsap.fromTo(card, 
          { y: 40, opacity: 0 }, 
          { 
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  const testimonials = [
    {
      name: 'María y Carlos',
      location: 'España',
      trip: 'Viaje de 10 días',
      rating: 5,
      text: 'Wild Path diseñó exactamente el viaje que soñaba. Cada detalle estuvo pensado para nosotros. No fue un tour genérico, fue NUESTRA aventura. Desde la primera llamada supieron entender qué buscábamos y lo hicieron realidad.',
      image: '/images/test-1.jpg'
    },
    {
      name: 'Familia Rodríguez',
      location: 'México',
      trip: 'Viaje familiar de 7 días',
      rating: 5,
      text: 'Viajamos con niños de 8 y 12 años y fue perfecto. Las actividades estaban adaptadas para toda la familia. Los guías fueron increíblemente pacientes y educativos. Nuestros hijos aprendieron tanto sobre naturaleza.',
      image: '/images/test-2.jpg'
    },
    {
      name: 'Sarah Johnson',
      location: 'Estados Unidos',
      trip: 'Experiencia de avistamiento',
      rating: 5,
      text: 'Como fotógrafa de naturaleza, necesitaba algo específico. Wild Path no solo entendió mis necesidades sino que las superaron. Vimos quetzales, tucanes y más de 80 especies de aves en un solo día.',
      image: '/images/test-3.jpg'
    },
    {
      name: 'Thomas y Emma',
      location: 'Alemania',
      trip: 'Luna de miel de 14 días',
      rating: 5,
      text: 'Nuestra luna de miel fue mágica gracias a Wild Path. Combinaron aventura con momentos románticos perfectamente. Cada hotel, cada restaurante, cada actividad fue cuidadosamente seleccionado.',
      image: '/images/test-4.jpg'
    },
    {
      name: 'Ana Patricia',
      location: 'Colombia',
      trip: 'Viaje sola de 5 días',
      rating: 5,
      text: 'Viajar sola puede ser intimidante, pero me sentí segura y acompañada en todo momento. El equipo de Wild Path estuvo pendiente de cada detalle. Hice amigos, viví aventuras y me reconecté con la naturaleza.',
      image: '/images/test-5.jpg'
    },
    {
      name: 'Jean-Pierre',
      location: 'Francia',
      trip: 'Experiencia de 3 días',
      rating: 5,
      text: 'La caminata nocturna fue una de las experiencias más increíbles de mi vida. Ver la selva despertar de noche, escuchar los sonidos, ver las ranas bioluminiscentes... Simplemente mágico.',
      image: '/images/test-6.jpg'
    }
  ]

  const stats = [
    { number: '500+', label: 'Viajeros felices' },
    { number: '98%', label: 'Recomiendan' },
    { number: '4.9', label: 'Rating promedio' },
    { number: '100%', label: 'Personalizado' }
  ]

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/test-hero.jpg" 
            alt="Testimonios" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            HISTORIAS REALES
          </p>
          <h1 className="headline-xl text-white mb-6">
            Testimonios
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            Lo que nuestros viajeros dicen sobre sus experiencias 
            personalizadas con Wild Path Costa Rica.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-12 bg-wp-cream border-b border-wp-forest/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display font-bold text-4xl lg:text-5xl text-wp-yellow mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-graytext">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card bg-white p-8 shadow-card hover:shadow-hover transition-shadow"
              >
                {/* Quote Icon */}
                <Quote size={32} className="text-wp-yellow/30 mb-6" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-wp-yellow fill-wp-yellow" />
                  ))}
                </div>

                {/* Text */}
                <p className="body-text text-wp-forest mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-wp-forest/10">
                  <div className="w-12 h-12 bg-wp-green/20 rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-wp-forest">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-wp-forest">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-graytext">
                      {testimonial.location} · {testimonial.trip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-6">
            ¿Listo para tu propia historia?
          </h2>
          <p className="body-text text-white/70 mb-10 max-w-2xl mx-auto">
            Únete a cientos de viajeros que han vivido experiencias 
            inolvidables diseñadas especialmente para ellos.
          </p>
          <a 
            href="https://wa.me/50689857750"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#25D366] hover:bg-[#128C7E]"
          >
            EMPIEZA TU AVENTURA
          </a>
        </div>
      </section>
    </div>
  )
}
