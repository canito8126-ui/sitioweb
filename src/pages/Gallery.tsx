import { useEffect, useMemo, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'
import useSeo from '../hooks/useSeo'
import { X, ZoomIn } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const GALLERY_SRC = [
  '/images/gal-perezoso.jpg',
  '/images/gal-quetzal.jpg',
  '/images/gal-catarata.jpg',
  '/images/gal-tucan.jpg',
  '/images/gal-bosque.jpg',
  '/images/gal-rana.jpg',
  '/images/gal-colibri.jpg',
  '/images/gal-sendero.jpg',
  '/images/gal-mono.jpg',
  '/images/gal-orquidea.jpg',
  '/images/gal-helechos.jpg',
  '/images/gal-amanecer.jpg',
]

export default function Gallery() {
  const { t } = useTranslation()

  useSeo({
    title: t('pages.gallery.hero.title'),
    description: t('pages.gallery.hero.subtitle'),
    image: 'https://wildpath.lat/images/gal-bosque.jpg',
    canonicalPath: '/galeria',
  })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = t('pages.gallery.categories', { returnObjects: true }) as string[]
  const imageAlts = t('pages.gallery.imageAlts', { returnObjects: true }) as string[]
  const imageCategories = t('pages.gallery.imageCategories', { returnObjects: true }) as string[]

  const galleryImages = useMemo(
    () =>
      GALLERY_SRC.map((src, index) => ({
        src,
        alt: imageAlts[index] ?? '',
        category: imageCategories[index] ?? '',
      })),
    [imageAlts, imageCategories]
  )

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gallery-item').forEach((item, i) => {
        gsap.fromTo(item, 
          { y: 30, opacity: 0 }, 
          { 
            y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            },
            delay: (i % 4) * 0.1
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
            src="/images/gal-bosque.jpg" 
            alt={t('pages.gallery.hero.alt')} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('pages.gallery.hero.badge')}
          </p>
          <h1 className="headline-xl text-white mb-6">
            {t('pages.gallery.hero.title')}
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            {t('pages.gallery.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="px-4 py-2 text-sm font-medium text-wp-forest/70 hover:text-wp-yellow hover:bg-wp-yellow/10 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={image.src}
                className={`gallery-item relative overflow-hidden cursor-pointer group ${
                  index === 0 || index === 5 || index === 10 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className={`${
                  index === 0 || index === 5 || index === 10 ? 'aspect-square' : 'aspect-[4/5]'
                }`}>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-wp-forest/0 group-hover:bg-wp-forest/40 transition-colors flex items-center justify-center">
                  <ZoomIn 
                    size={32} 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-wp-forest/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                  <p className="text-white/60 text-xs">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-wp-forest/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            type="button"
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt={t('pages.gallery.lightboxAlt')}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-6">
            {t('pages.gallery.cta.title')}
          </h2>
          <p className="body-text text-white/70 mb-10">
            {t('pages.gallery.cta.subtitle')}
          </p>
          <a 
            href="https://wa.me/50689857750"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#25D366] hover:bg-[#128C7E]"
          >
            {t('pages.gallery.cta.button')}
          </a>
        </div>
      </section>
    </div>
  )
}
