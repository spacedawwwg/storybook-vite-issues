const postcssImport = require('postcss-import');
const postcssARulesVariables = require('postcss-at-rules-variables');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');
const postcssPxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const plugins = [
  postcssImport,
  postcssARulesVariables,
  postcssMixins,
  postcssNested,
  postcssPxtorem({
    propWhiteList: [],
  }),
  postcssCustomMedia,
  autoprefixer,
  cssnano({
    preset: [
      'default',
      {
        colormin: false,
      },
    ],
  }),
];

module.exports = {
  plugins,
};
