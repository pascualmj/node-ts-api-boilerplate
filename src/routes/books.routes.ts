import { AppRoute } from '../types'
import { PATHS_BOOKS } from '../constants'

import * as booksController from '../controllers/books.controller'

const booksRoutes: AppRoute[] = [
  {
    path: PATHS_BOOKS.book,
    handlers: [booksController.book],
    method: 'get',
  },
]

export default booksRoutes
