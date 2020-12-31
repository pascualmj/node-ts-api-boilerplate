import { AppController } from '../types'

export const sayHi: AppController = (req, res) => {
  res.status(200).json({
    message: 'Hi! Follow me on twitter @manupasc',
  })
}

export const sayGoodbye: AppController = (req, res) => {
  res.status(200).json({
    message: 'Bye! Thanks for passing by.',
  })
}
