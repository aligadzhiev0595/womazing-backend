import { Request, Response } from 'express'
import { Router } from 'express'

const router = Router()
const Products = require('../models/Products')

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await Products.find()
    res.json(products)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Products.findById(id)
    res.json(product)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
