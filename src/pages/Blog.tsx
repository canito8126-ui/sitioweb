import { useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  User
} from 'lucide-react'
import { BLOG_SLUG_ORDER, getBlogPosts } from '../data/blogPosts'

gsap.registerPlugin(ScrollTrigger)

export default function Blog() {
  const { t, i18n } = useTranslation()

  const blogPosts = useMemo(() => {
    const posts = getBlogPosts(i18n.language)
    return BLOG_SLUG_ORDER.map((slug) => ({
      slug,
      ...posts[slug],
    }))
  }, [i18n.language])

  const categories = t('pages.blog.categories', { returnObjects: true }) as string[]
  const allLabel = categories[0] ?? 'All'

  const featuredPost = blogPosts[0]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.blog-card').forEach((card, i) => {
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

  return (
    <div className="pt-24 lg:pt-32">
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/blog-hero.jpg" 
            alt={t('pages.blog.hero.alt')} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('pages.blog.hero.badge')}
          </p>
          <h1 className="headline-xl text-white mb-6">
            {t('pages.blog.hero.title')}
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            {t('pages.blog.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-6xl mx-auto">
          <p className="micro-label text-wp-yellow mb-6 tracking-[0.15em]">
            {t('pages.blog.featured')}
          </p>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-wp-yellow text-white text-xs px-3 py-1">
                  {featuredPost.category}
                </span>
                <span className="text-graytext text-sm flex items-center gap-1">
                  <Calendar size={14} />
                  {featuredPost.date}
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-wp-forest mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-graytext mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-graytext flex items-center gap-1">
                  <User size={14} />
                  {featuredPost.author}
                </span>
                <span className="text-sm text-graytext flex items-center gap-1">
                  <Clock size={14} />
                  {`${featuredPost.readTime} ${t('pages.blog.readSuffix')}`}
                </span>
              </div>
              <Link 
                to={`/blog/${featuredPost.slug}`}
                className="btn-primary inline-flex items-center"
              >
                {t('pages.blog.readArticle')}
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 lg:px-12 bg-wp-cream border-y border-wp-forest/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  category === allLabel
                    ? 'bg-wp-forest text-white'
                    : 'bg-white text-wp-forest hover:bg-wp-forest hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.slug}
                className="blog-card bg-white shadow-card overflow-hidden hover:shadow-hover transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-wp-yellow text-white text-xs px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-graytext">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-wp-forest mb-3 line-clamp-2 group-hover:text-wp-yellow transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-graytext text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-graytext flex items-center gap-1">
                      <User size={12} />
                      {post.author}
                    </span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-wp-yellow text-sm font-medium flex items-center gap-1 hover:underline"
                    >
                      {t('pages.blog.readMore')}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-6">
            {t('pages.blog.newsletterTitle')}
          </h2>
          <p className="body-text text-white/70 mb-8">
            {t('pages.blog.newsletterSubtitle')}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('pages.blog.emailPlaceholder')}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-wp-yellow"
            />
            <button type="submit" className="btn-primary">
              {t('pages.blog.subscribe')}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
