import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
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

export default function Experiences() {
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

  const experiences = [
    {
      title: 'Caminatas Nocturnas',
      description: 'Descubre el mundo que despierta cuando el sol se oculta. Observa ranas, insectos bioluminiscentes y mamíferos nocturnos en su hábitat natural.',
      image: '/images/exp-nocturna.jpg',
      icon: Moon,
      duration: '3-4 horas',
      groupSize: '2-8 personas',
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
      duration: '4-5 horas',
      groupSize: '2-6 personas',
      location: 'Reservas privadas',
      highlights: [
        'Guía ornitólogo certificado',
        'Telescopio y binoculares',
        'Más de 200 especies posibles',
        'Desayuno típico incluido'
      ]
    },
    {
      title: 'Caminatas a Cataratas',
      description: 'Explora cascadas escondidas en medio de la selva. Camina por senderos vírgenes, cruza ríos cristalinos y déjate sorprender por la majestuosidad de las cataratas.',
      image: '/images/exp-catarata.jpg',
      icon: Droplets,
      duration: '5-6 horas',
      groupSize: '2-10 personas',
      location: 'Múltiples cataratas',
      highlights: [
        '3-5 cataratas diferentes',
        'Baño en pozas naturales',
        'Almuerzo picnic',
        'Nivel de dificultad adaptable'
      ]
    },
    {
      title: 'Caminatas en Bosque Maduro',
      description: 'Sumérgete en ecosistemas primarios donde la naturaleza ha evolucionado sin intervención humana. Árboles centenarios, orquídeas silvestres y biodiversidad impresionante.',
      image: '/images/exp-bosque.jpg',
      icon: Trees,
      duration: '4-6 horas',
      groupSize: '2-8 personas',
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
      groupSize: '2-12 personas',
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
      description: 'Aprende a preparar platillos tradicionales costarricenses con ingredientes locales y técnicas ancestrales. Una experiencia gastronómica auténtica.',
      image: '/images/exp-cocina.jpg',
      icon: UtensilsCrossed,
      duration: '3-4 horas',
      groupSize: '2-8 personas',
      location: 'Finca local',
      highlights: [
        'Ingredientes 100% locales',
        'Recetas tradicionales',
        'Degustación incluida',
        'Recetario de regalo'
      ]
    }
  ]

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/exp-bosque.jpg" 
            alt="Experiencias" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            BAJOS DEL TORO Y ALREDEDORES
          </p>
          <h1 className="headline-xl text-white mb-6">
            Experiencias de un día
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            Descubre las maravillas naturales de Costa Rica con experiencias 
            diseñadas para conectar auténticamente con la naturaleza.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="experience-card bg-white shadow-card overflow-hidden group hover:shadow-hover transition-shadow"
              >
                {/* Image */}
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

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display font-bold text-2xl text-wp-forest mb-4">
                    {exp.title}
                  </h3>
                  <p className="body-text text-graytext mb-6">
                    {exp.description}
                  </p>

                  {/* Details */}
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

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-wp-forest/70">
                        <span className="w-1.5 h-1.5 bg-wp-yellow rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link 
                    to="/contacto"
                    className="inline-flex items-center gap-2 text-wp-yellow font-medium hover:underline"
                  >
                    Reservar esta experiencia
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Experience CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-6">
            ¿Quieres algo más personalizado?
          </h2>
          <p className="body-text text-white/70 mb-10 max-w-2xl mx-auto">
            Podemos combinar varias experiencias o diseñar algo completamente 
            nuevo según tus intereses y tiempo disponible.
          </p>
          <Link to="/contacto" className="btn-primary">
            DISEÑA TU EXPERIENCIA
          </Link>
        </div>
      </section>
    </div>
  )
}
