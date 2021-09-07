import React, { FC } from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

export const App: FC = hot(module)(() => (
  <HashRouter>
    <AppRoutes />
  </HashRouter>
))