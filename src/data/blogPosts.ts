/** Bilingual blog post bodies — used when language switches */
export type BlogPostData = {
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  tags: string[]
}

const es: Record<string, BlogPostData> = {
  'mejor-epoca-viajar-costa-rica': {
    title: '¿Cuál es la mejor época para viajar a Costa Rica?',
    excerpt:
      'Descubre las ventajas de cada temporada y elige el momento perfecto para tu aventura. Desde la época seca hasta la verde, cada una tiene su magia.',
    content: `
        <p>Costa Rica es un destino que puede disfrutarse durante todo el año, pero cada temporada tiene sus propias ventajas y consideraciones. En este artículo, te ayudamos a decidir cuándo es el mejor momento para tu aventura.</p>
        
        <h2>La época seca (diciembre - abril)</h2>
        <p>Conocida como "verano" por los locales, esta es la temporada más popular para visitar Costa Rica. Los días son soleados y las lluvias son mínimas, lo que la convierte en el momento ideal para:</p>
        <ul>
          <li>Disfrutar de las playas sin preocupaciones</li>
          <li>Realizar caminatas con mejores vistas</li>
          <li>Observar fauna en senderos más accesibles</li>
        </ul>
        
        <h2>La época verde (mayo - noviembre)</h2>
        <p>La temporada lluviosa, o "invierno", tiene sus propios encantos. La vegetación está más exuberante, los ríos corren con más fuerza y hay menos turistas. Es perfecta para:</p>
        <ul>
          <li>Fotografía de naturaleza con colores más vibrantes</li>
          <li>Menores precios en alojamientos</li>
          <li>Experiencias más auténticas y tranquilas</li>
        </ul>
        
        <h2>Eventos especiales durante el año</h2>
        <p>Algunos eventos naturales ocurren en fechas específicas:</p>
        <ul>
          <li><strong>Tortugas:</strong> El desove de tortugas verdes ocurre de julio a octubre</li>
          <li><strong>Ballenas:</strong> Las ballenas jorobadas llegan de julio a noviembre</li>
          <li><strong>Aves:</strong> La migración de aves del norte ocurre de septiembre a noviembre</li>
        </ul>
        
        <h2>Nuestra recomendación</h2>
        <p>En Wild Path, creemos que no hay una "mejor" época, sino la época adecuada para lo que buscas. Contáctanos y te ayudaremos a planificar tu viaje según tus intereses específicos.</p>
      `,
    image: '/images/blog-epoca.jpg',
    category: 'Consejos de Viaje',
    author: 'Equipo Wild Path',
    date: '15 de febrero, 2025',
    readTime: '5 min',
    tags: ['clima', 'temporada', 'planificación', 'consejos'],
  },
  'aves-costa-rica-guia-principiantes': {
    title: 'Guía de avistamiento de aves para principiantes',
    excerpt:
      'Todo lo que necesitas saber para comenzar a observar las más de 900 especies de aves que habitan Costa Rica. Equipo, mejores spots y consejos prácticos.',
    content: `
        <p>Costa Rica es un paraíso para los observadores de aves, con más de 900 especies registradas. Si eres principiante, esta guía te ayudará a comenzar tu aventura ornitológica.</p>
        
        <h2>Equipo básico</h2>
        <p>No necesitas invertir en equipo caro para comenzar:</p>
        <ul>
          <li><strong>Binoculares:</strong> Un par de 8x42 es ideal para principiantes</li>
          <li><strong>Guía de campo:</strong> El de Richard Garrigues es el más popular</li>
          <li><strong>Ropa cómoda:</strong> Colores neutros que no llamen la atención</li>
          <li><strong>Repelente:</strong> Esencial en la selva</li>
        </ul>
        
        <h2>Mejores lugares para principiantes</h2>
        <ul>
          <li><strong>Monteverde:</strong> Fácil acceso y muchas especies</li>
          <li><strong>La Selva:</strong> Senderos bien mantenidos</li>
          <li><strong>Curi-Cancha:</strong> Menos concurrido, ideal para practicar</li>
        </ul>
        
        <h2>Consejos prácticos</h2>
        <p>La paciencia es la virtud más importante. Las aves no aparecen por comando. Escucha, observa los movimientos en el follaje, y disfruta del proceso de aprendizaje.</p>
      `,
    image: '/images/blog-aves.jpg',
    category: 'Naturaleza',
    author: 'María González',
    date: '10 de febrero, 2025',
    readTime: '8 min',
    tags: ['aves', 'birdwatching', 'naturaleza', 'guía'],
  },
  'comida-tipica-costa-rica': {
    title: '10 platillos típicos que debes probar en Costa Rica',
    excerpt:
      'Desde el gallo pinto hasta el casado, descubre los sabores auténticos de la gastronomía costarricense y dónde encontrarlos.',
    content: `
        <p>La gastronomía costarricense es una deliciosa mezcla de influencias indígenas, españolas y africanas. Aquí te presentamos los platillos que no puedes dejar de probar.</p>
        
        <h2>1. Gallo Pinto</h2>
        <p>El desayuno nacional por excelencia. Arroz y frijoles mezclados con especias, acompañado de huevos, natilla y plátano maduro.</p>
        
        <h2>2. Casado</h2>
        <p>El almuerzo típico que incluye arroz, frijoles, carne, ensalada y plátano. Cada región tiene su variación.</p>
        
        <h2>3. Olla de Carne</h2>
        <p>Un guiso reconfortante de carne con verduras, perfecto para los días lluviosos.</p>
        
        <h2>4. Ceviche</h2>
        <p>Pescado marinado en limón con cebolla y cilantro. Especialmente bueno en la costa pacífica.</p>
        
        <h2>5. Tamales</h2>
        <p>Tradicionales en Navidad, pero disponibles todo el año en muchos lugares.</p>
      `,
    image: '/images/blog-comida.jpg',
    category: 'Cultura',
    author: 'Carlos Ramírez',
    date: '5 de febrero, 2025',
    readTime: '6 min',
    tags: ['comida', 'gastronomía', 'cultura', 'tradición'],
  },
  'tortuguero-guia-completa': {
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
  },
  'senderismo-seguro-costa-rica': {
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
  },
  'perezosos-costa-rica': {
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
  },
}

