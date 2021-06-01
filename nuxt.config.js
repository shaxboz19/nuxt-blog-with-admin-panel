const pkg = require('./package')


module.exports = {
  mode: 'universal',

  
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  
  loading: { color: 'blue' },

  
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/style.css'
  ],

  
  plugins: [
    '@/plugins/globals'
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  
  axios: {
    
  },

  
  build: {
    transpile: [/^element-ui/],

    extend(config, ctx) {
      
    }
  }
}
