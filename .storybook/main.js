module.exports = {
  stories: ['./**/*.stories.(js|mdx)'],
  presets: ['@storybook/preset-scss'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-docs',
  ]
};
