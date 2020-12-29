import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { AppError } from './types'
import getRoutes, { addRoutesToRouter } from './routes'

const app: Application = express()
const router: express.Router = express.Router()

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// Routes
app.use(addRoutesToRouter({ router, routes: getRoutes() }))

// Error handling
app.use((req: Request, res: Response, next: NextFunction) => {
  const error: AppError = new Error('Not found')
  error.status = 404
  next(error)
})
app.use((err: AppError, req: Request, res: Response) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  })
})

export default app
