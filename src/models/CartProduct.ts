import { Schema, model } from 'mongoose'

const schema = new Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  priceSale: { type: Number, required: false },
  image: { type: String, required:true },
  category: { type: String, required: true },
  size: { type: String, require: true },
  colors: { type: String, require: true },
  inStock: { type: Number, required: true },
})

module.exports = model('CartProduct', schema)
