import useSeo from '../hooks/useSeo'
import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const { t } = useTranslation()

  useSeo({
    title: t('pages.testimonials.title') || 'Testimonials',
    description: t('pages.testimonials.subtitle') || 'Real stories from our guests',
    canonicalPath: '/testimonios',
  })

  const items = (t('testimonials.items', { returnObjects: true }) as Array<any>) || []

  return (
    <div className="pt-24 lg:pt-32 py-24 px-6 lg:px-12 bg-wp-cream">
      <div className="max-w-4xl mx-auto">
        <h1 className="headline-lg text-wp-forest mb-6">{t('testimonials.title')}</h1>
        <p className="text-graytext mb-8">{t('testimonials.cta')}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it: any, i: number) => (
            <div key={i} className="bg-white p-6 shadow-card">
              <p className="body-text text-wp-forest mb-4">“{it.text}”</p>
              <p className="font-medium text-wp-forest">{it.name}</p>
              <p className="text-sm text-graytext">{it.location} · {it.trip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
