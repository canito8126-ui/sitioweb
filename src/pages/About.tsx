import { useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'
import { 
  Leaf, 
  Heart, 
  Users, 
  Globe,
  TreePine,
  Recycle
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const VALUE_ICONS = [Leaf, Heart, Users, Globe] as const
const VALUE_KEYS = ['sustainability', 'authenticity', 'local', 'responsibility'] as const
const COMMIT_ICONS = [TreePine, Recycle] as const
const COMMIT_KEYS = ['conservation', 'plastic'] as const

export default function About() {
  const { t } = useTranslation()

  const values = useMemo(
    () =>
      VALUE_KEYS.map((key, index) => ({
        icon: VALUE_ICONS[index],
        title: t(`pages.about.values.${key}.title`),
        description: t(`pages.about.values.${key}.description`),
      })),
    [t]
  )

  const commitments = useMemo(
    () =>
      COMMIT_KEYS.map((key, index) => ({
        icon: COMMIT_ICONS[index],
        title: t(`pages.about.commitments.${key}.title`),
        description: t(`pages.about.commitments.${key}.description`),
      })),
    [t]
  )

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

  return (
    <div className="pt-24 lg:pt-32">
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/about-hero.jpg" 
            alt={t('pages.about.hero.alt')} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('pages.about.hero.badge')}
          </p>
          <h1 className="headline-xl text-white mb-6">
            {t('pages.about.hero.title')}
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            {t('pages.about.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="about-content">
              <div className="relative">
                <img 
                  src="/images/about-team.jpg" 
                  alt={t('pages.about.teamAlt')}
                  className="w-full aspect-[4/5] object-cover shadow-card"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-wp-yellow/10 -z-10" />
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-wp-green/10 -z-10" />
              </div>
            </div>

            <div className="about-content">
              <h2 className="headline-lg text-wp-forest mb-6">
                {t('pages.about.storyTitle')}
              </h2>
              <div className="space-y-4 body-text text-graytext">
                <p>{t('pages.about.storyP1')}</p>
                <p>{t('pages.about.storyP2')}</p>
                <p>{t('pages.about.storyP3')}</p>
                <p>{t('pages.about.storyP4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
              {t('pages.about.valuesBadge')}
            </p>
            <h2 className="headline-lg text-white mb-6">
              {t('pages.about.valuesTitle')}
            </h2>
            <p className="body-text text-white/70 max-w-2xl mx-auto">
              {t('pages.about.valuesSubtitle')}
            </p>
          </div>

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

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
                {t('pages.about.sustainabilityBadge')}
              </p>
              <h2 className="headline-lg text-wp-forest mb-6">
                {t('pages.about.sustainabilityTitle')}
              </h2>
              <div className="space-y-4 body-text text-graytext mb-8">
                <p>{t('pages.about.sustainabilityP1')}</p>
                <p>{t('pages.about.sustainabilityP2')}</p>
              </div>

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

            <div>
              <div className="relative">
                <img 
                  src="/images/about-sustainability.jpg" 
                  alt={t('pages.about.sustainabilityAlt')}
                  className="w-full aspect-square object-cover shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-12">
            {t('pages.about.whyTitle')}
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="font-display font-bold text-5xl text-wp-yellow mb-3">{t('pages.about.stat1')}</p>
              <p className="text-white/70">{t('pages.about.stat1Label')}</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-5xl text-wp-yellow mb-3">{t('pages.about.stat2')}</p>
              <p className="text-white/70">{t('pages.about.stat2Label')}</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-5xl text-wp-yellow mb-3">{t('pages.about.stat3')}</p>
              <p className="text-white/70">{t('pages.about.stat3Label')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-wp-forest mb-6">
            {t('pages.about.ctaTitle')}
          </h2>
          <p className="body-text text-graytext mb-10 max-w-2xl mx-auto">
            {t('pages.about.ctaSubtitle')}
          </p>
          <a 
            href="https://wa.me/50689857750"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#25D366] hover:bg-[#128C7E]"
          >
            {t('pages.about.ctaButton')}
          </a>
        </div>
      </section>
    </div>
  )
}
