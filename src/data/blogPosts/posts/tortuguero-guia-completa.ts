import type { BlogPostData } from '../types'

/** Position in the blog listing (lower = first) */
export const order = 5

export const es: BlogPostData = {
  title: 'Tortuguero: La guía completa para ver tortugas',
  excerpt:
    'Todo sobre el desove de tortugas en Costa Rica: cuándo ir, qué especies ver, qué esperar y cómo hacerlo de manera responsable.',
  content: `
        <p>Tortuguero es uno de los destinos más especiales de Costa Rica. Este parque nacional es el lugar de anidación más importante del Caribe para las tortugas verdes.</p>
        
        <h2>¿Cuándo ir?</h2>
        <p>La temporada de desove varía según la especie:</p>
        <ul>
          <li><strong>Tortugas verdes:</strong> Julio a octubre (pico en agosto)</li>
          <li><strong>Tortugas baulas:</strong> Febrero a julio</li>
          <li><strong>Tortugas carey:</strong> Julio a octubre</li>
        </ul>
        
        <h2>Cómo llegar</h2>
        <p>Tortuguero solo es accesible por bote o avioneta. La mayoría de los visitantes llegan en bote desde Caño Blanco o La Pavona.</p>
        
        <h2>Reglas importantes</h2>
        <ul>
          <li>No uses flash en la cámara</li>
          <li>Mantén la voz baja</li>
          <li>Sigue las instrucciones del guía</li>
          <li>No toques las tortugas</li>
        </ul>
      `,
  image: '/images/blog-tortuguero.jpg',
  category: 'Fauna',
  author: 'Equipo Wild Path',
  date: '28 de enero, 2025',
  readTime: '7 min',
  tags: ['tortugas', 'tortuguero', 'fauna', 'conservación'],
}

export const en: BlogPostData = {
  title: 'Tortuguero: complete guide to seeing sea turtles',
  excerpt:
    'When to go, which species to see, what to expect, and how to visit responsibly.',
  content: `
        <p>Tortuguero is one of Costa Rica’s most special destinations. This national park is the Caribbean’s most important nesting site for green turtles.</p>
        
        <h2>When to go</h2>
        <p>Nesting seasons vary by species:</p>
        <ul>
          <li><strong>Green turtles:</strong> July–October (peak in August)</li>
          <li><strong>Leatherbacks:</strong> February–July</li>
          <li><strong>Hawksbills:</strong> July–October</li>
        </ul>
        
        <h2>How to get there</h2>
        <p>Tortuguero is only reachable by boat or small plane. Most visitors arrive by boat from Caño Blanco or La Pavona.</p>
        
        <h2>Important rules</h2>
        <ul>
          <li>No camera flash</li>
          <li>Keep your voice low</li>
          <li>Follow your guide’s instructions</li>
          <li>Never touch the turtles</li>
        </ul>
      `,
  image: '/images/blog-tortuguero.jpg',
  category: 'Wildlife',
  author: 'Wild Path Team',
  date: 'January 28, 2025',
  readTime: '7 min',
  tags: ['turtles', 'tortuguero', 'wildlife', 'conservation'],
}
