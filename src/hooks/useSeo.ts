import { useLayoutEffect } from 'react'

type SeoParams = {
  title: string
  description: string
  url?: string
  image?: string
  canonicalPath?: string
  keywords?: string
  noindex?: boolean
  // Optional title-building pieces per site SEO formula
  targetKeyword?: string
  benefit?: string
}

function upsertMetaTag(attrName: string, attrValue: string, content: string) {
  const el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null
  if (el) {
    el.content = content
    return
  }

  const meta = document.createElement('meta')
  meta.setAttribute(attrName, attrValue)
  meta.setAttribute('content', content)
  document.head.appendChild(meta)
}

function upsertLinkTag(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function normalizeNonEmpty(value: string, fallback: string) {
  const trimmed = value?.trim()
  return trimmed && trimmed.length > 0 ? trimmed : fallback
}

export default function useSeo({
  title,
  description,
  url,
  image,
  canonicalPath,
  keywords,
  noindex = false,
  targetKeyword,
  benefit,
}: SeoParams) {
  useLayoutEffect(() => {
    // Prefer a build-time configured canonical host when available (Vite env):
    // set VITE_SITE_URL=https://wildpath.lat in production build env
    const siteBase = (import.meta.env && (import.meta.env.VITE_SITE_URL as string)) || window.location.origin
    const finalUrl = url ?? (canonicalPath ? new URL(canonicalPath, siteBase).toString() : window.location.href)

    // Brand name preference (Vite env or fallback)
    const siteName = (import.meta.env && (import.meta.env.VITE_SITE_NAME as string)) || 'Wild Path'

    // Build title according to formula: Target keyword — Clear benefit | Brand name
    // Prefer explicit pieces if provided; otherwise fall back to title/description.
    const keywordPart = normalizeNonEmpty((targetKeyword as string) || title, '')
    const benefitRaw = normalizeNonEmpty((benefit as string) || description || '', '')

    // Shorten benefit to a single concise phrase (max 80 chars) to keep titles readable
    const benefitPart = benefitRaw.length > 80 ? benefitRaw.slice(0, 77).trim() + '…' : benefitRaw

    const composedTitle = [
      keywordPart,
      benefitPart,
    ]
      .filter(Boolean)
      .join(' — ')

    const safeTitle = normalizeNonEmpty(composedTitle ? `${composedTitle} | ${siteName}` : title, `${siteName} | Tailor-Made Travel Experiences in Costa Rica`)

    const safeDescription = normalizeNonEmpty(
      description,
      'Wild Path offers tailor-made travel in Costa Rica — private wildlife, waterfall & cloud forest tours in Bajos del Toro.'
    )

    document.title = safeTitle

    // Standard description
    upsertMetaTag('name', 'description', safeDescription)

    // Keywords (optional, but cheap)
    if (keywords && keywords.trim().length > 0) {
      upsertMetaTag('name', 'keywords', keywords)
    }

    // Robots directive (index/noindex)
    upsertMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')

    // Canonical
    if (finalUrl) {
      upsertLinkTag('canonical', finalUrl)
    }

    // Open Graph
    upsertMetaTag('property', 'og:title', safeTitle)
    upsertMetaTag('property', 'og:description', safeDescription)
    if (image) upsertMetaTag('property', 'og:image', image)
    if (finalUrl) upsertMetaTag('property', 'og:url', finalUrl)
    upsertMetaTag('property', 'og:type', 'website')

    // Twitter
    upsertMetaTag('name', 'twitter:title', safeTitle)
    upsertMetaTag('name', 'twitter:description', safeDescription)
    if (image) upsertMetaTag('name', 'twitter:image', image)
    upsertMetaTag('name', 'twitter:card', 'summary_large_image')
  }, [title, description, url, image, canonicalPath, keywords, noindex, targetKeyword, benefit])
}
