const cssModules = require('../config/cssModules')

module.exports = {
  stories: ['../atomic/{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)', '../tokens/Token/components/**/*.stories.js',  '../templates/component/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: cssModules(),
}

