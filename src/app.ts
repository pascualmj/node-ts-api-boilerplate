import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { AppError } from './types'

const app: Application = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// API Routes
app.get('/hi', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hi! Follow me on twitter @manupasc',
  })
})

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
