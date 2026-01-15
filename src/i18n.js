import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr }
    },
    fallbackLng: 'de', // Germany is main market
    supportedLngs: ['en', 'de', 'fr'],
    
    detection: {
      order: ['path', 'querystring', 'navigator', 'htmlTag'],
      lookupFromPathIndex: 0,
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
