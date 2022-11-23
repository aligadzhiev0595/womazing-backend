import { Request, Response } from 'express'
import { Router } from 'express'

const router = Router()
const Product = require('../models/Product')

router.get('/', async (req: Request, res: Response) => {
  try {
    const product = await Product.find()
    res.json(product)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    res.json(product)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
