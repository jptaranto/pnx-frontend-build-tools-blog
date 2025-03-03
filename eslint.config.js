import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-config-prettier'
import drupal from 'eslint-config-drupal'

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...drupal.globals,
        dataLayer: true,
        google: true,
        once: true,
      },
    },
  },
  {
    rules: {
      'no-console': 'error',
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      'consistent-return': 'warn',
      'no-unused-vars': 'off',
    },
  },
  {
    ignores: [
      'node_modules',
      'vendor',
      'bin',
      'web/core',
      'web/sites',
      'web/modules/contrib',
      'web/themes/contrib',
      'web/profiles/contrib',
      'web/libraries',
      'web/storybook',
    ],
  },
]
