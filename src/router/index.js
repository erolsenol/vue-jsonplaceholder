import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.state.login) {
      return next()
    }
    return next({ name: 'authLogin' })
  } else if (!to.meta.requiresAuth && store.state.login) {
    return next({ name: 'home' })
  }
  return next()
})

export default router
