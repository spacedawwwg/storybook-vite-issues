const defu = require('defu');
const eslintVueConfig = require('../../../configs/eslint.vue');

module.exports = defu(
  {
    root: false,
  },
  eslintVueConfig
);
