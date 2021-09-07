import { ComponentType } from 'react'

export type AppRoute = {
  path: string
  component?: ComponentType<any>
  exact?: boolean
  redirectTo?: string
}