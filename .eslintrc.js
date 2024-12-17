module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint:recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
      plugins: ['@typescript-eslint'],
    },
  ],
  ignorePatterns: ['lib/**', 'ios/**', 'android/**', 'node_modules/**'],
  rules: {
    'linebreak-style': ['error', 'unix'],
  },
};
