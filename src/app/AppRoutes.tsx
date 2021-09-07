import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import getAppRoutes from '@userstory/routes'
import { AppRoute } from '@userstory/types'

const AppRoutes: FC = () => (
  <Switch>
    {getAppRoutes().map((route: AppRoute) => {
      const { path, exact, redirectTo, component: Component } = route

      return (
        <Route path={path} exact={exact} key={path}>
          {Component && <Component />}
          {redirectTo && <Redirect to={redirectTo} />}
        </Route>
      )
    })}
  </Switch>
)

export default AppRoutes