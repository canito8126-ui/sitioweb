import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Leaf, 
  Heart, 
  Users, 
  Globe,
  TreePine,
  Recycle
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content', 
        { y: 40, opacity: 0 }, 
        { 
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.utils.toArray<HTMLElement>('.value-card').forEach((card, i) => {
        gsap.fromTo(card, 
          { y: 30, opacity: 0 }, 
          { 
            y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
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

  const values = [
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Cada experiencia está diseñada para minimizar el impacto ambiental y contribuir a la conservación de los ecosistemas que visitamos.'
    },
    {
      icon: Heart,
      title: 'Autenticidad',
      description: 'Conexiones reales con la naturaleza, las comunidades locales y las tradiciones costarricenses. Nada de experiencias artificiales.'
    },
    {
      icon: Users,
      title: 'Turismo Local',
      description: 'Trabajamos exclusivamente con guías locales, familias anfitrionas y pequeños emprendimientos de la comunidad.'
    },
    {
      icon: Globe,
      title: 'Responsabilidad',
      description: 'Comprometidos con el turismo responsable que beneficia a las comunidades y protege la biodiversidad de Costa Rica.'
    }
  ]

  const commitments = [
    {
      icon: TreePine,
      title: 'Conservación',
      description: 'Un porcentaje de cada reserva se destina a proyectos de reforestación y conservación de áreas protegidas.'
    },
    {
      icon: Recycle,
      title: 'Cero Plástico',
      description: 'Nuestras experiencias son libres de plástico de un solo uso. Usamos recipientes reutilizables y productos biodegradables.'
    }
  ]

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/about-hero.jpg" 
            alt="Sobre nosotros" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            NUESTRA ESENCIA
          </p>
          <h1 className="headline-xl text-white mb-6">
            Acerca de Nosotros
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            Somos un equipo apasionado por Costa Rica, dedicado a crear 
            experiencias auténticas que conectan a las personas con la naturaleza.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="about-content">
              <div className="relative">
                <img 
                  src="/images/about-team.jpg" 
                  alt="Equipo Wild Path"
                  className="w-full aspect-[4/5] object-cover shadow-card"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-wp-yellow/10 -z-10" />
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-wp-green/10 -z-10" />
              </div>
            </div>

            {/* Content */}
            <div className="about-content">
              <h2 className="headline-lg text-wp-forest mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 body-text text-graytext">
                <p>
                  Wild Path nació de una profunda conexión con la naturaleza costarricense 
                  y el deseo de compartirla de manera auténtica y responsable.
                </p>
                <p>
                  Después de años trabajando en turismo masivo, nos dimos cuenta de que 
                  algo importante se había perdido: la conexión genuina entre el viajero 
                  y el destino. Los tours genéricos no permitían a las personas experimentar 
                  la verdadera esencia de Costa Rica.
                </p>
                <p>
                  Por eso creamos Wild Path: para diseñar experiencias 100% personalizadas 
                  donde cada detalle refleja los intereses, el ritmo y los sueños de cada viajero.
                </p>
                <p>
                  Hoy, cada itinerario que creamos es una colaboración íntima entre nuestro 
                  equipo y el viajero. No vendemos paquetes prefabricados. Diseñamos aventuras 
                  únicas que transforman la forma en que las personas ven y experimentan el mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
              LO QUE NOS DEFINE
            </p>
            <h2 className="headline-lg text-white mb-6">
              Nuestros Valores
            </h2>
            <p className="body-text text-white/70 max-w-2xl mx-auto">
              Principios que guían cada decisión y cada experiencia que creamos
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="value-card bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-colors"
              >
                <value.icon size={40} className="text-wp-yellow mb-6" />
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
                COMPROMISO AMBIENTAL
              </p>
              <h2 className="headline-lg text-wp-forest mb-6">
                Turismo Responsable
              </h2>
              <div className="space-y-4 body-text text-graytext mb-8">
                <p>
                  Creemos firmemente que el turismo puede ser una fuerza positiva 
                  para la conservación y el desarrollo comunitario. Por eso, cada 
                  experiencia Wild Path está diseñada con el medio ambiente en mente.
                </p>
                <p>
                  Trabajamos con guías locales certificados, apoyamos a familias 
                  anfitrionas y contribuimos activamente a proyectos de conservación 
                  en las áreas donde operamos.
                </p>
              </div>

              {/* Commitments */}
              <div className="space-y-6">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-wp-yellow/10 flex items-center justify-center flex-shrink-0">
                      <commitment.icon size={24} className="text-wp-yellow" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-wp-forest mb-1">
                        {commitment.title}
                      </h4>
                      <p className="text-sm text-graytext">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative">
                <img 
                  src="/images/about-sustainability.jpg" 
                  alt="Sostenibilidad"
                  className="w-full aspect-square object-cover shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-12">
            ¿Por qué elegir Wild Path?
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="font-display font-bold text-5xl text-wp-yellow mb-3">100%</p>
              <p className="text-white/70">Personalizado</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-5xl text-wp-yellow mb-3">Local</p>
              <p className="text-white/70">Guías expertos</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-5xl text-wp-yellow mb-3">Real</p>
              <p className="text-white/70">Experiencias auténticas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-wp-forest mb-6">
            Conoce al equipo detrás de tu aventura
          </h2>
          <p className="body-text text-graytext mb-10 max-w-2xl mx-auto">
            Estamos listos para escuchar tus sueños y convertirlos en una 
            experiencia inolvidable en Costa Rica.
          </p>
          <a 
            href="https://wa.me/50689857750"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#25D366] hover:bg-[#128C7E]"
          >
            HABLEMOS POR WHATSAPP
          </a>
        </div>
      </section>
    </div>
  )
}
