const NODE_VERSION = process.version.slice(1); // skip v in vX.Y.Z

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
        version: NODE_VERSION ? `>=${NODE_VERSION}` : '>=10.0.0',
        ignores: [],
      },
    ],
    'node/no-unsupported-features/es-builtins': [
      'error',
      {
        version: NODE_VERSION ? `>=${NODE_VERSION}` : '>=10.0.0',
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
