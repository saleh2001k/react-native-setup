import { UnistylesRegistry } from 'react-native-unistyles';
import { Theme } from '@/theme';
import {
  ThemeName,
  lightTheme,
  darkTheme,
  sepiaTheme,
  nightBlueTheme,
  forestTheme,
  oceanTheme,
  midnightTheme,
  desertTheme,
} from '@/theme/colors';
import { StorageService } from '@/services/storage';

type AppBreakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type AppThemes = {
  light: Theme;
  dark: Theme;
  sepia: Theme;
  nightBlue: Theme;
  forest: Theme;
  ocean: Theme;
  midnight: Theme;
  desert: Theme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

// Get initial theme from storage or default to light
const getInitialTheme = (): ThemeName => {
  const storedTheme = StorageService.get<ThemeName>('app_theme');
  return storedTheme || 'light';
};

// Register themes and breakpoints
UnistylesRegistry.addBreakpoints({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
});

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
  sepia: sepiaTheme,
  nightBlue: nightBlueTheme,
  forest: forestTheme,
  ocean: oceanTheme,
  midnight: midnightTheme,
  desert: desertTheme,
});

// Always get the fresh theme from storage on startup
// This ensures perfect sync between app state and theme
const initialTheme = getInitialTheme();

// Set the initial theme from storage or use default
UnistylesRegistry.addConfig({
  initialTheme,
  adaptiveThemes: false, // Turn off adaptive themes to prevent auto switching
});
