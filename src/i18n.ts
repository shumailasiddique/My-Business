import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your locale files
import enTranslation from './locales/en.json';
import urTranslation from './locales/ur.json';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ur: {
        translation: urTranslation
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if something goes wrong
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
