import { useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  Moon, 
  Bird, 
  Droplets, 
  Trees,
  UtensilsCrossed,
  MapPin,
  ArrowRight,
  Clock,
  Users
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type ExpKey = 'nocturnal' | 'birds' | 'waterfalls' | 'forest' | 'naturalist' | 'cooking'

const EXP_META: { key: ExpKey; image: string; icon: typeof Moon }[] = [
  { key: 'nocturnal', image: '/images/exp-nocturna.jpg', icon: Moon },
  { key: 'birds', image: '/images/exp-aves.jpg', icon: Bird },
  { key: 'waterfalls', image: '/images/exp-catarata.jpg', icon: Droplets },
  { key: 'forest', image: '/images/exp-bosque.jpg', icon: Trees },
  { key: 'naturalist', image: '/images/exp-naturalista.jpg', icon: MapPin },
  { key: 'cooking', image: '/images/exp-cocina.jpg', icon: UtensilsCrossed },
]

export default function Experiences() {
  const { t } = useTranslation()

  const experiences = useMemo(
    () =>
      EXP_META.map(({ key, image, icon }) => {
        const data = t(`pages.experiences.items.${key}`, { returnObjects: true }) as {
          title: string
          description: string
          duration: string
          groupSize: string
          location: string
          highlights: string[]
        }
        return { ...data, image, icon, key }
      }),
    [t]
  )

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.experience-card').forEach((card, i) => {
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

<<<<<<< HEAD
  const experiences = [
    {
      title: 'Caminatas Nocturnas',
      description: 'Descubre el mundo que despierta cuando el sol se oculta. Observa ranas, insectos bioluminiscentes y mamíferos nocturnos en su hábitat natural.',
      image: '/images/exp-nocturna.jpg',
      icon: Moon,
      duration: '2 horas',
      groupSize: '1-15 personas',
      location: 'Bajos del Toro',
      highlights: [
        'Observación de fauna nocturna',
        'Guía especializado',
        'Equipo de iluminación incluido',
        'Snack local'
      ]
    },
    {
      title: 'Avistamiento de Aves',
      description: 'Costa Rica alberga más del 10% de las especies de aves del mundo. Acompáñanos a descubrir quetzales, tucanes, colibríes y cientos de especies más.',
      image: '/images/exp-aves.jpg',
      icon: Bird,
      duration: '2-4 horas',
      groupSize: '1-10 personas',
      location: 'Reservas privadas',
      highlights: [
        'Guía ornitólogo certificado',
        'Telescopio y binoculares',
        'Más de 100 especies posibles',
        'Desayuno típico incluido'
      ]
    },
    {
      title: 'Caminatas a Cataratas',
      description: 'Explora cascadas escondidas en medio de la selva. Camina por senderos vírgenes, cruza ríos cristalinos y déjate sorprender por la majestuosidad de las cataratas.',
      image: '/images/exp-catarata.jpg',
      icon: Droplets,
      duration: '5-6 horas',
      groupSize: '1-15 personas',
      location: 'Múltiples cataratas',
      highlights: [
        '3-5 cataratas diferentes',
        'Baño en pozas naturales',
        'Guía especializado',
        'Nivel de dificultad adaptable'
      ]
    },
    {
      title: 'Caminatas en Bosque Maduro',
      description: 'Sumérgete en ecosistemas primarios donde la naturaleza ha evolucionado sin intervención humana. Árboles centenarios, orquídeas silvestres y biodiversidad impresionante.',
      image: '/images/exp-bosque.jpg',
      icon: Trees,
      duration: '3-4 horas',
      groupSize: '1-15 personas',
      location: 'Bosques primarios',
      highlights: [
        'Bosque primario milenario',
        'Guía naturalista experto',
        'Interpretación ecológica',
        'Fotografía de naturaleza'
      ]
    },
    {
      title: 'Caminatas Naturalistas',
      description: 'Aprende sobre la flora, fauna y ecosistemas de Costa Rica de la mano de un naturalista experto. Una experiencia educativa para toda la familia.',
      image: '/images/exp-naturalista.jpg',
      icon: MapPin,
      duration: '3-4 horas',
      groupSize: '1-15 personas',
      location: 'Senderos locales',
      highlights: [
        'Enfoque educativo',
        'Ideal para familias',
        'Material didáctico',
        'Actividades interactivas'
      ]
    },
    {
      title: 'Cocina Típica Costarricense',
      description: 'Aprende a preparar platillos tradicionales costarricenses con ingredientes locales y técnicas campesinas. Una experiencia gastronómica auténtica.',
      image: '/images/exp-cocina.jpg',
      icon: UtensilsCrossed,
      duration: '3-4 horas',
      groupSize: '1-15 personas',
      location: 'Finca local',
      highlights: [
        'Ingredientes 100% locales',
        'Recetas tradicionales',
        'Degustación incluida',
        'Recetario de regalo'
      ]
    }
  ]

=======
>>>>>>> e0a5d30a25d7585f6c1ae62b5b4f5c86437f97ba
  return (
    <div className="pt-24 lg:pt-32">
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/exp-bosque.jpg" 
            alt={t('pages.experiences.hero.alt')} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('pages.experiences.hero.badge')}
          </p>
          <h1 className="headline-xl text-white mb-6">
            {t('pages.experiences.hero.title')}
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            {t('pages.experiences.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {experiences.map((exp) => (
              <div 
                key={exp.key}
                className="experience-card bg-white shadow-card overflow-hidden group hover:shadow-hover transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-wp-yellow flex items-center justify-center">
                    <exp.icon size={24} className="text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-display font-bold text-2xl text-wp-forest mb-4">
                    {exp.title}
                  </h3>
                  <p className="body-text text-graytext mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-wp-forest/70">
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-wp-yellow" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} className="text-wp-yellow" />
                      {exp.groupSize}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-wp-yellow" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-wp-forest/70">
                        <span className="w-1.5 h-1.5 bg-wp-yellow rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contacto"
                    className="inline-flex items-center gap-2 text-wp-yellow font-medium hover:underline"
                  >
                    {t('pages.experiences.bookCta')}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-6">
            {t('pages.experiences.cta.title')}
          </h2>
          <p className="body-text text-white/70 mb-10 max-w-2xl mx-auto">
            {t('pages.experiences.cta.subtitle')}
          </p>
          <Link to="/contacto" className="btn-primary">
            {t('pages.experiences.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
