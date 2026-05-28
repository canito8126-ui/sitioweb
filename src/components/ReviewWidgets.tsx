import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

type GoogleReview = { name: string; rating: number; text: string; date: string };
type TripReview = { name: string; rating: number; title: string; text: string; date: string };

const ALL_REVIEWS = [
  {
    name: "Josh rowley",
    rating: 5,
    date: "a day ago",
    review: "We had an amazing experience exploring Costa Rica with Isaak as our tour guide! He is incredibly knowledgeable about the country, its culture, and especially the wildlife. Throughout the tour he was able to spot animals we would have completely missed on our own and explained everything in such an interesting way.Isaak was also very friendly, professional, and made everyone feel comfortable from the start. His passion for Costa Rica really shows, and it made the whole experience unforgettable. If you’re looking for a guide who is informative, fun, and genuinely cares about giving you the best experience possible, I highly recommend Isaak. 5 stars without a doubt!"
  },
  {
    name: "Arlinn Dodds",
    rating: 5,
    date: "a day ago",
    review: "Isaac was a wonderful guide who shared and showed us many amazing sights and experiences. Being told much about Costa Rica’s history, wildlife, and culture was an amazing experience that I would whole heartedly recommend to anyone."
  },
  {
    name: "Marco Dominguez",
    rating: 5,
    date: "a month ago",
    review: "Excelente tour, la caminata se hace muy amena con un guía tan genial como MamboUn increíble lugar y el guía explica muy bien a detalle el entorno"
  },
  {
    name: "Jose Mainor Villalobos Ulate",
    rating: 5,
    date: "a month ago",
    review: "Muy profesionales! Conocen muy bien cada detalle del lugar ."
  },
  {
    name: "Francia Charpentier Alvarado",
    rating: 5,
    date: "a month ago",
    review: "Nos aventuramos a hacer el tour Vuelta del Cañón con nuestra golden sabiendo que el sendero podría ser un poco demandante para ella, pero la experiencia y ayuda de Isaac hizo que todo fluyera de maravilla. ✨🐾"
  },
  {
    name: "Mauricio Fernández Picado",
    rating: 5,
    date: "a month ago",
    review: "Isaac fue un excelente guía en nuestra aventura en Bajos del Toro. Su pasión por la biología y la conservación de la naturaleza se nota en su conversación y estilo de vida, lo cual le da un gran valor agregado! Disfrutamos muchísimo del tour y definitivamente lo seguiré contactando para toures futuros."
  },
  {
    name: "Bobby D",
    rating: 5,
    date: "2 months ago",
    review: "Just an incredible experience ! Without a guide this would be a very challenging route to follow and the river crossing would be hard to navigate correctly. Our guide was friendly, professional, and genuinely enjoying the hike himself. He noticed wildlife we would have missed and was really blown away by it. My only regret is that I’m not Costa Rican so I don’t have this incredible hike in my back yard. We will be back and we will use this company to guide us! Truly spectacular… just book it and let them handle everything for you."
  },
  {
    name: "Mariska Richards",
    rating: 5,
    date: "2 months ago",
    review: "Definitely choose Wild Path if you’re exploring wildlife in Bajos del Toro! We were super lucky to be able to do 3 birding tours with Mambo (Daniel) while staying at El Silencio Lodge, who recommended him to us. We saw great birds at the property, but with Mambo, we were also able to get away from the resort and see over 100 species in Juan Castro Blanco National Park and The Nest Nature Center (highly recommend!). Mambo was very knowledgeable and patient, and took us to places he knew we’d see some great birds, even hard-to-see ones, like the black-faced solitaire.In addition to all that, even in between active birding opportunities, it was great having Mambo around as he’s just a chill, fun guy, easy to talk to and nice. He speaks perfect English but still patiently put up with me constantly trying to bust out my broken Spanish, and didn’t even dump me on the side of the road when I revealed that I am not a fan of his favorite animals, frogs! :) He has a great vibe and is knowledgeable about many different types of animals, as well as the nation of Costa Rica. He was flexible and accommodating when we needed to move things around, and personalized the tours based on things we wanted to see or were interested in.100% recommend Wild Path and Mambo!"
  },
  {
    name: "Josee Lacombe",
    rating: 5,
    date: "3 months ago",
    review: "We did a night walk with our guide Isaac and it was an outstanding experience. He is truly passionate about nature, and his enthusiasm is contagious. We were alone in the forest, which made the experience even more special.We learned a lot about the local flora and fauna and saw several species, including fascinating insects and frogs. It was a memorable experience and we highly recommend this tour to anyone visiting the area."
  },
  {
    name: "Xavier Dansereau",
    rating: 5,
    date: "3 months ago",
    review: "Très charmant et accueillant. Parfait pour réduire l’éco-anxiété."
  },
  {
    name: "Jesús Raso",
    rating: 5,
    date: "4 months ago",
    review: "Con Cano disfrutamos de un país increíble y de todas las opciones de diversión que nos ofrece esta preciosa tierra.Cultura, gastronomía, descanso y naturaleza a raudales.Todo un placer compartir esta aventura con un grupo magnífico!"
  },
  {
    name: "Beatriz Gil",
    rating: 5,
    date: "4 months ago",
    review: "La mayor experiencia de mi vida. Gracias a Isaac y a todos sus conocimientos sobre las plantas y animales que nos íbamos encontrando en todas las excursiones realizadas aprendimos muchísimo sobre Costa Rica 🇨🇷 y descubrí el amor que tengo hacia toda la naturaleza y la paz que puede llegar a dar estar en sitios tan espectaculares como los que Isaac nos enseñó. Muchas gracias por el viaje y nos volveremos a ver sin duda. PURA VIDA CANITO!"
  },
  {
    name: "Borja Liroz Igea",
    rating: 5,
    date: "4 months ago",
    review: "Un viaje estupendo con gente de 10!! Recomendable al 100x1000!!"
  },
  {
    name: "Nina Helen Stoll",
    rating: 5,
    date: "4 months ago",
    review: "Ich habe eine Tour zu den Blue falls mit Isaac gemacht, es hat super viel Spaß gemacht! Seine Leidenschaft für die Flora und Fauna ist richtig ansteckend, das hat mich sehr begeistert."
  },
  {
    name: "Ken Mamitsuka",
    rating: 5,
    date: "4 months ago",
    review: "Mambo was an incredible birding guide in Bajos del Toro. We started in Juan Castro Blanco NP and saw some cool birds from the small ranger house. He then took us to Catarata Del Toro where we birded and walked down to the really cool waterfall. He helped find a bunch of great birds near the waterfall and gardens as well. More importantly, Mambo in really knowledgable about the flora and fauna of the area and was really great about helping us understand and appreciate it. He's also just an amazing person who was a pleasure to talk to and learn from. I would highly recommend him as a guide no matter what your goals may be."
  },
  {
    name: "Louise Meyer",
    rating: 5,
    date: "8 months ago",
    review: "Superbe visite de la Catarata del Toro avec Daniel. Plein d’explications super intéressante sur la biodiversité du Costa Rica. Très à l’écoute, Daniel partage avec passion ses connaissances. Une expérience inoubliable ! Je recommande :)"
  },
  {
    name: "Tonya Bryant",
    rating: 5,
    date: "8 months ago",
    review: "Words can’t express how grateful I am to have had this tour experience with Daniel. Upon meeting him you can immediately tell he is tremendously passionate and knowledgeable about what he does! It never felt like this was just a job for him. He has a great spirit and I loved the knowledge he shared about the beautiful country of Costa Rica! He was sooo considerate and answered all the million questions I had even on the night before the tour. He was very patient and flexible in helping me decide on what I wanted to do and was very accommodating to my tour needs. My tour was personalized to what I wanted to do and was not a generic type of tour where you have to do some things you weren’t interested in. We went kayaking in the beautiful lake of Rio Cuarto, ate a local restaurant that was amazing and went to a great thermal springs and got to sit in the river as well at the thermal springs. I also casually mentioned wishing I could see a sloth on this trip and to my surprise he later asked if I wanted to look for some as we drove past a tree. I was so excited to actually see one in the “wild” and not at a reserve! I learned so much about Costa Rica, from the environment, the people, the wildlife, to the agricultural and even got help strengthening my poor Spanish skills lol. Anytime I wanted a picture he was happy to take them.I loved that he was able to go to La Fortuna and Arenal areas but also had options to explore the less touristy places like Bocas Del Toro and surrounding areas and cities because these areas deserve our love and attention too.I’m forever grateful for our tour and his kindness. Being a solo female traveler is usually nerve wrecking but I never felt unsafe and never felt uncomfortable. He was so welcoming and I’m so happy I decided to take a chance and book with him on my last full day in Costa Rica. It was truly magical. I can without a doubt say Daniel was the best tour guide I’ve ever traveled with and I would recommend his company to anyone I ever encounter! Thank you for the lifelong memories! Pura Vida!All the best,Tonya"
  },
  {
    name: "Jeff K",
    rating: 5,
    date: "8 months ago",
    review: "I had an awesome experience with Wild Path, well organized tour, respectful of the environment and focused on exploring the local wildlife, highly recommend if you want an authentic tour with a local person knowledgeable of the area."
  },
  {
    name: "Christopher Hanson",
    rating: 5,
    date: "a year ago",
    review: "I did a 5 day tour in the central northern region of Costa Rica with Daniel/Mambo and it was one of the best experiences of my life. We visited places where we could see an amazing variety of wildlife while being guided by locals with specialised knowledge. The tour was flexible and we always felt accommodated by Mambo who was really friendly. If you want an authentic local experience away from the big crowds of tourists, I highly recommend these tours!"
  },
  {
    name: "Matthew Moe",
    rating: 5,
    date: "a year ago",
    review: "Mambo was an excellent guide! His knowledge and ability to engage us and all of our kids was wonderful. We were able to hike trails not accessible otherwise. Communication during planning and day-of was great. Highly recommended."
  },
  {
    name: "Justin Taylor",
    rating: 5,
    date: "a year ago",
    review: "We had an amazing time being guided through a Costa Rican nature center. Not only were we able to access trails that were not yet open to the public, we saw an incredible array of birds and other animals. Our guide, Mambo, was delightful to talk to and has remarkable patience, a keen eye for hidden nature, and an impressive knowledge of Costa Rican flora and fauna. We highly recommend this group!"
  },
  {
    name: "Lidiana Salas",
    rating: 5,
    date: "a year ago",
    review: "El tour realizado en las Catarratas de El Toro, fue una experiencia espectacular. Durante el recorrido Daniel tuvo un amplio conocimiento de la vegetación y los animales, fue una caminata guiada a lo largo de los senderos y disfrutamos de vistas bellísimas y, durante todo el tiempo, logramos ver diferentes especies de aves y fauna que nos iba explicando.Desde la coordinación hasta terminar el tour el trato siempre fue de primera, sin duda, es una experiencia que combina aventura y relajación en un entorno impresionante."
  },
  {
    name: "Gerald Quirós.",
    rating: 5,
    date: "a year ago",
    review: "One of the best experiences in Bajos del Toro, Issac helped us to connect with the nature, finding lifers 🦜 walking around this beautiful forest, highly recommended!!"
  },
  {
    name: "Laura CV",
    rating: 5,
    date: "a year ago",
    review: "Thank you again for such a fulfilling experience, I didn't knew that I needed so much to disconnect from the stress of the city and reconnect with a fascinating natural world, the songs of the birds, the rain in the forest… I highly recommend this experience if you are looking for a balance in well-being while having fun. thanks Isaac and Daniel :)"
  },
  {
    name: "Tina Hof",
    rating: 5,
    date: "a year ago",
    review: "Isaac is simply the best! His tours are full of interesting information about the country, the nature and of course also the people. I learned a lot from him and would book more tours anytime with him in the future. You can just see his passion and that's very sympathetic"
  },
  {
    name: "Gaston Gimbernat",
    rating: 5,
    date: "a year ago",
    review: "Fantástica experiencia!Quedamos encantados de los lugares que conocimos y de la amabilidad y cantidad de información que tenia el guía. Súper recomendado!"
  },
  {
    name: "Gustavo Alfaro",
    rating: 5,
    date: "a year ago",
    review: "Excelente guía, la experiencia fue muy agradable y acorde a nuestra forma de disfrutar la naturaleza!"
  },
  {
    name: "Lukas Roucka",
    rating: 5,
    date: "a year ago",
    review: "It is an absolutely beautiful area and great adventure for nature lovers!"
  },
  {
    name: "Javier Rodriguez",
    rating: 5,
    date: "a year ago",
    review: "Isaac is an exceptional tour guide, whose love for nature and deep environmental consciousness make every journey unforgettable. His passion for the outdoors is contagious. He just loves to educate visitors about local ecosystems, conservation efforts, and sustainable travel practices. Isaac ensures the experience is not only enjoyable but also informative and respectful of nature. His commitment to protecting the environment shines through in every detail, making the tours both eco-friendly and enriching. Highly recommended for anyone looking to connect with nature on a deeper level while contributing to its preservation."
  },
  {
    name: "Breylin Sánchez Solís",
    rating: 5,
    date: "a year ago",
    review: "Excelente profesional, con alto bagaje econocimientos. Comprensivo y noble con las personas. Pero lo más especial, es ese amor que transmite por la naturaleza y la perspectiva de apreciar cada detalle de la creación."
  },
  {
    name: "Jennifer Dylanna Rojas Sibja",
    rating: 5,
    date: "a year ago",
    review: "Canito es sin duda el mejor guía, siempre amable y atento a explicar y dar detalles de cada cosa que uno se topa en el camino, su apreciación hacia la naturaleza es genuina y eso es hermoso."
  },
  {
    name: "Pia Miksch",
    rating: 5,
    date: "a year ago",
    review: "Amazing guide who showed us the surrounding nature in a way we would have never experienced. His knowledge about plants and animals and how everything connects was impressive. And the hike was well tailored to your needs and interests. Thank you!"
  },
  {
    name: "Jeancarlo Rojas Acuña",
    rating: 5,
    date: "a year ago",
    review: "Best guides ever, they are very knowledgeable and know the area perfectly!"
  },
  {
    name: "Kevin Parra",
    rating: 5,
    date: "a year ago",
    review: "The best place to explore the natural beauty hidden in bajos del toro, with a team of experts ready to offer the best experiences.."
  },
  {
    name: "Daniela Vargas",
    rating: 5,
    date: "a year ago",
    review: "Isaac es una gran persona, un gran profesional, conoce muchísimo de flora y fauna y además conoce los lugares más bonitos de Costa Rica, SÚPER RECOMENDADO!"
  }
];

