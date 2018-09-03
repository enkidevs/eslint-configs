module.exports = {
  parser: 'babel-eslint',
  extends: [
    '@enkidevs/eslint-config-base',
    'plugin:duck/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
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
    'prefer-destructuring': false,
    'react/destructuring-assignment': false,
    'react/forbid-prop-types': false,
  },
};
