import { create } from "zustand";
import { I18nManager } from "react-native";
import { StorageService } from "../services/storage";
import RNRestart from "react-native-restart";

export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

interface LanguageState {
  language: Language;
  direction: Direction;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  toggleDirection: () => void;
}

// Get the initial language from storage or default to English
const getInitialLanguage = (): Language => {
  const storedLang = StorageService.get<Language>("app_language");
  return storedLang || "en";
};

// Get the initial direction from storage or default based on language
const getInitialDirection = (lang: Language): Direction => {
  const storedDirection = StorageService.get<Direction>("app_direction");
  if (storedDirection) return storedDirection;
  return lang === "ar" ? "rtl" : "ltr";
};

// Initialize state
const initialLang = getInitialLanguage();
const initialDir = getInitialDirection(initialLang);

// Initialize system RTL if needed
if (initialDir === "rtl" && !I18nManager.isRTL) {
  I18nManager.forceRTL(true);
} else if (initialDir === "ltr" && I18nManager.isRTL) {
  I18nManager.forceRTL(false);
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: initialLang,
  direction: initialDir,
  isRTL: initialDir === "rtl",

  setLanguage: (lang: Language) => {
    const direction = lang === "ar" ? "rtl" : "ltr";
    const isRTL = direction === "rtl";

    // Update RTL setting in React Native
    if (isRTL !== I18nManager.isRTL) {
      I18nManager.allowRTL(isRTL);
      I18nManager.forceRTL(isRTL);
    }

    // Save to storage
    StorageService.set("app_language", lang);
    StorageService.set("app_direction", direction);

    // Update state
    set({ language: lang, direction, isRTL });

    // Restart the app to apply RTL changes throughout the app
    setTimeout(() => {
      RNRestart.restart();
    }, 500);
  },

  toggleDirection: () => {
    set((state) => {
      const newDirection = state.direction === "ltr" ? "rtl" : "ltr";
      const isRTL = newDirection === "rtl";

      // Update RTL setting in React Native
      if (isRTL !== I18nManager.isRTL) {
        I18nManager.allowRTL(isRTL);
        I18nManager.forceRTL(isRTL);
      }

      // Save to storage
      StorageService.set("app_direction", newDirection);

      // Restart the app to apply RTL changes
      setTimeout(() => {
        RNRestart.restart();
      }, 500);

      return { direction: newDirection, isRTL };
    });
  },
}));
