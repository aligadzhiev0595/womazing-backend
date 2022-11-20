import { Router } from 'express'

const router = Router()
const Products = require('../models/Products')

router.get('/', async (req, res) => {
  try {
    const products = await Products.find()
    res.json(products)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const product = await Products.findById(id)
    res.json(product)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
