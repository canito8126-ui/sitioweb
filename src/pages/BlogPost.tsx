import { useParams, Link } from 'react-router-dom'
import { 
  Calendar, 
  Clock, 
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  // This would normally come from an API or database
  const blogPosts: Record<string, {
    title: string
    content: string
    image: string
    category: string
    author: string
    date: string
    readTime: string
    tags: string[]
  }> = {
    'mejor-epoca-viajar-costa-rica': {
      title: '¿Cuál es la mejor época para viajar a Costa Rica?',
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
      tags: ['clima', 'temporada', 'planificación', 'consejos']
    },
    'aves-costa-rica-guia-principiantes': {
      title: 'Guía de avistamiento de aves para principiantes',
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
      tags: ['aves', 'birdwatching', 'naturaleza', 'guía']
    },
    'comida-tipica-costa-rica': {
      title: '10 platillos típicos que debes probar en Costa Rica',
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
      tags: ['comida', 'gastronomía', 'cultura', 'tradición']
    },
    'tortuguero-guia-completa': {
      title: 'Tortuguero: La guía completa para ver tortugas',
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
      tags: ['tortugas', 'tortuguero', 'fauna', 'conservación']
    },
    'senderismo-seguro-costa-rica': {
      title: 'Consejos para senderismo seguro en Costa Rica',
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
      tags: ['senderismo', 'seguridad', 'aventura', 'consejos']
    },
    'perezosos-costa-rica': {
      title: 'Todo sobre los perezosos de Costa Rica',
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
      tags: ['perezosos', 'fauna', 'mamíferos', 'curiosidades']
    }
  }

  const post = slug ? blogPosts[slug] : null

  if (!post) {
    return (
      <div className="pt-24 lg:pt-32 py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="headline-lg text-wp-forest mb-6">Artículo no encontrado</h1>
          <p className="text-graytext mb-8">El artículo que buscas no existe o ha sido movido.</p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft size={18} className="inline mr-2" />
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero Image */}
      <div className="relative h-[50vh] lg:h-[60vh]">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wp-forest via-wp-forest/50 to-transparent" />
        
        {/* Back Button */}
        <Link 
          to="/blog"
          className="absolute top-6 left-6 text-white flex items-center gap-2 hover:text-wp-yellow transition-colors"
        >
          <ArrowLeft size={20} />
          Volver al blog
        </Link>
      </div>

      {/* Content */}
      <article className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-wp-yellow text-white text-sm px-4 py-1">
              {post.category}
            </span>
            <span className="text-graytext text-sm flex items-center gap-1">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="text-graytext text-sm flex items-center gap-1">
              <Clock size={16} />
              {post.readTime} de lectura
            </span>
          </div>

          {/* Title */}
          <h1 className="headline-lg text-wp-forest mb-6">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-10 pb-10 border-b border-wp-forest/10">
            <div className="w-12 h-12 bg-wp-green/20 rounded-full flex items-center justify-center">
              <span className="text-wp-forest font-bold">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium text-wp-forest">{post.author}</p>
              <p className="text-sm text-graytext">Autor</p>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-wp-forest prose-p:text-graytext prose-li:text-graytext prose-strong:text-wp-forest prose-a:text-wp-yellow hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-wp-forest/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-wp-cream text-wp-forest text-sm px-3 py-1 border border-wp-forest/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-graytext text-sm">Compartir:</span>
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-wp-forest text-white flex items-center justify-center hover:bg-wp-yellow transition-colors">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 bg-wp-forest text-white flex items-center justify-center hover:bg-wp-yellow transition-colors">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 bg-wp-forest text-white flex items-center justify-center hover:bg-wp-yellow transition-colors">
                <Linkedin size={18} />
              </button>
              <button className="w-10 h-10 bg-wp-forest text-white flex items-center justify-center hover:bg-wp-yellow transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream border-t border-wp-forest/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-wp-forest mb-8">
            Artículos relacionados
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedPost]) => (
                <Link 
                  key={key}
                  to={`/blog/${key}`}
                  className="group flex gap-4 bg-white p-4 shadow-card hover:shadow-hover transition-shadow"
                >
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-wp-yellow">{relatedPost.category}</span>
                    <h3 className="font-display font-semibold text-wp-forest group-hover:text-wp-yellow transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
