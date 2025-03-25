import { spacing } from "./spacing"
import { timing } from "./timing"
import { typography } from "./typography"
import type { Theme } from "./index"

// Sepia theme palette
const sepiaPalette = {
  neutral100: "#FFF7E6" as const,
  neutral200: "#F4E8D1" as const,
  neutral300: "#E6D5B8" as const,
  neutral400: "#C4B59B" as const,
  neutral500: "#A69780" as const,
  neutral600: "#847661" as const,
  neutral700: "#635744" as const,
  neutral800: "#423A2F" as const,
  neutral900: "#211D17" as const,

  primary100: "#FFE0B2" as const,
  primary200: "#FFCC80" as const,
  primary300: "#FFB74D" as const,
  primary400: "#FFA726" as const,
  primary500: "#FF9800" as const,
  primary600: "#FB8C00" as const,

  secondary100: "#D7CCC8" as const,
  secondary200: "#BCAAA4" as const,
  secondary300: "#A1887F" as const,
  secondary400: "#8D6E63" as const,
  secondary500: "#795548" as const,

  accent100: "#FFECB3" as const,
  accent200: "#FFE082" as const,
  accent300: "#FFD54F" as const,
  accent400: "#FFCA28" as const,
  accent500: "#FFC107" as const,

  angry100: "#F2D6CD" as const,
  angry500: "#C03403" as const,

  overlay20: "rgba(66, 58, 47, 0.2)" as const,
  overlay50: "rgba(66, 58, 47, 0.5)" as const,
}

// Night Blue theme palette
const nightBluePalette = {
  neutral100: "#121417" as const, // Darkest
  neutral200: "#1F2933" as const,
  neutral300: "#52606D" as const,
  neutral400: "#616E7C" as const,
  neutral500: "#7B8794" as const,
  neutral600: "#9AA5B1" as const,
  neutral700: "#CBD2D9" as const,
  neutral800: "#E4E7EB" as const,
  neutral900: "#F5F7FA" as const, // Lightest

  primary100: "#1E88E5" as const,
  primary200: "#42A5F5" as const,
  primary300: "#64B5F6" as const,
  primary400: "#90CAF9" as const,
  primary500: "#BBDEFB" as const,
  primary600: "#E3F2FD" as const,

  secondary100: "#3F51B5" as const,
  secondary200: "#7986CB" as const,
  secondary300: "#9FA8DA" as const,
  secondary400: "#C5CAE9" as const,
  secondary500: "#E8EAF6" as const,

  accent100: "#29B6F6" as const,
  accent200: "#4FC3F7" as const,
  accent300: "#81D4FA" as const,
  accent400: "#B3E5FC" as const,
  accent500: "#E1F5FE" as const,

  angry100: "#FFEBEE" as const,
  angry500: "#F44336" as const,

  overlay20: "rgba(31, 41, 51, 0.2)" as const,
  overlay50: "rgba(31, 41, 51, 0.5)" as const,
}

export const sepiaTheme: Theme = {
  colors: {
    palette: sepiaPalette,
    transparent: "rgba(0, 0, 0, 0)",
    text: sepiaPalette.neutral800,
    textDim: sepiaPalette.neutral600,
    background: sepiaPalette.neutral200,
    border: sepiaPalette.neutral400,
    tint: sepiaPalette.primary500,
    tintInactive: sepiaPalette.neutral300,
    separator: sepiaPalette.neutral300,
    error: sepiaPalette.angry500,
    errorBackground: sepiaPalette.angry100,
  },
  spacing,
  typography,
  timing,
  isDark: false,
}

export const nightBlueTheme: Theme = {
  colors: {
    palette: nightBluePalette,
    transparent: "rgba(0, 0, 0, 0)",
    text: nightBluePalette.neutral900,
    textDim: nightBluePalette.neutral700,
    background: nightBluePalette.neutral200,
    border: nightBluePalette.neutral400,
    tint: nightBluePalette.primary200,
    tintInactive: nightBluePalette.neutral300,
    separator: nightBluePalette.neutral300,
    error: nightBluePalette.angry500,
    errorBackground: nightBluePalette.angry100,
  },
  spacing,
  typography,
  timing,
  isDark: true,
}
