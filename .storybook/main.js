const path = require('path');

module.exports = {
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  // TODO: understand why storyStoreV7 required (due to issues with storybook-builder-vite + @storybook/vue3 + @storybook/addon-essentials)
  // features: {
  //   storyStoreV7: true,
  // },
  framework: '@storybook/vue3',
  staticDirs: ['public'],
  stories: [
    // documentation stories
    '../docs/index.stories.mdx',
    // component stories
    '../packages/**/__stories__/*.docs.stories.mdx',
    '../packages/**/__stories__/*.stories.@(js|jsx|ts|tsx)',
  ],
  async viteFinal(config) {
    // dedupe required due to being a mononorepo
    // TODO: follow https://github.com/eirslett/storybook-builder-vite/issues/50
    config.resolve.dedupe = ['@storybook/client-api'];

    // quick aliases
    config.resolve.alias['#root'] = path.resolve(__dirname, '../');
    config.resolve.alias['#storybook'] = path.resolve(__dirname, '../.storybook');

    return config;
  },
};
