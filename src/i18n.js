import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locals/en/translationEN.json'
import translationPL from './locals/pl/translationPL.json'

const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'pl'],
    resources,
    fallbackLng: 'en',
    detection: {
      order: [ 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    
    react: { useSuspense: false },
  });


export default i18n;