module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  ignorePatterns: ['dist', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort', 'jest'],
  rules: {
    // Core
    'import/extensions': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
    // Prettier
    'prettier/prettier': 'error',
    // Simple import
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // Typescript
    '@typescript-eslint/no-var-requires': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
