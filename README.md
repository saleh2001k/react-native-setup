# Unistyles Demo App

A beautiful React Native application demonstrating a dynamic multi-theme system using `react-native-unistyles`.

## Features

- **Dynamic Theme System**: 8 beautiful themes to choose from
- **Type-Safe**: Fully typed theme definitions
- **Extensible**: Easy to add new themes

## Available Themes

| Theme Name | Description                               |
| ---------- | ----------------------------------------- |
| light      | Classic light theme with blue accents     |
| dark       | Dark theme with inverted colors           |
| sepia      | Warm, paper-like theme with amber accents |
| nightBlue  | Dark blue theme with bright accents       |
| forest     | Natural green theme with earth tones      |
| ocean      | Calming blue theme with teal accents      |
| midnight   | Dark theme with purple accents            |
| desert     | Warm, sandy theme with orange accents     |

## Theme Structure

Each theme includes:

- **Color Palette**: Comprehensive color palette with neutral, primary, secondary, accent, and utility colors
- **Typography**: Font families, sizes, and line heights
- **Spacing**: Consistent spacing values
- **Timing**: Animation timing presets

## Usage

```jsx
import { useStyles } from "react-native-unistyles";

// In your component:
const { styles, theme } = useStyles(stylesheet);

// Access theme properties:
const backgroundColor = theme.colors.background;
const primaryColor = theme.colors.tint;
const largeSpacing = theme.spacing.lg;

// Create stylesheets:
const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  text: {
    color: theme.colors.text,
    fontSize: theme.typography.size.md,
  },
}));
```

## Changing Themes

```jsx
import { UnistylesRuntime } from "react-native-unistyles";

// Set a specific theme
UnistylesRuntime.setTheme("ocean");

// Get current theme name
const currentTheme = UnistylesRuntime.themeName;
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone this repository
2. Install dependencies:

```bash
cd unistyles-demo
npm install
```

### Running the app

```bash
# Start the app
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## How It Works

### Unistyles Integration

- `src/unistyles.ts` - Configuration for Unistyles including themes and breakpoints
- `src/screens/HomeScreen.tsx` - Example component using Unistyles for styling
- Theme switching using the UnistylesRuntime API
- Responsive design based on screen size

### Expo Router Integration

- `app/_layout.tsx` - Root layout with Stack navigator
- `app/index.tsx` - Main entry point redirecting to tabs
- `app/settings.tsx` - Settings page accessible from the home screen
- `app/(tabs)/_layout.tsx` - Tab navigation layout
- `app/(tabs)/home.tsx` - Home tab
- `app/(tabs)/profile.tsx` - Profile tab
- `app/(tabs)/theme.tsx` - Theme settings tab

## Navigation Structure

```
app/
├── _layout.tsx (Stack navigation)
├── index.tsx (Home screen)
├── settings.tsx (Settings screen)
└── (tabs)/
    ├── _layout.tsx (Tab navigation)
    ├── home.tsx (Home tab)
    ├── profile.tsx (Profile tab)
    └── theme.tsx (Theme tab)
```

## Learn More

- [Unistyles documentation](https://www.unistyl.es)
- [Expo Router documentation](https://docs.expo.dev/router/introduction/)
- [Expo Router with Unistyles](https://www.unistyl.es/v3/guides/expo-router)
