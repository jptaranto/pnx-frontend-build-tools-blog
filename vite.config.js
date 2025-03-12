import { defineConfig } from 'vite'
import { resolve } from 'path'
import browserslist from 'browserslist-to-esbuild'
import postcssPresetEnv from 'postcss-preset-env'
import twig from 'vite-plugin-twig-drupal'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { globSync } from 'tinyglobby'

const entry = globSync(['**/*.entry.{js,jsx}', '**/*.css'], {
  ignore: [
    '**/_*.css',
    'node_modules',
    'vendor',
    'web/sites',
    'web/core',
    'web/libraries',
    '**/contrib',
    'web/storybook',
  ],
})

export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      entry,
      formats: ['es'],
    },
    target: browserslist(),
    cssCodeSplit: true,
    outDir: resolve(import.meta.dirname, './app/libraries/components'),
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv()],
      map: mode === 'development',
    },
  },
  resolve: {
    alias: {
      '@components': resolve(import.meta.dirname, './components'),
    },
  },
  plugins: [
    twig({
      namespaces: {
        '@components': resolve(import.meta.dirname, './components'),
      },
    }),
    react(),
    vue(),
  ],
}))
