import { useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'
import { Star, Quote } from 'lucide-react'
import useSeo from '../hooks/useSeo'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const { t } = useTranslation()

  useSeo({
    title: t('pages.testimonials.hero.title'),
    description: t('pages.testimonials.hero.subtitle'),
    image: 'https://wildpath.lat/images/test-hero.jpg',
    canonicalPath: '/testimonios',
  })

  const stats = t('pages.testimonials.stats', { returnObjects: true }) as {
    number: string
    label: string
  }[]

  const testimonials = useMemo(
    () =>
      t('pages.testimonials.items', { returnObjects: true }) as {
        name: string
        location: string
        trip: string
        text: string
      }[],
    [t]
  )

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

  return (
    <div className="pt-24 lg:pt-32">
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/test-hero.jpg" 
            alt={t('pages.testimonials.hero.alt')} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('pages.testimonials.hero.badge')}
          </p>
          <h1 className="headline-xl text-white mb-6">
            {t('pages.testimonials.hero.title')}
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            {t('pages.testimonials.hero.subtitle')}
          </p>
        </div>
      </section>

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

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card bg-white p-8 shadow-card hover:shadow-hover transition-shadow"
              >
                <Quote size={32} className="text-wp-yellow/30 mb-6" />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-wp-yellow fill-wp-yellow" />
                  ))}
                </div>

                <p className="body-text text-wp-forest mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

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

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-6">
            {t('pages.testimonials.cta.title')}
          </h2>
          <p className="body-text text-white/70 mb-10 max-w-2xl mx-auto">
            {t('pages.testimonials.cta.subtitle')}
          </p>
          <a 
            href="https://wa.me/50689857750"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#25D366] hover:bg-[#128C7E]"
          >
            {t('pages.testimonials.cta.button')}
          </a>
        </div>
      </section>
    </div>
  )
}
