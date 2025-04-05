import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";
import { useLanguageStore, Language } from "../store/languageStore";

// Import translations
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

// Get the best language match from device settings
const getDeviceLanguage = (): Language => {
  const deviceLanguages = RNLocalize.getLocales().map(
    (locale) => locale.languageCode
  );
  const supportedLanguages = Object.keys(resources);

  // Find the first supported language from device preferences
  const bestLanguage = deviceLanguages.find((lang) =>
    supportedLanguages.includes(lang)
  );

  // Default to English if no match
  return (bestLanguage as Language) || "en";
};

// Get language from store or device
const getLanguage = (): Language => {
  const { language } = useLanguageStore.getState();
  return language || getDeviceLanguage();
};

// Initialize i18next
i18next.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources,
  lng: getLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

// Add language change listener
useLanguageStore.subscribe((state) => {
  if (i18next.language !== state.language) {
    i18next.changeLanguage(state.language);
  }
});

export default i18next;
