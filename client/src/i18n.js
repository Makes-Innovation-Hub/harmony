import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./assets/translations/en.json";
import heTranslations from "./assets/translations/he.json";
import arTranslations from "./assets/translations/ar.json";

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("language");
  return savedLanguage || "en"; // Default to English if no language is saved
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    he: {
      translation: heTranslations,
    },
    ar: {
      translation: arTranslations,
    },
  },
  lng: getInitialLanguage(), // Use initial language from local storage
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
