import type { BlogPostData } from '../types'

/** Position in the blog listing (lower = first) */
export const order = 2

export const en: BlogPostData = {
  title: 'What is the best time of year to visit Costa Rica?',
  excerpt:
    'Learn the pros of dry vs. green season and pick the best timing for your adventure—from sunny beaches to lush rainforest.',
  content: `
        <p>Costa Rica is a year-round destination, but each season has its own advantages. This article helps you choose the best timing for your adventure.</p>
        
        <h2>Dry season (December – April)</h2>
        <p>Locals call it “summer”—the most popular time to visit. Days are sunny with little rain—ideal for:</p>
        <ul>
          <li>Beach time without weather worries</li>
          <li>Hiking with clearer views</li>
          <li>Wildlife viewing on more accessible trails</li>
        </ul>
        
        <h2>Green season (May – November)</h2>
        <p>The rainy, or “winter,” season has its own charm: lusher vegetation, fuller rivers, and fewer crowds. Great for:</p>
        <ul>
          <li>Nature photography with richer colors</li>
          <li>Lower lodging rates</li>
          <li>Quieter, more authentic experiences</li>
        </ul>
        
        <h2>Natural events through the year</h2>
        <p>Some wildlife highlights happen on a schedule:</p>
        <ul>
          <li><strong>Sea turtles:</strong> Green turtle nesting peaks July–October</li>
          <li><strong>Whales:</strong> Humpbacks July–November</li>
          <li><strong>Birds:</strong> Northern migrants September–November</li>
        </ul>
        
        <h2>Our take</h2>
        <p>At Wild Path we don’t believe in one “best” season—only the best fit for you. Get in touch and we’ll help you plan around your interests.</p>
      `,
  image: '/images/blog-epoca.jpg',
  category: 'Travel Tips',
  author: 'Wild Path Team',
  date: 'February 15, 2025',
  readTime: '5 min',
  tags: ['weather', 'season', 'planning', 'tips'],
}
