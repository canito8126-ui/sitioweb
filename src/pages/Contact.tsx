import { useTranslation } from 'react-i18next'
import useSeo from '../hooks/useSeo'
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Instagram,
  Facebook,
  Clock,
} from 'lucide-react'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export default function Contact() {
  const { t } = useTranslation()

  useSeo({
    title: t('pages.contact.hero.title'),
    description: t('pages.contact.hero.subtitle'),
    image: 'https://wildpath.lat/images/contact-hero.jpg',
    canonicalPath: '/contacto',
  })

  return (
    <div className="pt-24 lg:pt-32">
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-wp-forest overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/contact-hero.jpg" 
            alt={t('pages.contact.hero.alt')} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('pages.contact.hero.badge')}
          </p>
          <h1 className="headline-xl text-white mb-6">
            {t('pages.contact.hero.title')}
          </h1>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            {t('pages.contact.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="headline-lg text-wp-forest mb-8">
                {t('pages.contact.sectionTitle')}
              </h2>
              <p className="body-text text-graytext mb-10">
                {t('pages.contact.sectionIntro')}
              </p>

              <div className="space-y-6 mb-10">
                <a 
                  href="https://wa.me/50689857750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white shadow-card hover:shadow-hover transition-shadow group"
                >
                  <div className="w-14 h-14 bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={28} className="text-white" fill="white" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-wp-forest group-hover:text-wp-yellow transition-colors">
                      {t('pages.contact.whatsapp')}
                    </p>
                    <p className="text-graytext">+506 8985 7750</p>
                  </div>
                </a>

                <a 
                  href="tel:+50689857750"
                  className="flex items-center gap-4 p-4 bg-white shadow-card hover:shadow-hover transition-shadow group"
                >
                  <div className="w-14 h-14 bg-wp-yellow flex items-center justify-center flex-shrink-0">
                    <Phone size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-wp-forest group-hover:text-wp-yellow transition-colors">
                      {t('pages.contact.callUs')}
                    </p>
                    <p className="text-graytext">+506 8985 7750</p>
                  </div>
                </a>

                <a 
                  href="mailto:wildpathcr@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white shadow-card hover:shadow-hover transition-shadow group"
                >
                  <div className="w-14 h-14 bg-wp-forest flex items-center justify-center flex-shrink-0">
                    <Mail size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-wp-forest group-hover:text-wp-yellow transition-colors">
                      {t('pages.contact.email')}
                    </p>
                    <p className="text-graytext">wildpathcr@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="flex items-start gap-4 mb-10">
                <MapPin size={24} className="text-wp-yellow flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-semibold text-wp-forest mb-1">
                    {t('pages.contact.locationTitle')}
                  </p>
                  <p className="text-graytext">
                    {t('pages.contact.locationLine')}
                  </p>
                  <p className="text-sm text-graytext/70 mt-1">
                    {t('pages.contact.locationNote')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-10">
                <Clock size={24} className="text-wp-yellow flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-semibold text-wp-forest mb-1">
                    {t('pages.contact.hoursTitle')}
                  </p>
                  <p className="text-graytext">
                    {t('contact.hours')}
                  </p>
                  <p className="text-sm text-graytext/70 mt-1">
                    {t('pages.contact.hoursNote')}
                  </p>
                </div>
              </div>

              <div>
                <p className="font-display font-semibold text-wp-forest mb-4">
                  {t('pages.contact.followUs')}
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/wildpath.cr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-wp-forest flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Wild-Path-Costa-Rica/61561795049271/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-wp-forest flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@wildpathcostarica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-wp-forest flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
                  >
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 shadow-card">
              <h3 className="font-display font-bold text-xl text-wp-forest mb-6">
                {t('pages.contact.formTitle')}
              </h3>
              
              <div className="w-full">
                <form
                  action="https://formsubmit.co/wildpathcr@gmail.com"
                  method="POST"
                  target="_blank"
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New contact request from Wild Path" />
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      placeholder={t('pages.contact.formNamePlaceholder')}
                      required
                      className="w-full rounded-3xl border border-wp-forest/10 bg-white px-4 py-4 text-sm text-wp-forest placeholder:text-gray-400 shadow-sm outline-none transition focus:border-wp-yellow focus:ring-2 focus:ring-wp-yellow/30"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder={t('pages.contact.formEmailPlaceholder')}
                      required
                      className="w-full rounded-3xl border border-wp-forest/10 bg-white px-4 py-4 text-sm text-wp-forest placeholder:text-gray-400 shadow-sm outline-none transition focus:border-wp-yellow focus:ring-2 focus:ring-wp-yellow/30"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows={10}
                      placeholder={t('pages.contact.formMessagePlaceholder')}
                      required
                      className="w-full rounded-[2rem] border border-wp-forest/10 bg-white px-4 py-4 text-sm text-wp-forest placeholder:text-gray-400 shadow-sm outline-none transition focus:border-wp-yellow focus:ring-2 focus:ring-wp-yellow/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-wp-forest px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-card transition duration-200 hover:bg-wp-yellow hover:text-wp-forest"
                  >
                    {t('pages.contact.formButton')}
                  </button>
                </form>
              </div>

              <p className="text-xs text-graytext text-center mt-4">
                {t('pages.contact.formDisclaimer')}{' '}
                <a href="/privacidad" className="text-wp-yellow hover:underline">
                  {t('pages.contact.privacyLink')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
