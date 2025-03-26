import { types } from "mobx-state-tree"
import { load, save } from "@/utils/storage"

const LANGUAGE_STORAGE_KEY = "SELECTED_LANGUAGE"

/**
 * Language store to manage language state
 */
export const LanguageStoreModel = types
  .model("LanguageStore")
  .props({
    selectedLanguage: types.optional(
      types.union(
        types.literal("en"),
        types.literal("ar"),
        types.literal("es"),
        types.literal("fr"),
        types.undefined,
      ),
      undefined,
    ),
  })
  .actions((self) => ({
    setSelectedLanguage(language: typeof self.selectedLanguage) {
      self.selectedLanguage = language
      save(LANGUAGE_STORAGE_KEY, language)
    },
  }))
  .actions((self) => ({
    loadPersistedLanguage() {
      const language = load<typeof self.selectedLanguage>(LANGUAGE_STORAGE_KEY)
      if (language) {
        self.setSelectedLanguage(language)
      }
    },
  }))
