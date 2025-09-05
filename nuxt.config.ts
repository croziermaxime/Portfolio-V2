// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  googleFonts: {
    families: {
      'Libertinus Serif Display': [400, 500, 600, 700],
      'Inter': [300, 400, 500, 600, 700]
    },
    display: 'swap'
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Maxime - Développeur Full Stack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio de Maxime - Développeur Full Stack spécialisé en développement web moderne' }
      ]
    }
  }
})
