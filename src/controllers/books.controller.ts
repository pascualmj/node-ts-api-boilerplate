import { AppController } from '../types'

export const book: AppController = (req, res) => {
  res.status(200).json({
    bookId: req.params.id,
  })
}
