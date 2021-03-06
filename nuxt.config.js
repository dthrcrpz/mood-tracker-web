export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mood Tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Track your mood & get assistance' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap' },
    ],
    script: [
      { src: 'https://connect.facebook.net/en_US/sdk.js' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/globals.sass"',
        },
      },
    },
    optimizeDeps: {
      include: [
        'cookie'
      ]
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/mixins' },
    { src: '@/plugins/vee-validate' },
    { src: '@/plugins/v-click-outside', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-vite',
    '@nuxtjs/style-resources',
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    //https://auth.nuxtjs.org/
    '@nuxtjs/auth-next'
  ],

  // Style Resources
  styleResources: {
    sass: [
      '@/assets/globals.sass',
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: '@/static/icon.png',
      fileName: 'icon.png',
    },
    manifest: {
      name: 'Mood Tracker',
      lang: 'en',
      description: 'Track your mood & get assistance',
    },
    meta: {
      name: 'Mood Tracker',
      description: 'Track your mood & get assistance',
      theme_color: '#001220'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  },

  router: {
    middleware: ['auth']
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'token'
        },
        user: {
          property: 'user'
        },
        endpoints: {
          login: { url: `${process.env.API_URL}users/login`, method: 'post' },
          logout: { url: `${process.env.API_URL}users/logout`, method: 'post' },
          user: { url: `${process.env.API_URL}users/user`, method: 'get' }
        }
      },
    }
  },

  privateRuntimeConfig: {
    FB_APP_ID: process.env.FB_APP_ID
  },

  server: {
    port: process.env.PORT
  }
}
