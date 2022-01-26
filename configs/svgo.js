module.exports = {
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          inlineStyles: false,
          removeDoctype: false,
          removeStyleElement: true,
          removeElementsByAttr: true,
          removeAttrs: true,
        },
      },
    },
  ],
};
