import { spacing } from './spacing';
import { timing } from './timing';
import { typography } from './typography';

export interface Theme {
  colors: {
    palette: any;
    transparent: string;
    text: string;
    textDim: string;
    background: string;
    border: string;
    tint: string;
    tintInactive: string;
    separator: string;
    error: string;
    errorBackground: string;
  };
  spacing: typeof spacing;
  typography: typeof typography;
  timing: typeof timing;
  isDark: boolean;
}

export * from './colors';
export * from './spacing';
export * from './timing';
export * from './typography';
