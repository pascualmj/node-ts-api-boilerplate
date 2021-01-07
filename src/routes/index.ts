import { AppRoute } from '../types'

import greetingRoutes from './greeting.routes'

export default (): AppRoute[] => [...greetingRoutes]
