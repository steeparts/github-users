import { AppRoute } from './types'
import { UserPage, UsersPage } from './pages'

export default function getAppRoutes(): AppRoute[] {
  return [
    {
      path: '/',
      component: UsersPage,
      exact: true,
    },
    {
      path: '/users/:username',
      component: UserPage,
    },
    {
      path: '/users',
      component: UsersPage,
    },
    {
      path: '*',
      redirectTo: '/404',
    }
  ]
}