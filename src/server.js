import express from 'express'
import { connect } from 'mongoose'
import cors from 'cors'

const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)
app.use('/', require('./routes/main.routes'))
app.use('/api/products', require('./routes/products.routes'))

async function start() {
  try {
    await connect(
      'mongodb+srv://root:root@cluster0.na6fqa7.mongodb.net/shop?retryWrites=true&w=majority'
    ).then(() => console.log(`⚡️[dataBase]: DataBase is running`))
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
