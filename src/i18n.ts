import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Your translations for different languages
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      description: "This is a description in English."
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      description: "Ceci est une description en français."
    }
  }
};

i18n
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,           // Your translation resources
    fallbackLng: 'en',   // Fallback language if detection fails
    interpolation: {
      escapeValue: false, // React already escapes values, so this should be false
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'], // Caches language in these storages
    }
  });

export default i18n;
