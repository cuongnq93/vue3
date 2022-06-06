export default {
  path: '/users',
  name: 'user',
  meta: {
    title: 'Quản lý thành viên',
    breadcrumbs: true
  },
  component: () => import('@pages/User.vue')
}
