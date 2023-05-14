import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// TODO: This will include all components and directives regardless of whether or not you are using them
// For tree shaking see: https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.config.globalProperties.$axios=axios

app.use(router)
app.use(vuetify)

app.mount('#app')
