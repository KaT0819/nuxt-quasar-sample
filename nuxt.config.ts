import { defineNuxtConfig } from 'nuxt/config';
import { quasar } from '@quasar/vite-plugin';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  srcDir: 'src/',
  css: [
    '@quasar/extras/material-icons/material-icons.css',
    '@quasar/extras/material-icons-outlined/material-icons-outlined.css',
    '~/css/app.sass',
  ],
  build: {
    transpile: ['quasar']
  },
  vite: {
    plugins: [
      quasar({
        sassVariables: 'src/css/quasar.variables.sass'
      })
    ],
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/css/quasar.variables.sass"\n'
        }
      }
    }
  }
})
