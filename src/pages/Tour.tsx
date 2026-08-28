import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useSeo from '../hooks/useSeo'
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react'

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

  const title = exp.title
  const description = exp.description
  const image = `https://wildpath.lat${exp.image}`
  const canonical = new URL(`/experiencias/${exp.key}`, window.location.origin).toString()

  // SEO + JSON-LD
  useSeo({
    title: `${title} | Wild Path Costa Rica`,
    description,
    image,
    canonicalPath: `/experiencias/${exp.key}`,
    structuredData: [
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
        name: title,
        description,
        image,
        url: canonical,
        geo: {
          "@type": "GeoCoordinates",
          latitude: 10.233489254130383,
          longitude: -84.30337070608336
        },
        // breadcrumb will be provided site-wide via WebPage + breadcrumb on listing pages
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: 'Inicio', item: 'https://wildpath.lat/' },
          { "@type": "ListItem", position: 2, name: 'Experiencias', item: 'https://wildpath.lat/experiencias' },
          { "@type": "ListItem", position: 3, name: title, item: canonical }
        ]
      }
    ]
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
            <p>{description}</p>

            <h2>¿Qué aprenderás?</h2>
            <p>
              Disfruta de una experiencia guiada por naturalistas locales enfocada en la observación de la naturaleza,
              aprendizaje sobre ecosistemas y prácticas regenerativas. Nuestro enfoque combina interpretación naturalista con
              esfuerzos de conservación y apoyo a la comunidad local.
            </p>

            <h2>Itinerario aproximado</h2>
            <p>
              El itinerario se adapta según condiciones climáticas y el interés del grupo. Por lo general incluye transporte local,
              caminatas guiadas, paradas para observación y una conclusión con materiales interpretativos.
            </p>

            <h3>Highlights</h3>
            <ul>
              {exp.highlights?.map((h: string, i: number) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <h2>Incluye</h2>
            <ul>
              <li>Guía naturalista bilingüe</li>
              <li>Transporte local (según tour)</li>
              <li>Equipo básico para observación</li>
              <li>Apoyo a iniciativas locales</li>
            </ul>

            <h2>Preguntas frecuentes</h2>
            <p>¿Necesito experiencia previa? No. Nuestros tours están diseñados para todos los niveles.</p>

            <div className="mt-8">
              <Link to="/contacto" className="btn-primary inline-flex items-center gap-2">
                Planifica Tu Experiencia
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
