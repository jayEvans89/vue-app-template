import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/modules/home/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/modules/about/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
