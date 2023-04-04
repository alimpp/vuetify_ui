import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/scss/main.scss'

loadFonts()

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
