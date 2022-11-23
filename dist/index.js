"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const MainController_1 = require("./controllers/MainController");
const ProductController_1 = require("./controllers/ProductController");
const CartController_1 = require("./controllers/CartController");
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const jsonBodyMiddleware = express_1.default.json();
app.use(jsonBodyMiddleware);
app.get('/', MainController_1.MainController);
app.get('/api/products', ProductController_1.getAllProduct);
app.get('/api/products/:id', ProductController_1.getOneProduct);
app.get('/api/cart', CartController_1.getCartItems);
app.post('/api/cart', CartController_1.addToCart);
app.delete('/api/cart/:id', CartController_1.removeFromCart);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongoose_1.connect)('mongodb+srv://root:root@cluster0.na6fqa7.mongodb.net/shop?retryWrites=true&w=majority').then(() => console.log(`⚡️[dataBase]: DataBase is running`));
            app.listen(PORT, () => {
                console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
start();
//# sourceMappingURL=index.js.map