import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/all.scss'

const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)

app.component('vueLoading', Loading)

app.mount('#app')
