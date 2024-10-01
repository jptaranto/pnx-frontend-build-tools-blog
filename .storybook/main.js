/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../components/src'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
}
export default config
