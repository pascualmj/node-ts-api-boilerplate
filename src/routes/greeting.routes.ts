import { AppRoute } from '../types'
import { PATHS_GREETING } from '../constants'

import * as greetingController from '../controllers/greeting.controller'

const greetingRoutes: AppRoute[] = [
  {
    path: PATHS_GREETING.hello,
    handlers: [greetingController.hello],
    method: 'get',
  },
]

export default greetingRoutes
