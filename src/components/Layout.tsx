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
  MessageCircle,
  Globe
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

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
  }

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/experiencias', label: t('nav.experiences') },
    { path: '/inspiracion', label: t('nav.inspiration') },
    { path: '/galeria', label: t('nav.gallery') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/testimonios', label: t('nav.testimonials') },
    { path: '/nosotros', label: t('nav.about') },
    { path: '/contacto', label: t('nav.contact') },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-wp-cream">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-wp-forest/95 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}>
        <div className="px-4 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/images/logo-wildpath.png" 
              alt="Wild Path Costa Rica" 
              className="h-12 lg:h-14 w-auto"
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
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm"
            >
              <Globe size={16} />
              <span className="uppercase">{i18n.language}</span>
            </button>

            {/* CTA Button Desktop */}
            <Link 
              to="/contacto"
              className="hidden lg:block btn-primary text-xs py-3 px-5"
            >
              {t('nav.cta')}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="xl:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-wp-forest/98 backdrop-blur-sm py-6 px-6">
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
          <MessageCircle size={28} fill="white" />
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
            <p className="text-white/40 text-xs">
              {t('footer.rights')}
            </p>
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
