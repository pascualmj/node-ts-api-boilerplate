import { AppRoute } from '../types'

import greetingRoutes from './greeting.routes'
import booksRoutes from './books.routes'

export default (): AppRoute[] => [...greetingRoutes, ...booksRoutes]
