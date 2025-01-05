// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // typescript: {
  //   typeCheck: true,
  // },
  css: ['~/assets/main.scss', '~/assets/css/main.css'],
  alias: {
    '@': '/<srcDir>',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/colors.scss" as *;',
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/image'],
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL,
    },
  },
});
