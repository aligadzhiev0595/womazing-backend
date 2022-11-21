const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json({ extended: true }))
app.use('/', require('./routes/main.routes'))
app.use('/api/products', require('./routes/products.routes'))

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://root:root@cluster0.na6fqa7.mongodb.net/shop?retryWrites=true&w=majority'
    ).then(() => console.log(`⚡️[dataBase]: DataBase is running`)).catch((e) => console.log(`⚡️[error]: DataBase ${e}`))
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
