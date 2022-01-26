const defu = require('defu');
const eslintBase = require('./eslint.base');

module.exports = defu(
  {
    env: {
      'vue/setup-compiler-macros': true,
    },
    extends: ['plugin:vue/vue3-recommended', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
    rules: {
      'vue/require-default-prop': 'off',
      'vue/script-setup-uses-vars': 'error',
      'vue/component-tags-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
    },
  },
  eslintBase
);
