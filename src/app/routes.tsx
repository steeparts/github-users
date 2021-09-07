import { HomePage } from '@userstory/pages/Home'
import { AppRoute } from '@userstory/types'

export default function getAppRoutes(): AppRoute[] {
  return [
    {
      path: '/',
      component: HomePage,
      exact: true,
    },
    {
      path: '*',
      redirectTo: '/404',
    }
  ]
}