module.exports = {
  extends: [
    'airbnb-base',
    '@enkidevs/eslint-config-base',
    'plugin:node/recommended',
    'plugin:security/recommended',
  ],
  plugins: ['node', 'security'],
  env: {
    node: true,
  },
  rules: {
    'node/no-missing-require': 'warn',
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=8.10.0',
        ignores: [],
      },
    ],
    'node/no-unsupported-features/es-builtins': [
      'error',
      {
        version: '>=8.10.0',
        ignores: [],
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id'],
      },
    ],
    'security/detect-object-injection': 'off',
  },
};
