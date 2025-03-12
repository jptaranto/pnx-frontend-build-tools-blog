/** @type {import("stylelint").Config} */
const config = {
  extends: ['stylelint-config-standard'],
  rules: {
    'custom-property-empty-line-before': null,
    'no-descending-specificity': null,
    'import-notation': 'string',
    'selector-class-pattern': [
      '^([a-z])([a-z0-9]+)(-[a-z0-9]+)?(((--)?(__)?)([a-z0-9]+)(-[a-z0-9]+)?)?$',
      {
        message:
          'Expected class selector to be BEM selector matching either .block__element or .block--modifier',
      },
    ],
    'selector-nested-pattern': '^&',
  },
  ignoreFiles: [
    'node_modules',
    'vendor',
    'bin',
    '/app/sites',
    '/app/core',
    '/app/modules/contrib',
    '/app/themes/contrib',
    '/app/profiles/contrib',
    '/app/libraries',
    '/app/storybook',
  ],
}

export default config
