import { Request, Response } from 'express'

export const MainController = (req: Request, res: Response) => {
  res.send('Its my home page server')
}
