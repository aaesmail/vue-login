module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['prettier', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
  },
  plugins: ['plugin:vue/vue3-essential', 'prettier'],
}
