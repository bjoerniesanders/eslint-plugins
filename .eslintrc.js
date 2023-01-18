module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [],
  rules: {},
  ignorePatterns: ['.eslintrc.js', 'jest.config.js', 'prettier.config.js'],
}
