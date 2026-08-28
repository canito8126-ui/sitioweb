import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useSeo from '../hooks/useSeo'
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type ExpKey = 'nocturnal' | 'birds' | 'waterfalls' | 'forest' | 'naturalist' | 'cooking'

const EXP_META: { key: ExpKey; image: string; }[] = [
  { key: 'nocturnal', image: '/images/exp-nocturna.jpg' },
  { key: 'birds', image: '/images/exp-aves.jpg' },
  { key: 'waterfalls', image: '/images/exp-catarata.jpg' },
  { key: 'forest', image: '/images/exp-bosque.jpg' },
  { key: 'naturalist', image: '/images/exp-naturalista.jpg' },
  { key: 'cooking', image: '/images/exp-cocina.jpg' },
]

export default function Tour() {
  const { slug } = useParams<{ slug: string }>()
  const { t, i18n } = useTranslation()

  const exp = useMemo(() => {
    if (!slug) return null
    const found = EXP_META.find((e) => e.key === slug)
    if (!found) return null
    const data = t(`pages.experiences.items.${found.key}`, { returnObjects: true }) as any
    return { ...data, image: found.image, key: found.key }
  }, [slug, t])

  if (!exp) {
    return (
      <div className="pt-24 lg:pt-32 py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="headline-lg text-wp-forest mb-6">Experiencia no encontrada</h1>
          <p className="text-graytext mb-8">Lo sentimos, no encontramos la experiencia solicitada.</p>
          <Link to="/experiencias" className="btn-primary">Volver a experiencias</Link>
        </div>
      </div>
    )
  }

  const title = exp.seoTitle ?? exp.title
  const description = exp.seoDescription ?? exp.description
  const longDescription = exp.longDescription ?? exp.description
  const image = `https://wildpath.lat${exp.image}`
  const canonical = new URL(`/experiencias/${exp.key}`, window.location.origin).toString()

  // Build structured data array
  const sd: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonical
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: exp.title,
      description: exp.description,
      image,
      url: canonical,
      geo: {
        "@type": "GeoCoordinates",
        latitude: 10.233489254130383,
        longitude: -84.30337070608336
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: 'Inicio', item: 'https://wildpath.lat/' },
        { "@type": "ListItem", position: 2, name: 'Experiencias', item: 'https://wildpath.lat/experiencias' },
        { "@type": "ListItem", position: 3, name: exp.title, item: canonical }
      ]
    }
  ]

  // If FAQ items exist, add FAQPage schema
  if (exp.faqs && Array.isArray(exp.faqs)) {
    sd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: exp.faqs.map((f: any) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a
        }
      }))
    })
  }

  // SEO + JSON-LD
  useSeo({
    title: `${title} | Wild Path Costa Rica`,
    description,
    image,
    canonicalPath: `/experiencias/${exp.key}`,
    structuredData: sd
  })

  return (
    <div className="pt-24 lg:pt-32">
      <div className="relative h-[50vh] lg:h-[60vh]">
        <img src={exp.image} alt={`${title} en Bajos del Toro, Costa Rica`} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-wp-forest via-wp-forest/50 to-transparent" />
      </div>

      <article className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-3xl mx-auto">
          <h1 className="headline-lg text-wp-forest mb-6">{title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-graytext text-sm flex items-center gap-1">
              <Clock size={16} /> {exp.duration}
            </span>
            <span className="text-graytext text-sm flex items-center gap-1">
              <Users size={16} /> {exp.groupSize}
            </span>
            <span className="text-graytext text-sm flex items-center gap-1">
              <MapPin size={16} /> {exp.location}
            </span>
          </div>

          <div className="prose max-w-none prose-lg prose-headings:font-display prose-headings:text-wp-forest prose-p:text-graytext">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{longDescription}</ReactMarkdown>

            <h2>{i18n.language?.startsWith('es') ? '¿Qué aprenderás?' : "What you'll learn"}</h2>
            <p>
              {i18n.language?.startsWith('es')
                ? 'Esta experiencia está guiada por naturalistas locales y se centra en la observación atenta, la interpretación ecológica y la conexión con las prácticas de conservación locales.'
                : 'This experience is led by local naturalists and focuses on attentive observation, ecological interpretation, and connections to local conservation practices.'}
            </p>

            <h2>{i18n.language?.startsWith('es') ? 'Itinerario aproximado' : 'Approximate itinerary'}</h2>
            {exp.itinerary ? (
              <ol>
                {exp.itinerary.map((step: string, i: number) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            ) : (
              <p>{i18n.language?.startsWith('es') ? 'El itinerario se adapta según condiciones climáticas y el interés del grupo.' : 'The itinerary is adapted to weather and the group’s interests.'}</p>
            )}

            <h3>{i18n.language?.startsWith('es') ? 'Highlights' : 'Highlights'}</h3>
            <ul>
              {exp.highlights?.map((h: string, i: number) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <h2>{i18n.language?.startsWith('es') ? 'Incluye' : 'Includes'}</h2>
            {exp.included ? (
              <ul>
                {exp.included.map((inc: string, i: number) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
            ) : (
              <ul>
                <li>{i18n.language?.startsWith('es') ? 'Guía naturalista bilingüe' : 'Bilingual naturalist guide'}</li>
              </ul>
            )}

            {exp.notIncluded && (
              <>
                <h2>{i18n.language?.startsWith('es') ? 'No incluye' : 'Not included'}</h2>
                <ul>
                  {exp.notIncluded.map((ni: string, i: number) => (
                    <li key={i}>{ni}</li>
                  ))}
                </ul>
              </>
            )}

            <h2>{i18n.language?.startsWith('es') ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}</h2>
            {exp.faqs ? (
              <div>
                {exp.faqs.map((f: any, i: number) => (
                  <div key={i} className="mb-4">
                    <p className="font-semibold">{f.q}</p>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>{i18n.language?.startsWith('es') ? '¿Necesitas ayuda? Contáctanos para más detalles.' : 'Need help? Contact us for more details.'}</p>
            )}

            <div className="mt-8">
              <Link to="/contacto" className="btn-primary inline-flex items-center gap-2">
                {i18n.language?.startsWith('es') ? 'Planifica Tu Experiencia' : 'Plan Your Experience'}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
