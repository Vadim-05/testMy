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

  devtools: { enabled: true },
  modules: ["@nuxt/image"]
})