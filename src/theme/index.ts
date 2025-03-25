import type { StyleProp } from "react-native"
import { colors as colorsLight } from "./colors"
import { colors as colorsDark } from "./colorsDark"
import { spacing as spacingLight } from "./spacing"
import { spacing as spacingDark } from "./spacingDark"
import { timing } from "./timing"
import { typography } from "./typography"
import { sepiaTheme, nightBlueTheme } from "./additionalThemes"

// This supports multiple themes
export type ThemeContexts = "light" | "dark" | "sepia" | "nightBlue" | undefined

// The overall Theme object should contain all of the data you need to style your app.
export interface Theme {
  colors: {
    palette: Record<string, string>
    transparent: string
    text: string
    textDim: string
    background: string
    border: string
    tint: string
    tintInactive: string
    separator: string
    error: string
    errorBackground: string
  }
  spacing: typeof spacingLight
  typography: typeof typography
  timing: typeof timing
  isDark: boolean
}

// Here we define our themes.
export const lightTheme: Theme = {
  colors: colorsLight,
  spacing: spacingLight,
  typography,
  timing,
  isDark: false,
}

export const darkTheme: Theme = {
  colors: colorsDark,
  spacing: spacingDark,
  typography,
  timing,
  isDark: true,
}

export const themes: Record<NonNullable<ThemeContexts>, Theme> = {
  light: lightTheme,
  dark: darkTheme,
  sepia: sepiaTheme,
  nightBlue: nightBlueTheme,
}

export type ThemedStyle<T> = (theme: Theme) => T
export type ThemedStyleArray<T> = (
  | ThemedStyle<T>
  | StyleProp<T>
  | (StyleProp<T> | ThemedStyle<T>)[]
)[]

// Export the theme objects with backwards compatibility for the old theme structure.
export { colorsLight as colors }
export { colorsDark }
export { spacingLight as spacing }

export * from "./styles"
export * from "./typography"
export * from "./timing"
