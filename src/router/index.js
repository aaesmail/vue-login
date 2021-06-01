import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Welcome from '../views/Welcome.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/welcome',
    component: Welcome,
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
