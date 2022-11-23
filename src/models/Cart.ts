import { Schema, model } from 'mongoose'

const CartSchema = new Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  priceSale: { type: Number, required: false },
  image: { type: Object, default: {} },
  category: { type: String, required: true },
  size: { type: String, require: true },
  color: { type: String, require: true },
  inStock: { type: Number, required: false },
})

export default model('Cart', CartSchema)
