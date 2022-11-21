const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 7070
const app = express()

app.use(cors())
app.use(express.json({ extended: true }))
app.use('/api/products', require('./routes/products.routes'))

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://root:root@cluster0.na6fqa7.mongodb.net/shop?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
