module.exports = {
  extends: [
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
    'node/no-unsupported-features': [
      'error',
      {
        version: '8.10.0',
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
