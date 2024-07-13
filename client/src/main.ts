import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

// TODO: This will include all components and directives regardless of whether or not you are using them
// For tree shaking see: https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
})

const app = createApp(App)
app.use(router)
app.use(vuetify)

app.mount('#app')
