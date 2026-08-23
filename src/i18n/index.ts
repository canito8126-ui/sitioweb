import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './locales/es.json';
import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import { mergeExtraPages, homeExtra, reviewsExtra } from './extraPages';

function buildTranslation(
  base: typeof es,
  locale: 'en' | 'es' | 'de' | 'fr'
) {
  const pages = mergeExtraPages(locale);
  const home = homeExtra[locale] ?? homeExtra.en;
  const revExtra = reviewsExtra[locale] ?? reviewsExtra.en;
  return {
    ...base,
    home,
    pages,
    reviews: { ...base.reviews, ...revExtra },
  };
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: buildTranslation(es, 'es') },
      en: { translation: buildTranslation(en, 'en') },
      de: { translation: buildTranslation(de, 'de') },
      fr: { translation: buildTranslation(fr, 'fr') },
    },
    // Prefer English as the fallback for new languages
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
