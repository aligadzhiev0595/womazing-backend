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
exports.removeFromCart = exports.addToCart = exports.getCartItems = void 0;
const Cart_1 = __importDefault(require("../models/Cart"));
const getCartItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartProduct = yield Cart_1.default.find();
        res.json(cartProduct);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCartItems = getCartItems;
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartProduct = new Cart_1.default({
            _id: req.body._id,
            title: req.body.title,
            price: req.body.price,
            priceSale: req.body.priceSale,
            image: req.body.image,
            category: req.body.category,
            size: req.body.size,
            color: req.body.color,
            inStock: req.body.inStock,
        });
        yield cartProduct.save();
        res.json(cartProduct);
    }
    catch (error) {
        console.log(error);
    }
});
exports.addToCart = addToCart;
const removeFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Cart_1.default.findByIdAndDelete({ _id: +req.params.id });
        res.json({ message: 'Success' });
    }
    catch (error) {
        console.log(error);
    }
});
exports.removeFromCart = removeFromCart;
//# sourceMappingURL=CartController.js.map