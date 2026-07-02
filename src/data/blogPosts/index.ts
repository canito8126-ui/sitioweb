/**
 * Auto-discovering blog registry (Vite).
 *
 * To add a new post: drop a file in ./posts/ named <slug>.ts that exports
 *   - order: number            (position in the listing, lower = first)
 *   - es?: BlogPostData        (Spanish version, optional)
 *   - en?: BlogPostData        (English version, optional)
 * Nothing else to update — it's picked up automatically at build time.
 *
 * NOTE: import.meta.glob is Vite-only. If you're on webpack/Next.js,
 * see index.webpack.ts.txt / README.md for the equivalent.
 */
import type { BlogPostData } from './types'
export type { BlogPostData } from './types'

type PostModule = {
  order: number
  es?: BlogPostData
  en?: BlogPostData
}

const modules = import.meta.glob<PostModule>('./posts/*.ts', { eager: true })

const entries = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.replace(/^\.\/posts\//, '').replace(/\.ts$/, ''),
    mod,
  }))
  .sort((a, b) => a.mod.order - b.mod.order)

export const BLOG_SLUG_ORDER = entries.map((e) => e.slug)

const es: Record<string, BlogPostData> = {}
const en: Record<string, BlogPostData> = {}
for (const { slug, mod } of entries) {
  if (mod.es) es[slug] = mod.es
  if (mod.en) en[slug] = mod.en
}

export function getBlogPosts(locale: string): Record<string, BlogPostData> {
  return locale.startsWith('en') ? en : es
}
