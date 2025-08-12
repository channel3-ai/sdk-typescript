module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'off',
    'no-unused-vars': 'off', // Use TypeScript version instead
  },
  env: {
    node: true,
    jest: true,
    es2020: true,
  },
  ignorePatterns: ['dist/', 'src/generated/', '*.js', '*.mjs'],
};
