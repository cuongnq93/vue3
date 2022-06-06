export default {
  path: '/auth',
  name: 'auth',
  component: () => import('@layouts/AuthLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'auth.login',
      component: () => import('@pages/auth/Login.vue')
    },
    {
      path: 'reset-password',
      name: 'auth.resetPassword',
      component: () => import('@pages/auth/ResetPassword.vue')
    }
  ]
}
