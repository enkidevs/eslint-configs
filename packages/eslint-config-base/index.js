module.exports = {
  env: {
    node: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:import/warnings',
    'plugin:import/errors',
  ],
  plugins: ['import', 'jest', 'prettier'],
  rules: {
    'class-methods-use-this': 'warn',
    curly: 'error',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'func-names': ['error', 'as-needed'],
    'import/prefer-default-export': 'off',
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
  },
};
