module.exports = {
  extends: ['@enkidevs/eslint-config-base'],
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
  },
};
