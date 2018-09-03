module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'prettier',
  ],
  plugins: [
    'import',
    'jest',
    'no-not-accumulator-reassign',
    'node',
    'prettier',
    'security',
  ],
  rules: {
    'class-methods-use-this': 'warn',
    curly: 'error',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-await-in-loop': 'warn',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'no-param-reassign': 'warn',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
      },
    ],
    'prettier/prettier': 'error',
    radix: ['error', 'as-needed'],
    'no-not-accumulator-reassign/no-not-accumulator-reassign': [
      'error',
      ['reduce'],
      {
        props: true,
      },
    ],
  },
  'security/detect-object-injection': false,
};
