const cssModules = require('../config/cssModules')

module.exports = {
  stories: ['../atomic/{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: cssModules(),
}
