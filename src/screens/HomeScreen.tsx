import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createStyleSheet, useStyles, UnistylesRuntime } from 'react-native-unistyles';
import { Link } from 'expo-router';
import { useThemeStore } from '../store/themeStore';

export const HomeScreen = () => {
  const { styles } = useStyles(stylesheet);

  // Get theme from store
  const { currentTheme, setTheme } = useThemeStore();

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Get current breakpoint for responsive display
  const breakpoint = UnistylesRuntime.breakpoint || 'xs';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unistyles Demo</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          This is a demo of react-native-unistyles with Expo Router. The current theme is:{' '}
          {currentTheme}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>

      <View style={styles.breakpointDemo}>
        <Text style={styles.breakpointText}>
          Current screen size:{' '}
          {breakpoint === 'xs'
            ? 'Extra Small'
            : breakpoint === 'sm'
              ? 'Small'
              : breakpoint === 'md'
                ? 'Medium'
                : breakpoint === 'lg'
                  ? 'Large'
                  : 'Extra Large'}
        </Text>
      </View>

      <Link href="/settings" asChild>
        <TouchableOpacity style={styles.navigationButton}>
          <Text style={styles.navigationButtonText}>Go to Settings</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 20,
  },
  card: {
    backgroundColor: theme.colors.tint,
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.colors.tint,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  breakpointDemo: {
    padding: 15,
    borderWidth: 1,
    borderColor: theme.colors.tint,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20,
  },
  breakpointText: {
    color: theme.colors.text,
    textAlign: 'center',
  },
  navigationButton: {
    backgroundColor: theme.colors.tint,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  navigationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
}));
