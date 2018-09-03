module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:duck/recommended',
    'airbnb',
    '@enkidevs/eslint-config-base',
    'prettier/react',
  ],
  plugins: ['prettier'],
  env: {
    browser: true,
  },
  rules: {
    'duck/meta-validation': [
      'error',
      [
        'analytics',
        'debounce',
        'feedbackClearDelay',
        'feedbackDelay',
        'feedbackDirectly',
        'feedbackHideDelay',
        'feedbackOnError',
        'feedbackOnSuccess',
        'optimist',
        'promise',
        'queueIfOffline',
        'redirectDirectly',
        'redirectOnError',
        'redirectOnSuccess',
      ],
    ],
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
  },
};
