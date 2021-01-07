import { AppController } from '../types'

export const hello: AppController = (req, res) => {
  res.status(200).json({
    message: 'Hello from greeting resource!',
  })
}
