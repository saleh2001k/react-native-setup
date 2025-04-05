// Import custom rules
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', 'react-native', '@typescript-eslint'],
  rules: {
    // Prevent using 'any' type
    '@typescript-eslint/no-explicit-any': 'error',

    // Prevent console statements
    'no-console': 'error',

    // Enforce React rules
    'react/prop-types': 'off', // Not needed with TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed with modern React
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Enforce React Native rules
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // Ignore certain files and directories
  ignorePatterns: [
    'node_modules/',
    'babel.config.js',
    'metro.config.js',
    '*.config.js',
    'android/',
    'ios/',
    'build/',
    'dist/',
  ],
};
