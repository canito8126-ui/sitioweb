import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './locales/es.json';
import en from './locales/en.json';
import { mergeExtraPages, homeExtra, reviewsExtra } from './extraPages';

function buildTranslation(
  base: typeof es,
  locale: 'en' | 'es'
) {
  const pages = mergeExtraPages(locale);
  const home = locale === 'en' ? homeExtra.en : homeExtra.es;
  const revExtra = locale === 'en' ? reviewsExtra.en : reviewsExtra.es;
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
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
