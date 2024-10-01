import '../components/src/components.css'

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    a11y: {
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa'],
        },
        resultTypes: ['violations'],
      },
    },
  },
}

export default preview
