module.exports = {
  root: false,
  env: {
    node: true,
    'cypress/globals': true
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', '@vue/prettier', 'plugin:cypress/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['cypress']
};
