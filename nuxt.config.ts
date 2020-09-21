import { Configuration } from '@nuxt/types'
// import pkg from ('./package')

const nuxtConfig: Configuration = {
  mode: 'spa',
  server: {
    port: 8000
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: { lang: 'ja' },
    title: 'anime app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'desc' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'anime app' },
      { hid: 'og:title', property: 'og:title', content: 'anime app' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-fontawesome'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTwitter', 'faGithub']
      }
    ]
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api'],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  generate: {
    // choose to suit your project
    interval: 2000
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default nuxtConfig
