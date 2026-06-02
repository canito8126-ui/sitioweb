import { useEffect } from 'react'

type SeoParams = {
  title: string
  description: string
  url?: string
  image?: string
  canonicalPath?: string
  keywords?: string
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

export default function useSeo({
  title,
  description,
  url,
  image,
  canonicalPath,
  keywords,
}: SeoParams) {
  useEffect(() => {
    const prevTitle = document.title
    const finalUrl = url ?? (canonicalPath ? new URL(canonicalPath, window.location.origin).toString() : window.location.href)

    document.title = title

    // Standard description
    upsertMetaTag('name', 'description', description)

    // Keywords (optional, but cheap)
    if (keywords && keywords.trim().length > 0) {
      upsertMetaTag('name', 'keywords', keywords)
    }

    // Canonical
    if (finalUrl) {
      upsertLinkTag('canonical', finalUrl)
    }

    // Open Graph
    if (title) upsertMetaTag('property', 'og:title', title)
    if (description) upsertMetaTag('property', 'og:description', description)
    if (image) upsertMetaTag('property', 'og:image', image)
    if (finalUrl) upsertMetaTag('property', 'og:url', finalUrl)
    upsertMetaTag('property', 'og:type', 'website')

    // Twitter
    if (title) upsertMetaTag('name', 'twitter:title', title)
    if (description) upsertMetaTag('name', 'twitter:description', description)
    if (image) upsertMetaTag('name', 'twitter:image', image)
    upsertMetaTag('name', 'twitter:card', 'summary_large_image')

    return () => {
      document.title = prevTitle
    }
  }, [title, description, url, image, canonicalPath, keywords])
}
