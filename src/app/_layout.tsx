import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '@/i18n'; // Initialize i18n
import { AppProviders } from '@/providers/AppProviders';
import { useTheme } from '@/providers/ThemeProvider';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

function RootLayoutContent() {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark' || theme === 'midnight' || theme === 'nightBlue';

  return (
    <SafeAreaProvider>
      <StatusBar style={isDarkTheme ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#121212' : '#FFFFFF',
          },
          headerTintColor: theme === 'dark' ? '#FFFFFF' : '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: theme === 'dark' ? '#121212' : '#FFFFFF',
          },
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  return (
    <AppProviders>
      <RootLayoutContent />
    </AppProviders>
  );
}
