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
    'plugin:promise/recommended'
  ],
  plugins: ['import', 'jest', 'prettier', 'promise'],
  rules: {
    'class-methods-use-this': 'warn',
    'max-params': ['error', 3],
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
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prettier/prettier': 'error',
    radix: ['error', 'as-needed'],
  },
};
