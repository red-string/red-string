module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'standard',
    'plugin:security/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'security'
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    // Prevent unused vars errors when variables are only used as TS types
    // see: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md#options
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: false
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false
      }
    }],
    camelcase: 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'security/detect-object-injection': 0,
    quotes: ['error', 'single']
  }
}
