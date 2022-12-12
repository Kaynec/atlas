import { createApp } from 'vue'
import OpenLayersMap from 'vue3-openlayers'
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import 'vue3-openlayers/dist/vue3-openlayers.css'
import 'daisyui/dist/full.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router).use(MotionPlugin).use(OpenLayersMap)
app.mount('#app')
