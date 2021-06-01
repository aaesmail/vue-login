import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Welcome from '../views/Welcome.vue'
import NotFound from '../views/NotFound.vue'

import store from '../store'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
    meta: { requiresNoAuth: true, title: 'Login | Instabug' },
  },
  {
    path: '/welcome',
    component: Welcome,
    meta: { requiresAuth: true, title: 'Welcome | Instabug' },
  },
  {
    path: '/404',
    component: NotFound,
    meta: { title: 'User Feedback & Bug reporting' },
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

router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title

  if (pageTitle) document.title = pageTitle

  const authState = store.getters['auth/isAuth']

  if (to.meta.requiresAuth) return authState ? next() : next('/login')

  if (to.meta.requiresNoAuth) return authState ? next('/welcome') : next()

  return next()
})

export default router
