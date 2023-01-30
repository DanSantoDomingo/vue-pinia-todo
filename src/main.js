import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


import './assets/main.css'

const store = createPinia()

createApp(App).use(store).mount('#app')
