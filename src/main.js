import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'

import welcomePage from './pages/welcome/welcome-page.vue'
import aboutPage from './pages/about-page.vue'

const routes = [
  { path: '/', component: welcomePage },
  { path: '/about', component: aboutPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
