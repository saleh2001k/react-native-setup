import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { ThemeProvider } from '@/providers/ThemeProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ThemeProvider>
  );
}
