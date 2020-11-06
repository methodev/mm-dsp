module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/base'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    camelcase: 0,
    'vue/no-v-html': 'off',
    'vue/valid-v-on': [
      'error',
      {
        modifiers: ['propagate']
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'never',
        math: 'never'
      }
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  globals: {
    chrome: true
  },
  ignorePatterns: ['**/*spec.js']
};