const ReviewWidgets = () => {
  const { t, i18n } = useTranslation();
  const locale: 'en' | 'es' = i18n.language.startsWith('en') ? 'en' : 'es';

  // Filter reviews to display only a subset on the homepage
  const displayedReviews = useMemo(() => ALL_REVIEWS.slice(0, 5), []); // Display first 5 reviews

  useEffect(() => {
    // Remove Sociablekit and TripAdvisor scripts as we're using custom reviews
    const googleScript = document.querySelector('script[src*="sociablekit.com"]');
    if (googleScript) {
      document.body.removeChild(googleScript);
    }
    const taScript = document.querySelector('script[src*="jscache.com"]');
    if (taScript) {
      document.body.removeChild(taScript);
    }
  }, []);

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('reviews.badge')}
          </p>
          <h2 className="headline-lg text-wp-forest mb-6">
            {t('reviews.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Reviews Section */}
          <div className="bg-white p-6 lg:p-8 shadow-card flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-wp-forest">
                  {t('reviews.google')}
                </h3>
                <div className="flex items-center gap-1">
                  <span className="text-wp-yellow font-bold">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-wp-yellow fill-wp-yellow" />
                    ))}
                  </div>
                  <span className="text-graytext text-sm">(47 reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
              {displayedReviews.map((review, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 mb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-wp-green/20 rounded-full flex items-center justify-center">
                      <span className="text-wp-forest font-bold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-wp-forest text-sm">{review.name}</p>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={10} className="text-wp-yellow fill-wp-yellow" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-graytext text-sm line-clamp-3">{review.review}</p>
                  <p className="text-graytext/60 text-xs mt-1">{review.date}</p>
                </div>
              ))}
            </div>

            <a 
              href="https://www.google.com/maps/place/Wild+Path/@10.2332306,-84.3062782,17z/data=!4m8!3m7!1s0x8fa061136b4852f3:0xfcd6099c2483f145!8m2!3d10.2332253!4d-84.3037033!9m1!1b1!16s%2Fg%2F11wb9_lzfs?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-wp-yellow font-medium text-sm mt-4 hover:underline"
            >
              {locale === 'en' ? 'View all Google reviews' : 'Ver todas las reseñas'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* TripAdvisor Reviews Section (placeholder) */}
          <div className="bg-white p-6 lg:p-8 shadow-card flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#00AF87] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-wp-forest">
                  {t('reviews.tripadvisor')}
                </h3>
                <div className="flex items-center gap-1">
                  <span className="text-[#00AF87] font-bold">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-[#00AF87] fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-graytext text-sm">(32 reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex-grow flex items-center justify-center text-graytext/70 italic">
              {locale === 'en' ? 'TripAdvisor reviews coming soon' : 'Reseñas de TripAdvisor pronto'}
            </div>

            <a 
              href="https://www.tripadvisor.co/Attraction_Review-g1048263-d25322418-Reviews-Wild_Path_Costa_Rica-Bajos_del_Toro_Province_of_Alajuela.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00AF87] font-medium text-sm mt-4 hover:underline"
            >
              {locale === 'en' ? 'View all TripAdvisor reviews' : 'Ver todas las reseñas'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewWidgets;
