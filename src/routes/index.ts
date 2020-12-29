import { Router } from 'express'

import { AppRoute } from '../types'

import greetingRoutes from './greeting.routes'
import booksRoutes from './books.routes'

interface AddRoutesToRouterOptions {
  routes: AppRoute[]
  router: Router
}

export const addRoutesToRouter: (opts: AddRoutesToRouterOptions) => Router = ({
  router,
  routes,
}) => {
  routes.forEach((r: AppRoute) => {
    router[r.method](r.path, ...r.handlers)
  })
  return router
}

export default (): AppRoute[] => [...greetingRoutes, ...booksRoutes]
