import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import English from "./locales/en/translation"
import Russian from "./locales/russian/translation";
import Chinese from "./locales/chinese/translation";
import Korean from "./locales/korean/translation";
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            English: English,
            Russian: Russian,
            Chinese: Chinese,
            Korean: Korean,
        },
        fallbackLng: "English",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
