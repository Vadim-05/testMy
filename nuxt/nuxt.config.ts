// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  plugins: [
    '~/plugins/vuetify',
  ],

  css: ['vuetify/lib/styles/main.sass','~/scss/colors.scss'],
  serverMiddleware: ['~/server/api/customData'],

  build: {
    transpile: ['vuetify']
  },
  app: {
    baseURL: '/testMy/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image"]
}) 