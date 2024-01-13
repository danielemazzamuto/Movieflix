// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [{ rel: "stylesheet", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'}]
    }
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    }
},
})
