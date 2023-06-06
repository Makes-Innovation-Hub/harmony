import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./assets/translations/en.json";
import heTranslations from "./assets/translations/he.json";
import arTranslations from "./assets/translations/ar.json";

i18n.use(initReactI18next) // Initialize react-i18next
    .init({
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
        fallbackLng: "en", // Default language
        interpolation: {
            escapeValue: false, // React already escapes the output
        },
    });

export default i18n;
