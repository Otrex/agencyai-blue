// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      baseURL: process.env.SERVER_URL,
    },
  },
})
