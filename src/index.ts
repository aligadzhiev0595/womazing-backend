import express, { Express } from 'express'
import { connect } from 'mongoose'
import cors from 'cors'
import { MainController } from './controllers/MainController'
import { getAllProduct, getOneProduct } from './controllers/ProductController'
import { addToCart, removeFromCart ,getCartItems} from './controllers/CartController'

const PORT = process.env.PORT || 8080
const app: Express = express()

app.use(cors())
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)
app.get('/', MainController)
app.get('/api/products', getAllProduct)
app.get('/api/products/:id', getOneProduct)
app.get('/api/cart', getCartItems)
app.post('/api/cart', addToCart)
app.delete('/api/cart/:id', removeFromCart)

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
