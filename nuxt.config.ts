// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/webflow.css',
    '~/assets/css/mdlr-webflow.css',
  ],
});
