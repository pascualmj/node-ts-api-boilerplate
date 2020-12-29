import { Request, Response, NextFunction } from 'express'

export type AppController = (req: Request, res: Response, next: NextFunction) => void
