import { Request, Response } from 'express'
import Product from '../models/Product'

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.find()
    res.json(product)
  } catch (error) {
    console.log(error)
  }
}

export const getOneProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    res.json(product)
  } catch (error) {
    console.log(error)
  }
}
