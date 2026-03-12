import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  Phone, 
  Map, 
  Compass, 
  ArrowRight,
  Calendar,
  CheckCircle2
} from 'lucide-react'
import ReviewWidgets from '../components/ReviewWidgets'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const { t } = useTranslation()
  const heroRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-content', 
        { y: 60, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
      )

      // Process section
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, i) => {
        gsap.fromTo(step, 
          { y: 50, opacity: 0 }, 
          { 
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.15
          }
        )
      })

      // Experience cards
      gsap.utils.toArray<HTMLElement>('.exp-card').forEach((card, i) => {
        gsap.fromTo(card, 
          { y: 40, opacity: 0 }, 
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

  const processSteps = [
    {
      number: '01',
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      icon: Phone,
      details: t('process.step1.details', { returnObjects: true }) as string[]
    },
    {
      number: '02',
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      icon: Map,
      details: t('process.step2.details', { returnObjects: true }) as string[]
    },
    {
      number: '03',
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      icon: Compass,
      details: t('process.step3.details', { returnObjects: true }) as string[]
    }
  ]

  const dayExperiences = [
    {
      title: t('dayExperiences.experiences.nocturnal.title'),
      description: t('dayExperiences.experiences.nocturnal.description'),
      image: '/images/exp-nocturna.jpg'
    },
    {
      title: t('dayExperiences.experiences.birds.title'),
      description: t('dayExperiences.experiences.birds.description'),
      image: '/images/exp-aves.jpg'
    },
    {
      title: t('dayExperiences.experiences.waterfalls.title'),
      description: t('dayExperiences.experiences.waterfalls.description'),
      image: '/images/exp-catarata.jpg'
    },
    {
      title: t('dayExperiences.experiences.forest.title'),
      description: t('dayExperiences.experiences.forest.description'),
      image: '/images/exp-bosque.jpg'
    }
  ]


  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-montana-playa.jpg" 
            alt="Montaña y playa Costa Rica" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wp-forest/60 via-wp-forest/30 to-wp-forest/70" />
        </div>

        {/* Hero Content */}
        <div className="hero-content relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="micro-label text-wp-yellow mb-6 tracking-[0.2em]">
            {t('hero.badge')}
          </p>
          <h1 className="headline-xl text-white mb-6">
            {t('hero.title1')}
            <br />
            <span className="text-wp-yellow">{t('hero.title2')}</span>
          </h1>
          <p className="body-text text-white/80 mb-10 max-w-xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="btn-primary">
              {t('hero.ctaPrimary')}
              <ArrowRight size={18} className="inline ml-2" />
            </Link>
            <Link 
              to="/experiencias" 
              className="px-8 py-4 border border-white/30 text-white font-display font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
              {t('process.badge')}
            </p>
            <h2 className="headline-lg text-wp-forest mb-6">
              {t('process.title')}
            </h2>
            <p className="body-text text-graytext max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className="process-step relative bg-white p-8 lg:p-10 shadow-card hover:shadow-hover transition-shadow"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-2 w-16 h-16 bg-wp-yellow flex items-center justify-center">
                  <span className="font-display font-bold text-2xl text-white">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <step.icon size={32} className="text-wp-forest" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-wp-forest mb-4">
                  {step.title}
                </h3>
                <p className="body-text text-graytext mb-6">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-wp-forest/70">
                      <CheckCircle2 size={14} className="text-wp-yellow flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Connector Line (Desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-wp-yellow/30" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link to="/contacto" className="btn-primary inline-flex items-center">
              <Calendar size={18} className="mr-2" />
              {t('process.cta')}
            </Link>
          </div>
        </div>
      </section>


      {/* Day Experiences Preview */}
      <section ref={experiencesRef} className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
                {t('dayExperiences.badge')}
              </p>
              <h2 className="headline-lg text-white">
                {t('dayExperiences.title')}
              </h2>
            </div>
            <Link 
              to="/experiencias"
              className="text-white/70 hover:text-wp-yellow transition-colors mt-4 lg:mt-0 flex items-center gap-2"
            >
              {t('dayExperiences.viewAll')}
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Experience Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dayExperiences.map((exp, index) => (
              <div 
                key={index}
                className="exp-card group relative overflow-hidden cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-wp-forest via-wp-forest/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Widgets Section */}
      <ReviewWidgets />

      {/* Testimonials Preview */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('testimonials.badge')}
          </p>
          <h2 className="headline-lg text-wp-forest mb-12">
            {t('testimonials.title')}
          </h2>

          <div className="bg-white p-8 lg:p-12 shadow-card">
            <p className="text-xl lg:text-2xl text-wp-forest italic mb-8 leading-relaxed">
              "Wild Path diseñó exactamente el viaje que soñaba. Cada detalle estuvo pensado para nosotros. 
              No fue un tour genérico, fue NUESTRA aventura."
            </p>
            <div>
              <p className="font-display font-semibold text-wp-forest">María y Carlos</p>
              <p className="text-graytext text-sm">España · Viaje de 10 días</p>
            </div>
          </div>

          <Link 
            to="/testimonios"
            className="inline-flex items-center gap-2 text-wp-yellow font-medium mt-8 hover:underline"
          >
            {t('testimonials.cta')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/cta-naturaleza.jpg" 
            alt="Naturaleza Costa Rica" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wp-forest/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-6">
            ¿Listo para tu aventura?
          </h2>
          <p className="body-text text-white/70 mb-10 max-w-xl mx-auto">
            Agenda una llamada gratuita y descubre cómo podemos diseñar 
            tu experiencia perfecta en Costa Rica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/50689857750"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#25D366] hover:bg-[#128C7E]"
            >
              ESCRÍBENOS POR WHATSAPP
            </a>
            <Link to="/contacto" className="btn-primary">
              LLENAR FORMULARIO
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
