# SEO + Readability (AI-browser friendly) TODO

## Planned changes
- [ ] Verify H1 / heading hierarchy on all pages
  - [x] Home, About, Contact, Experiences, Inspiration, Gallery, Blog, BlogPost, Testimonials, Terms, Cancellation checked
- [x] Add page-level SEO meta updates (title/description + OG/Twitter + canonical) via a new `src/hooks/useSeo.ts` (no new dependencies)
- [x] Wire `useSeo()` into each route page so each page sets its own metadata
- [x] Fix favicon path in `index.html` (use `/images/favicon.ico` instead of `/public/images/favicon.ico`)
- [ ] Final checks
  - [ ] `npm run build`
  - [ ] `npm run lint`
  - [ ] Spot-check page source for updated meta + exactly one `h1` per page
