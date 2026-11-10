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

export const fr: BlogPostData = {
  title: 'Conseils pour randonner en toute sécurité au Costa Rica',
  excerpt:
    'Préparation, équipement essentiel et précautions pour profiter des randonnées en forêt tropicale en toute sécurité et de manière responsable.',
  content: `
        <p>La randonnée est l’un des meilleurs moyens de découvrir la biodiversité du Costa Rica. Cependant, la forêt tropicale présente des défis particuliers qu’il faut connaître.</p>
        
        <h2>Équipement essentiel</h2>
        <ul>
          <li><strong>Chaussures :</strong> bottes imperméables avec une bonne adhérence</li>
          <li><strong>Vêtements :</strong> couches légères, couleurs neutres</li>
          <li><strong>Protection :</strong> répulsif, crème solaire, chapeau</li>
          <li><strong>Hydratation :</strong> au moins 2 litres d’eau</li>
        </ul>
        
        <h2>Sécurité en forêt tropicale</h2>
        <p>Ne partez jamais seul. Faites toujours appel à un guide local qui connaît la région. Emportez un sifflet de détresse et restez sur les sentiers balisés.</p>
        
        <h2>Que faire si vous vous perdez</h2>
        <p>Restez sur place, utilisez votre sifflet et attendez les secours. Ne continuez jamais à marcher sans savoir où vous vous trouvez.</p>
      `,
  image: '/images/blog-senderismo.jpg',
  category: 'Aventure',
  author: 'Pedro Sánchez',
  date: '20 janvier 2025',
  readTime: '5 min',
  tags: ['randonnée', 'sécurité', 'aventure', 'conseils'],
}

export const de: BlogPostData = {
  title: 'Tipps für sicheres Wandern in Costa Rica',
  excerpt:
    'Vorbereitung, wichtige Ausrüstung und Vorsichtsmaßnahmen für sichere und verantwortungsvolle Wanderungen im Regenwald.',
  content: `
        <p>Wandern ist eine der besten Möglichkeiten, die Artenvielfalt Costa Ricas zu erleben. Der tropische Regenwald bringt jedoch besondere Herausforderungen mit sich, die Sie kennen sollten.</p>
        
        <h2>Wichtige Ausrüstung</h2>
        <ul>
          <li><strong>Schuhe:</strong> wasserdichte Stiefel mit gutem Profil</li>
          <li><strong>Kleidung:</strong> leichte Schichten, neutrale Farben</li>
          <li><strong>Schutz:</strong> Insektenschutzmittel, Sonnencreme, Hut</li>
          <li><strong>Flüssigkeit:</strong> mindestens 2 Liter Wasser</li>
        </ul>
        
        <h2>Sicherheit im Regenwald</h2>
        <p>Wandern Sie niemals allein. Engagieren Sie immer einen ortskundigen lokalen Guide. Nehmen Sie eine Signalpfeife mit und bleiben Sie auf markierten Wegen.</p>
        
        <h2>Was tun, wenn Sie sich verirren?</h2>
        <p>Bleiben Sie stehen, benutzen Sie Ihre Pfeife und warten Sie auf Hilfe. Gehen Sie nicht weiter, ohne zu wissen, wo Sie sind.</p>
      `,
  image: '/images/blog-senderismo.jpg',
  category: 'Abenteuer',
  author: 'Pedro Sánchez',
  date: '20. Januar 2025',
  readTime: '5 min',
  tags: ['Wandern', 'Sicherheit', 'Abenteuer', 'Tipps'],
}
