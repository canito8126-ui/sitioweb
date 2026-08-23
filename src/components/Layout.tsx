import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  MapPinned
} from 'lucide-react'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languageOptions = [
    { code: 'es', label: 'ES', flag: '/images/flag-es.svg' },
    { code: 'en', label: 'EN', flag: '/images/flag-en.svg' },
    { code: 'de', label: 'DE', flag: '/images/flag-de.svg' },
    { code: 'fr', label: 'FR', flag: '/images/flag-fr.svg' },
  ];
  const resolvedLanguage = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]
  const selectedLanguage = languageOptions.find((option) => option.code === resolvedLanguage) ?? languageOptions[1]
  const [showLangMenu, setShowLangMenu] = useState(false);
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setShowLangMenu(false);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('i18nextLng', code);
      } catch {
        /* storage unavailable */
      }
    }
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/experiencias', label: t('nav.experiences') },
    { path: '/inspiracion', label: t('nav.inspiration') },
    { path: '/galeria', label: t('nav.gallery') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/nosotros', label: t('nav.about') },
    { path: '/contacto', label: t('nav.contact') },
  ]

  const isActive = (path: string) => location.pathname === path
  const useLightHeader = isScrolled || location.pathname !== '/'

  return (
    <div className="min-h-screen bg-wp-cream">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        useLightHeader ? 'bg-white/95 backdrop-blur-sm py-2 shadow-md' : 'bg-transparent py-4'
      }`}>
        <div className="px-4 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/logo-wildpath.png"
              alt="Wild Path Costa Rica"
              className="h-12 lg:h-14 w-auto"
              width="120"
              height="56"
              fetchPriority="high"
              decoding="async"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-wp-yellow'
                    : (useLightHeader
                        ? 'text-wp-forest/80 hover:text-wp-forest'
                        : 'text-white/80 hover:text-white')
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center gap-2 transition-colors text-sm ${
                  useLightHeader ? 'text-wp-forest/80 hover:text-wp-forest' : 'text-white/80 hover:text-white'
                }`}
              >
                <img
                  src={selectedLanguage.flag}
                  alt={resolvedLanguage}
                  className="w-4 h-4 rounded-sm object-cover ring-1 ring-black/10"
                />
                <span className="uppercase text-xs tracking-wide">{resolvedLanguage}</span>
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-36 rounded-lg border border-black/10 bg-white/95 p-2 shadow-lg backdrop-blur-sm">
                  {languageOptions.map(opt => (
                    <button
                      key={opt.code}
                      onClick={() => changeLanguage(opt.code)}
                      className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs hover:bg-gray-100 ${
                        resolvedLanguage === opt.code ? 'bg-gray-100' : ''
                      }`}
                    >
                      <img src={opt.flag} alt={opt.code} className="w-4 h-4 rounded-sm object-cover ring-1 ring-black/10" />
                      <span className="uppercase tracking-wide">{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button Desktop */}
            <Link 
              to="/contacto"
              className="hidden lg:block btn-primary text-xs py-3 px-5"
            >
              {t('nav.cta')}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className={`xl:hidden p-2 ${
                useLightHeader ? 'text-wp-forest' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden fixed top-16 left-0 right-0 w-full z-50 mobile-menu-bg py-6 px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium py-2 ${
                    isActive(link.path) 
                      ? 'text-wp-yellow' 
                      : 'text-white/80'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-2">
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/60">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        changeLanguage(opt.code)
                        setIsMenuOpen(false)
                      }}
                      className={`flex items-center gap-2 rounded-md border px-2 py-1.5 text-left text-[10px] uppercase tracking-wide transition ${
                        resolvedLanguage === opt.code
                          ? 'border-wp-yellow/80 bg-wp-yellow/10 text-white'
                          : 'border-white/10 text-white/80 hover:bg-white/5'
                      }`}
                    >
                      <img
                        src={opt.flag}
                        alt={opt.code}
                        className="w-4 h-4 rounded-sm object-cover ring-1 ring-white/20"
                      />
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Link 
                to="/contacto"
                className="btn-primary text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.cta')}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/50689857750"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <img
            src="/images/whatsapp-logo.svg"
            alt=""
            className="w-7 h-7 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>
        
        {/* Phone */}
        <a
          href="tel:+50689857750"
          className="w-12 h-12 bg-wp-yellow rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="Llamar"
        >
          <Phone size={20} />
        </a>
      </div>

      {/* Social Media Sidebar (Desktop) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        <a
          href="https://www.instagram.com/wildpath.cr/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>
        <a
          href="https://www.facebook.com/people/Wild-Path-Costa-Rica/61561795049271/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={18} />
        </a>
        <a
          href="https://www.tiktok.com/@wildpathcostarica"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
          aria-label="TikTok"
        >
          <TikTokIcon />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-wp-forest py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <img
                src="/images/logo-wildpath.png"
                alt="Wild Path Costa Rica"
                className="h-16 w-auto mb-4"
                width="120"
                height="56"
                loading="lazy"
                decoding="async"
              />
              <p className="text-white/60 text-sm leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4">{t('footer.links')}</h4>
              <ul className="space-y-2">
                {navLinks.slice(0, 6).map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-white/60 text-sm hover:text-wp-yellow transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="tel:+50689857750"
                    className="text-white/60 text-sm hover:text-wp-yellow transition-colors flex items-center gap-2"
                  >
                    <Phone size={14} />
                    +506 8985 7750
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:wildpathcr@gmail.com"
                    className="text-white/60 text-sm hover:text-wp-yellow transition-colors flex items-center gap-2"
                  >
                    <Mail size={14} />
                    wildpathcr@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.google.com/maps/place/Wild+Path/@10.2332253,-84.3037033,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa061136b4852f3:0xfcd6099c2483f145!8m2!3d10.2332253!4d-84.3037033!16s%2Fg%2F11wb9_lzfs?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-wp-yellow transition-colors flex items-center gap-2"
                  >
                    <MapPinned size={14} />
                    {t('contact.findUs')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4">{t('footer.followUs')}</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/wildpath.cr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/people/Wild-Path-Costa-Rica/61561795049271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@wildpathcostarica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-wp-yellow transition-colors"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-1 text-center md:text-left">
              <p className="text-white/40 text-xs">
                {t('footer.rights')}
              </p>
              <p className="text-white/40 text-xs">
                {t('footer.photoCredits')}{' '}
                <a
                  href="https://www.infinitaselva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-wp-yellow transition-colors underline"
                >
                  infinitaselva.com
                </a>
              </p>
            </div>
            <div className="flex gap-6">
              <Link to="/terminos" className="text-white/40 text-xs hover:text-white transition-colors">
                {t('footer.terms')}
              </Link>
              <Link to="/cancelacion" className="text-white/40 text-xs hover:text-white transition-colors">
                {t('footer.cancellation')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
