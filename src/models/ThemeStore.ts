import { Instance, SnapshotIn, types } from "mobx-state-tree"
import { load, save } from "@/utils/storage"

const THEME_STORAGE_KEY = "SELECTED_THEME"

/**
 * Theme store to manage theme state
 */
export const ThemeStoreModel = types
  .model("ThemeStore")
  .props({
    selectedTheme: types.optional(
      types.union(
        types.literal("light"),
        types.literal("dark"),
        types.literal("sepia"),
        types.literal("nightBlue"),
        types.undefined,
      ),
      undefined,
    ),
  })
  .actions((self) => ({
    setSelectedTheme(theme: typeof self.selectedTheme) {
      self.selectedTheme = theme
      save(THEME_STORAGE_KEY, theme)
    },
  }))
  .actions((self) => ({
    loadPersistedTheme() {
      const theme = load<typeof self.selectedTheme>(THEME_STORAGE_KEY)
      if (theme) {
        self.setSelectedTheme(theme)
      }
    },
  }))

export interface ThemeStore extends Instance<typeof ThemeStoreModel> {}
export interface ThemeStoreSnapshot extends SnapshotIn<typeof ThemeStoreModel> {}
