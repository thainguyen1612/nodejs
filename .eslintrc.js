module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'import/prefer-default-export': 'off',
  },
};
