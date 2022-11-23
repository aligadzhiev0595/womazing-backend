import { Request, Response } from 'express'
import Cart from '../models/Cart'

export const getCartItems = async (req: Request, res: Response) => {
  try {
    const cartProduct = await Cart.find()
    res.json(cartProduct)
  } catch (error) {
    console.log(error)
  }
}

export const addToCart = async (req: Request, res: Response) => {
  try {
    const cartProduct = new Cart({
      _id: req.body._id,
      title: req.body.title,
      price: req.body.price,
      priceSale: req.body.priceSale,
      image: req.body.image,
      category: req.body.category,
      size: req.body.size,
      color: req.body.color,
      inStock: req.body.inStock,
    })
    await cartProduct.save()
    res.json(cartProduct)
  } catch (error) {
    console.log(error)
  }
}

export const removeFromCart = async (req: Request, res: Response) => {
  try {  
    await Cart.findByIdAndDelete({_id: +req.params.id})
    res.json({ message: 'Success' })
  } catch (error) {
    console.log(error)
  }
}
