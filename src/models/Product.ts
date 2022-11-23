import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  priceSale: { type: Number, required: true },
  image: { type: Object, default: {} },
  category: { type: String, required: true },
  size: { type: Array, default: [] },
  colors: { type: Array, default: [] },
  inStock: { type: Number, required: true },
})

export default model('Product', ProductSchema)

