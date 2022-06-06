import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/modules'
import { useStore } from '@/stores/app'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useStore()
  store.isAuthenticated = !store.isAuthenticated
  store.currentUser = {
    timeUpdated: new Date().getTime(),
    status: store.isAuthenticated
  }
  next()
})

export default router
