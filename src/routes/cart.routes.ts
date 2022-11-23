import { Request, Response } from 'express'
import { Router } from 'express'

const router = Router()
const CartProduct = require('../models/CartProduct')


router.get('/',  async (req: Request, res: Response) => {
  try {
    const cartProduct = await CartProduct.find()
    res.json(cartProduct)
  } catch (error) {
    console.log(error)
  }
})

router.post('/add', async (req: Request, res: Response) => {
  try {
    const {
      _id,
      title,
      price,
      priceSale,
      image,
      category,
      size,
      colors,
      inStock,
    } = req.body
    const cartProduct = new CartProduct({
      _id,
      title,
      price,
      priceSale,
      image,
      category,
      size,
      colors,
      inStock,
    })
    await cartProduct.save()
    res.json(cartProduct)
  } catch (error) {
    console.log(error)
  }
})

router.post('/remove', async (req: Request, res: Response) => {
  try {
    const { _id } = req.body
    await CartProduct.findByIdAndDelete(_id)
    res.json({ message: 'Success' })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
