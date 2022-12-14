module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'prettier',
    'preact',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unicorn'],
  rules: {
    'unicorn/prefer-module': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'import/prefer-default-export': 'off',
    'unicorn/no-array-reduce': 'off',
    'linebreak-style': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'const', next: 'function' },
      { blankLine: 'always', prev: 'const', next: 'return' },
      { blankLine: 'always', prev: 'const', next: 'if' },
      { blankLine: 'always', prev: 'const', next: 'try' },
      { blankLine: 'always', prev: 'const', next: 'expression' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
