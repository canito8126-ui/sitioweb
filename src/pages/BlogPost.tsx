import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useSeo from '../hooks/useSeo'
import { 
  Calendar, 
  Clock, 
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react'
import { getBlogPosts, BLOG_SLUG_ORDER } from '../data/blogPosts'
import type { BlogPostData } from '../data/blogPosts'

export default function BlogPost() {
  // Share handler
  const handleShare = (platform: string) => {
    if (!post) return;
    const url = window.location.href;
    const text = encodeURIComponent(post.title);
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        if (navigator.share) {
          navigator.share({ title: post.title, url });
          return;
        }
        shareUrl = url;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };
  const { slug } = useParams<{ slug: string }>()
  const { t, i18n } = useTranslation()

  const blogPosts: Record<string, BlogPostData> = getBlogPosts(i18n.language)
  const post = slug ? blogPosts[slug] : null

  if (!post) {
    return (
      <div className="pt-24 lg:pt-32 py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="headline-lg text-wp-forest mb-6">{t('pages.blogPost.notFoundTitle')}</h1>
          <p className="text-graytext mb-8">{t('pages.blogPost.notFoundBody')}</p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft size={18} className="inline mr-2" />
            {t('pages.blogPost.backToBlog')}
          </Link>
        </div>
      </div>
    )
  }

  useSeo({
    title: post.title,
    description: post.excerpt ?? post.title,
    image: post.image,
    canonicalPath: `/blog/${slug}`,
    keywords: post.tags?.join(', '),
  })

  const related = BLOG_SLUG_ORDER
    .filter((k: string) => k !== slug)
    .slice(0, 2)
    .map((key: string) => ({ key, ...blogPosts[key] }))

  return (
    <div className="pt-24 lg:pt-32">
      <div className="relative h-[50vh] lg:h-[60vh]">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wp-forest via-wp-forest/50 to-transparent" />
        
        <Link 
          to="/blog"
          className="absolute top-6 left-6 text-white flex items-center gap-2 hover:text-wp-yellow transition-colors"
        >
          <ArrowLeft size={20} />
          {t('pages.blogPost.backToBlog')}
        </Link>
      </div>

      <article className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-wp-yellow text-white text-sm px-4 py-1">
              {post.category}
            </span>
            <span className="text-graytext text-sm flex items-center gap-1">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="text-graytext text-sm flex items-center gap-1">
              <Clock size={16} />
              {post.readTime} {t('pages.blog.readSuffix')}
            </span>
          </div>

          <h1 className="headline-lg text-wp-forest mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 mb-10 pb-10 border-b border-wp-forest/10">
            <div className="w-12 h-12 bg-wp-green/20 rounded-full flex items-center justify-center">
              <span className="text-wp-forest font-bold">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium text-wp-forest">{post.author}</p>
              <p className="text-sm text-graytext">{t('pages.blogPost.authorLabel')}</p>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-wp-forest prose-p:text-graytext prose-li:text-graytext prose-strong:text-wp-forest prose-a:text-wp-yellow hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-wp-forest/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="bg-wp-cream text-wp-forest text-sm px-3 py-1 border border-wp-forest/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-graytext text-sm">{t('pages.blogPost.share')}</span>
            <div className="flex gap-2">
              <button type="button" onClick={() => handleShare('facebook')} className="w-10 h-10 bg-wp-forest text-white flex items-center justify-center hover:bg-wp-yellow transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </button>
              <button type="button" onClick={() => handleShare('twitter')} className="w-10 h-10 bg-wp-forest text-white flex items-center justify-center hover:bg-wp-yellow transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </button>
              <button type="button" onClick={() => handleShare('linkedin')} className="w-10 h-10 bg-wp-forest text-white flex items-center justify-center hover:bg-wp-yellow transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </button>
              <button type="button" onClick={() => handleShare('share')} className="w-10 h-10 bg-wp-forest text-white flex items-center justify-center hover:bg-wp-yellow transition-colors" aria-label="Share">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream border-t border-wp-forest/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-wp-forest mb-8">
            {t('pages.blogPost.related')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((relatedPost: { key: string } & BlogPostData) => (
              <Link 
                key={relatedPost.key}
                to={`/blog/${relatedPost.key}`}
                className="group flex gap-4 bg-white p-4 shadow-card hover:shadow-hover transition-shadow"
              >
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <span className="text-xs text-wp-yellow">{relatedPost.category}</span>
                  <h3 className="font-display font-semibold text-wp-forest group-hover:text-wp-yellow transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