const en: Record<string, BlogPostData> = {
  'mejor-epoca-viajar-costa-rica': {
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
  },
  'aves-costa-rica-guia-principiantes': {
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
  },
  'comida-tipica-costa-rica': {
    title: '10 traditional dishes to try in Costa Rica',
    excerpt:
      'From gallo pinto to casado—authentic flavors of Costa Rican cuisine and where to find them.',
    content: `
        <p>Costa Rican cuisine blends Indigenous, Spanish, and African influences. Here are dishes you shouldn’t miss.</p>
        
        <h2>1. Gallo pinto</h2>
        <p>The classic breakfast: rice and beans seasoned and served with eggs, sour cream, and ripe plantain.</p>
        
        <h2>2. Casado</h2>
        <p>The typical lunch plate—rice, beans, protein, salad, and plantain—with regional variations.</p>
        
        <h2>3. Olla de carne</h2>
        <p>A hearty beef-and-vegetable stew—perfect on rainy days.</p>
        
        <h2>4. Ceviche</h2>
        <p>Fish “cooked” in lime with onion and cilantro—especially good on the Pacific coast.</p>
        
        <h2>5. Tamales</h2>
        <p>A Christmas tradition, but available year-round in many places.</p>
      `,
    image: '/images/blog-comida.jpg',
    category: 'Culture',
    author: 'Carlos Ramírez',
    date: 'February 5, 2025',
    readTime: '6 min',
    tags: ['food', 'gastronomy', 'culture', 'tradition'],
  },
  'tortuguero-guia-completa': {
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
  },
  'senderismo-seguro-costa-rica': {
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
  },
  'perezosos-costa-rica': {
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
  },
}

export const BLOG_SLUG_ORDER = [
  'mejor-epoca-viajar-costa-rica',
  'aves-costa-rica-guia-principiantes',
  'comida-tipica-costa-rica',
  'tortuguero-guia-completa',
  'senderismo-seguro-costa-rica',
  'perezosos-costa-rica',
] as const

export function getBlogPosts(locale: string): Record<string, BlogPostData> {
  return locale.startsWith('en') ? en : es
}
