import type { BlogPostData } from '../types'

/** Position in the blog listing (lower = first) */
export const order = 7

export const es: BlogPostData = {
  title: 'Todo sobre los perezosos de Costa Rica',
  excerpt:
    'Conoce a estos adorables habitantes de la selva: dónde verlos, cómo se comportan y por qué son tan especiales para el ecosistema.',
  content: `
      <p>Los perezosos son sin duda una de las especies más queridas de Costa Rica. Estos adorables mamíferos han capturado los corazones de visitantes de todo el mundo.</p>
      
      <h2>Especies en Costa Rica</h2>
      <p>Hay dos especies de perezosos en Costa Rica:</p>
      <ul>
        <li><strong>Perezoso de tres dedos:</strong> Más común, dieta de hojas</li>
        <li><strong>Perezoso de dos dedos:</strong> Nocturno, dieta más variada</li>
      </ul>
      
      <h2>Dónde verlos</h2>
      <p>Los perezosos habitan en bosques húmedos de todo el país. Algunos de los mejores lugares son:</p>
      <ul>
        <li>Manuel Antonio</li>
        <li>Tortuguero</li>
        <li>La Fortuna</li>
        <li>Monteverde</li>
      </ul>
      
      <h2>Datos curiosos</h2>
      <ul>
        <li>Pasan hasta 20 horas al día durmiendo</li>
        <li>Bajan del árbol solo una vez por semana</li>
        <li>Nadan mejor de lo que caminan</li>
        <li>Tienen algas en su pelaje que les sirve de camuflaje</li>
      </ul>
    `,
  image: '/images/blog-perezosos.jpg',
  category: 'Fauna',
  author: 'Ana Patricia',
  date: '15 de enero, 2025',
  readTime: '6 min',
  tags: ['perezosos', 'fauna', 'mamíferos', 'curiosidades'],
}

export const en: BlogPostData = {
  title: 'All about sloths in Costa Rica',
  excerpt:
    'Where to see them, how they behave, and why they matter to the ecosystem.',
  content: `
      <p>Sloths are among Costa Rica’s most beloved animals—these mammals have won visitors’ hearts worldwide.</p>
      
      <h2>Species in Costa Rica</h2>
      <p>There are two species:</p>
      <ul>
        <li><strong>Three-toed sloth:</strong> More common, leaf-based diet</li>
        <li><strong>Two-toed sloth:</strong> Nocturnal, more varied diet</li>
      </ul>
      
      <h2>Where to see them</h2>
      <p>Sloths live in humid forests nationwide. Top spots include:</p>
      <ul>
        <li>Manuel Antonio</li>
        <li>Tortuguero</li>
        <li>La Fortuna</li>
        <li>Monteverde</li>
      </ul>
      
      <h2>Fun facts</h2>
      <ul>
        <li>They can sleep up to 20 hours a day</li>
        <li>They climb down only about once a week</li>
        <li>They swim better than they walk on the ground</li>
        <li>Algae grows on their fur for camouflage</li>
      </ul>
    `,
  image: '/images/blog-perezosos.jpg',
  category: 'Wildlife',
  author: 'Ana Patricia',
  date: 'January 15, 2025',
  readTime: '6 min',
  tags: ['sloths', 'wildlife', 'mammals', 'facts'],
}
