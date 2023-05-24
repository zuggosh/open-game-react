import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './en/translation.json';


i18n
    .use(initReactI18next)
    .init({
    resources: {
        en: {
            translation: translationEN
        }
    },
    lng: "en",
    fallbackLng: "en"
});

export default i18n;
