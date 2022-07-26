import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { EN } from "../Constants/Language/EN";
import { UA } from "../Constants/Language/UA";
const UKR_TRANSLATION = {
    welcome: "Вітаю!",
};
const ENG_TRANSLATION = {
    welcome: "Hello!",
};
type langTypeName = string | null;
const defaultLang: langTypeName = localStorage.getItem("Lang") || null;
export default i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: EN,
        },
        ua: {
            translation: UA,
        },
    },

    lng: defaultLang || "en",
    fallbackLng: defaultLang || "en",
    // debug: true,
    interpolation: { escapeValue: false },
});
