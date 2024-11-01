/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  // stories: ['./**/*.stories.(js|mdx)'],
  stories: ['./**/*stories.mdx', './**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // extra
    '@storybook/preset-scss'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
