export default {
  path: '/',
  name: 'dashboard',
  meta: {
    breadcrumbs: false
  },
  component: () => import('@pages/Dashboard.vue')
}
