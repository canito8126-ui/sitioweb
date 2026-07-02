import type { BlogPostData } from '../types'

/** Position in the blog listing (lower = first) */
export const order = 4

export const es: BlogPostData = {
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
}

export const en: BlogPostData = {
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
}
