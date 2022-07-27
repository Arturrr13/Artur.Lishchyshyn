import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.scss'
import './assets/css/fonts.css'
import './assets/css/icomoon.css'
import './assets/css/burger.scss'
import './assets/css/responsive.scss'
import VueLazyLoad from 'vue3-lazyload'

createApp(App).use(router).use(VueLazyLoad).mount('#app')



