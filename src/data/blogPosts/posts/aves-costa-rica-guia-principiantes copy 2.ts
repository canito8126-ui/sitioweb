import type { BlogPostData } from '../types'

/** Position in the blog listing (lower = first) */
export const order = 3

export const en: BlogPostData = {
  title: 'Birdwatching in Costa Rica: a beginner’s guide',
  excerpt:
    'Everything you need to start watching 900+ bird species in Costa Rica—gear, top spots, and practical tips.',
  content: `
        <p>Costa Rica is a birding paradise with 900+ recorded species. If you’re new to birdwatching, this guide will get you started.</p>
        
        <h2>Basic gear</h2>
        <p>You don’t need expensive equipment to begin:</p>
        <ul>
          <li><strong>Binoculars:</strong> 8x42 is a great starter pair</li>
          <li><strong>Field guide:</strong> Richard Garrigues’ guide is the most popular</li>
          <li><strong>Clothing:</strong> Neutral colors that don’t startle wildlife</li>
          <li><strong>Insect repellent:</strong> Essential in the rainforest</li>
        </ul>
        
        <h2>Beginner-friendly spots</h2>
        <ul>
          <li><strong>Monteverde:</strong> Easy access and many species</li>
          <li><strong>La Selva:</strong> Well-maintained trails</li>
          <li><strong>Curi-Cancha:</strong> Quieter—great for practice</li>
        </ul>
        
        <h2>Practical tips</h2>
        <p>Patience matters most. Birds don’t appear on cue. Listen, watch movement in the canopy, and enjoy learning.</p>
      `,
  image: '/images/blog-aves.jpg',
  category: 'Nature',
  author: 'María González',
  date: 'February 10, 2025',
  readTime: '8 min',
  tags: ['birds', 'birdwatching', 'nature', 'guide'],
}
