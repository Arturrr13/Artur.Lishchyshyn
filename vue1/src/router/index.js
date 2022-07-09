import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MyHome.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/MyAbout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
