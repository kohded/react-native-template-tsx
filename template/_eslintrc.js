module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    '@react-native-community',
    // Installs and sets up: @typescript-eslint/eslint-plugin, import, jsx-a11y, react, react-hooks
    // https://github.com/iamturns/eslint-config-airbnb-typescript#user-content-i-wish-this-config-would-support-
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:eslint-comments/recommended',
    // Set up eslint-config-prettier: 'extends': ['prettier'].
    // Set up eslint-plugin-prettier: 'plugins': ['prettier'], rules: { 'prettier/prettier: 'error', 'arrow-body-style': 'off', 'prefer-arrow-callback' : 'off' }
    'plugin:prettier/recommended',
  ],
  // ignorePatterns: ["build", "coverage"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      'error',
      // Immer - https://github.com/immerjs/immer/issues/189#issuecomment-703083451
      { props: true, ignorePropertyModificationsForRegex: ['^draft'] },
    ],
  },
};
