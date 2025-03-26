const palette = {
  neutral900: "#FFFFFF",
  neutral800: "#E6E6E6",
  neutral700: "#CCCCCC",
  neutral600: "#999999",
  neutral500: "#666666",
  neutral400: "#4D4D4D",
  neutral300: "#333333",
  neutral200: "#1A1A1A",
  neutral100: "#000000",

  primary600: "#7C4DFF",
  primary500: "#651FFF",
  primary400: "#5C1AE6",
  primary300: "#4A14B3",
  primary200: "#380F80",
  primary100: "#260A4D",

  secondary500: "#00BCD4",
  secondary400: "#00ACC1",
  secondary300: "#0097A7",
  secondary200: "#00838F",
  secondary100: "#006064",

  accent500: "#FF4081",
  accent400: "#F50057",
  accent300: "#C51162",
  accent200: "#9C27B0",
  accent100: "#7B1FA2",

  angry100: "#FF8A80",
  angry500: "#D50000",

  overlay20: "rgba(0, 0, 0, 0.2)",
  overlay50: "rgba(0, 0, 0, 0.5)",
} as const

export const colors = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  text: palette.neutral800,
  textDim: palette.neutral600,
  background: palette.neutral200,
  border: palette.neutral400,
  tint: palette.primary500,
  tintInactive: palette.neutral300,
  separator: palette.neutral300,
  error: palette.angry500,
  errorBackground: palette.angry100,
} as const
