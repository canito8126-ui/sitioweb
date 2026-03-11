import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

const ReviewWidgets = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Load Google Reviews Widget Script
    const googleScript = document.createElement('script');
    googleScript.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    googleScript.async = true;
    googleScript.defer = true;
    document.body.appendChild(googleScript);

    // Load TripAdvisor Widget Script
    const taScript = document.createElement('script');
    taScript.src = 'https://www.jscache.com/wejs?wtype=selfserveprop&uniq=1&locationId=25322418&lang=es_CO&rating=true&nreviews=5&writereviewlink=true&popIdx=true&iswide=false&border=true&display_version=2';
    taScript.async = true;
    document.body.appendChild(taScript);

    return () => {
      document.body.removeChild(googleScript);
      document.body.removeChild(taScript);
    };
  }, []);

  // Static reviews data as fallback
  const googleReviews = [
    {
      name: "María González",
      rating: 5,
      text: "Experiencia increíble. El equipo de Wild Path diseñó un itinerario perfecto para nuestra familia. Cada detalle estuvo pensado.",
      date: "2 semanas atrás"
    },
    {
      name: "John Smith",
      rating: 5,
      text: "Best experience in Costa Rica! The guides were knowledgeable and the itinerary was perfectly tailored to our interests.",
      date: "1 mes atrás"
    },
    {
      name: "Ana Patricia",
      rating: 5,
      text: "Viajé sola y me sentí segura en todo momento. La caminata nocturna fue mágica. ¡Totalmente recomendado!",
      date: "2 meses atrás"
    }
  ];

  const tripadvisorReviews = [
    {
      name: "Carlos R.",
      rating: 5,
      title: "Experiencia inolvidable",
      text: "Wild Path superó todas nuestras expectativas. Los guías son expertos locales que conocen cada rincón.",
      date: "enero 2025"
    },
    {
      name: "Emma L.",
      rating: 5,
      title: "Perfecto para fotógrafos",
      text: "Como fotógrafa, necesitaba acceso a los mejores spots. Wild Path lo hizo posible. Vimos quetzales y tucanes.",
      date: "diciembre 2024"
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            OPINIONES VERIFICADAS
          </p>
          <h2 className="headline-lg text-wp-forest mb-6">
            {t('reviews.title')}
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Reviews */}
          <div className="bg-white p-6 lg:p-8 shadow-card">
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

            {/* Google Reviews List */}
            <div className="space-y-4">
              {googleReviews.map((review, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
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
                  <p className="text-graytext text-sm line-clamp-3">{review.text}</p>
                  <p className="text-graytext/60 text-xs mt-1">{review.date}</p>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <a 
              href="https://www.google.com/maps/place/Wild+Path/@10.2332306,-84.3062782,17z/data=!4m8!3m7!1s0x8fa061136b4852f3:0xfcd6099c2483f145!8m2!3d10.2332253!4d-84.3037033!9m1!1b1!16s%2Fg%2F11wb9_lzfs?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-wp-yellow font-medium text-sm mt-4 hover:underline"
            >
              Ver todas las reseñas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* TripAdvisor Reviews */}
          <div className="bg-white p-6 lg:p-8 shadow-card">
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

            {/* TripAdvisor Reviews List */}
            <div className="space-y-4">
              {tripadvisorReviews.map((review, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-[#00AF87]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#00AF87] font-bold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-wp-forest text-sm">{review.name}</p>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-[#00AF87] fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold text-wp-forest text-sm">{review.title}</p>
                  <p className="text-graytext text-sm line-clamp-2">{review.text}</p>
                  <p className="text-graytext/60 text-xs mt-1">{review.date}</p>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <a 
              href="https://www.tripadvisor.co/Attraction_Review-g1048263-d25322418-Reviews-Wild_Path_Costa_Rica-Bajos_del_Toro_Province_of_Alajuela.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00AF87] font-medium text-sm mt-4 hover:underline"
            >
              Ver todas las reseñas
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
