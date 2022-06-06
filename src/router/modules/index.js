import partition from 'lodash/partition'

const modules = import.meta.globEager('@/router/modules/*.js')
const requireModules = Object.values(modules).map((module) => {
  return module.default
})

const [originRouters, children] = partition(requireModules, 'children')

const defaultRouters = {
  path: '/',
  component: () => import('@layouts/DefaultLayout.vue'),
  children
}
const routers = [defaultRouters]

routers.push(...originRouters)

export default routers
