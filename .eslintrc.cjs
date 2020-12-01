module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['import', 'prettier'],
  extends: ['eslint:recommended'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
