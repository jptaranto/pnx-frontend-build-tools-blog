import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-config-prettier'
import drupal from 'eslint-config-drupal'
import { FlatCompat } from '@eslint/eslintrc'

// Eslint flat config compatibility util.
// This can be removed once plugins below support flat config (or Eslint 9).
// @see https://github.com/eslint/eslintrc#usage
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

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
    files: ['**/*.stories.{jsx,tsx}'],
    // Flat config support: In code review.
    // @see https://github.com/storybookjs/eslint-plugin-storybook/pull/156
    extends: [...compat.extends('plugin:storybook/recommended')],
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
