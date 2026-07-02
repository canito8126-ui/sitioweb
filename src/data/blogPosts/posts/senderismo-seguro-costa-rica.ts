import type { BlogPostData } from '../types'

/** Position in the blog listing (lower = first) */
export const order = 6

export const es: BlogPostData = {
  title: 'Consejos para senderismo seguro en Costa Rica',
  excerpt:
    'Preparación, equipo esencial y precauciones para disfrutar de las caminatas en la selva de manera segura y responsable.',
  content: `
        <p>El senderismo es una de las mejores formas de experimentar la biodiversidad de Costa Rica. Sin embargo, la selva tropical presenta desafíos únicos que debes conocer.</p>
        
        <h2>Equipo esencial</h2>
        <ul>
          <li><strong>Calzado:</strong> Botas impermeables con buen agarre</li>
          <li><strong>Ropa:</strong> Capas ligeras, colores neutros</li>
          <li><strong>Protección:</strong> Repelente, protector solar, sombrero</li>
          <li><strong>Hidratación:</strong> Mínimo 2 litros de agua</li>
        </ul>
        
        <h2>Seguridad en la selva</h2>
        <p>Nunca camines solo. Contrata siempre un guía local que conozca el área. Lleva un silbato de emergencia y mantente en los senderos marcados.</p>
        
        <h2>Qué hacer si te pierdes</h2>
        <p>Quédate quieto, haz ruido con el silbato, y espera ayuda. Nunca sigas caminando sin saber dónde estás.</p>
      `,
  image: '/images/blog-senderismo.jpg',
  category: 'Aventura',
  author: 'Pedro Sánchez',
  date: '20 de enero, 2025',
  readTime: '5 min',
  tags: ['senderismo', 'seguridad', 'aventura', 'consejos'],
}

export const en: BlogPostData = {
  title: 'Safe hiking tips for Costa Rica',
  excerpt:
    'Preparation, essential gear, and precautions for hiking safely in the rainforest.',
  content: `
        <p>Hiking is one of the best ways to experience Costa Rica’s biodiversity—but tropical rainforest has unique challenges.</p>
        
        <h2>Essential gear</h2>
        <ul>
          <li><strong>Footwear:</strong> Waterproof boots with good grip</li>
          <li><strong>Clothing:</strong> Light layers, neutral colors</li>
          <li><strong>Protection:</strong> Repellent, sunscreen, hat</li>
          <li><strong>Hydration:</strong> At least 2 liters of water</li>
        </ul>
        
        <h2>Jungle safety</h2>
        <p>Don’t hike alone. Hire a local guide who knows the area. Carry an emergency whistle and stay on marked trails.</p>
        
        <h2>If you get lost</h2>
        <p>Stay put, use your whistle, and wait for help. Don’t wander without knowing where you are.</p>
      `,
  image: '/images/blog-senderismo.jpg',
  category: 'Adventure',
  author: 'Pedro Sánchez',
  date: 'January 20, 2025',
  readTime: '5 min',
  tags: ['hiking', 'safety', 'adventure', 'tips'],
}
