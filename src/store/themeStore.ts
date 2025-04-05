import { create } from 'zustand';
import { ThemeName } from '@/theme/colors';
import { StorageService } from '@/services/storage';

interface ThemeState {
  currentTheme: ThemeName;
  setTheme: (newTheme: ThemeName) => void;
}

// Get the initial theme from storage or default to light
const getInitialTheme = (): ThemeName => {
  const storedTheme = StorageService.get<ThemeName>('app_theme');
  return storedTheme || 'light';
};

// Initialize with stored theme
const initialTheme = getInitialTheme();

export const useThemeStore = create<ThemeState>(set => ({
  currentTheme: initialTheme,

  setTheme: (newTheme: ThemeName) => {
    // Only update state, ThemeProvider handles the rest
    set({ currentTheme: newTheme });
  },
}));
