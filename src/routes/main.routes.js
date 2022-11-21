import{ Request, Response } from 'express'
import { Router } from 'express';

const router = Router()

router.get('/', (req, res) => {
  res.send('Its my home page server')
})

module.exports = router

