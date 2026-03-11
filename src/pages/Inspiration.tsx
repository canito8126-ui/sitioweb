import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  Mountain, 
  Binoculars, 
  Heart, 
  Users, 
  Sparkles, 
  Camera, 
  Coffee,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle2
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Inspiration() {
  const { t } = useTranslation()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.package-card').forEach((card, i) => {
        gsap.fromTo(card, 
          { y: 50, opacity: 0 }, 
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

  const packages = [
    {
      id: 'adventure',
      title: t('inspiration.packages.adventure.title'),
      duration: t('inspiration.packages.adventure.duration'),
      description: t('inspiration.packages.adventure.description'),
      image: '/images/pkg-adventure.jpg',
      icon: Mountain,
      highlights: [
        'Rafting en río Pacuare',
        'Canopy en Monteverde',
        'Rappel en cataratas',
        'Senderismo en volcanes'
      ],
      locations: ['Pacuare', 'Monteverde', 'Arenal', 'Manuel Antonio'],
      color: 'from-orange-500/80 to-red-600/80'
    },
    {
      id: 'wildlife',
      title: t('inspiration.packages.wildlife.title'),
      duration: t('inspiration.packages.wildlife.duration'),
      description: t('inspiration.packages.wildlife.description'),
      image: '/images/pkg-wildlife.jpg',
      icon: Binoculars,
      highlights: [
        'Corcovado: la Amazonía de Costa Rica',
        'Tortuguero: desove de tortugas',
        'Monteverde: quetzales y bellos',
        'Cahuita: arrecifes de coral'
      ],
      locations: ['Corcovado', 'Tortuguero', 'Monteverde', 'Cahuita'],
      color: 'from-green-600/80 to-emerald-700/80'
    },
    {
      id: 'wellness',
      title: t('inspiration.packages.wellness.title'),
      duration: t('inspiration.packages.wellness.duration'),
      description: t('inspiration.packages.wellness.description'),
      image: '/images/pkg-wellness.jpg',
      icon: Heart,
      highlights: [
        'Yoga con vista al océano',
        'Aguas termales naturales',
        'Spa con productos locales',
        'Meditación en la selva'
      ],
      locations: ['Nosara', 'Tabacón', 'Osa Peninsula', 'Santa Teresa'],
      color: 'from-pink-500/80 to-rose-600/80'
    },
    {
      id: 'family',
      title: t('inspiration.packages.family.title'),
      duration: t('inspiration.packages.family.duration'),
      description: t('inspiration.packages.family.description'),
      image: '/images/pkg-family.jpg',
      icon: Users,
      highlights: [
        'Observación de animales',
        'Playa segura para niños',
        'Actividades educativas',
        'Hoteles familiares'
      ],
      locations: ['Manuel Antonio', 'Tortuguero', 'Monteverde', 'Guanacaste'],
      color: 'from-blue-500/80 to-cyan-600/80'
    },
    {
      id: 'romantic',
      title: t('inspiration.packages.romantic.title'),
      duration: t('inspiration.packages.romantic.duration'),
      description: t('inspiration.packages.romantic.description'),
      image: '/images/pkg-romantic.jpg',
      icon: Sparkles,
      highlights: [
        'Cena privada en la playa',
        'Atardecer en catamarán',
        'Hotel boutique con vista',
        'Tour de chocolate y vino'
      ],
      locations: ['Manuel Antonio', 'Guanacaste', 'Puerto Viejo', 'Drake Bay'],
      color: 'from-purple-500/80 to-violet-600/80'
    },
    {
      id: 'culture',
      title: t('inspiration.packages.culture.title'),
      duration: t('inspiration.packages.culture.duration'),
      description: t('inspiration.packages.culture.description'),
      image: '/images/pkg-culture.jpg',
      icon: Coffee,
      highlights: [
        'Tour de café en plantación',
        'Chocolate artesanal',
        'Pueblos típicos',
        'Gastronomía local'
      ],
      locations: ['Naranjo', 'Sarchí', 'San Ramón', 'Turrialba'],
      color: 'from-amber-600/80 to-yellow-700/80'
    },
    {
      id: 'photography',
      title: t('inspiration.packages.photography.title'),
      duration: t('inspiration.packages.photography.duration'),
      description: t('inspiration.packages.photography.description'),
      image: '/images/pkg-photography.jpg',
      icon: Camera,
      highlights: [
        'Mejores horarios para luz',
        'Escondites de fotógrafos',
        'Guía fotógrafo experto',
        'Workshops de edición'
      ],
      locations: ['Corcovado', 'Monteverde', 'Tortuguero', 'Bijagua'],
      color: 'from-teal-500/80 to-cyan-600/80'
    }
  ]

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/pkg-hero.jpg" 
            alt="Inspiración" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('inspiration.badge')}
          </p>
          <h1 className="headline-xl text-white mb-6">
            {t('inspiration.title')}
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            {t('inspiration.subtitle')}
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className="package-card group relative bg-white shadow-card overflow-hidden hover:shadow-hover transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${pkg.color} opacity-60`} />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <pkg.icon size={24} className="text-wp-forest" />
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-wp-yellow text-white px-3 py-1 text-sm font-medium">
                    <Clock size={14} className="inline mr-1" />
                    {pkg.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-wp-forest mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-graytext text-sm mb-4 line-clamp-2">
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-wp-forest/70">
                        <CheckCircle2 size={14} className="text-wp-yellow flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Locations */}
                  <div className="flex items-center gap-1 text-xs text-graytext mb-6">
                    <MapPin size={12} className="text-wp-green" />
                    {pkg.locations.join(' · ')}
                  </div>

                  {/* CTA */}
                  <Link 
                    to={`/contacto?package=${pkg.id}`}
                    className="btn-secondary w-full text-center block text-sm"
                  >
                    {t('inspiration.cta')}
                    <ArrowRight size={16} className="inline ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-6">
            ¿Ninguno de estos paquetes es exactamente lo que buscas?
          </h2>
          <p className="body-text text-white/70 mb-10 max-w-2xl mx-auto">
            Podemos crear un itinerario completamente personalizado combinando elementos 
            de diferentes paquetes o diseñando algo completamente nuevo según tus intereses.
          </p>
          <Link to="/contacto" className="btn-primary">
            CREAR MI ITINERARIO PERSONALIZADO
          </Link>
        </div>
      </section>
    </div>
  )
}
