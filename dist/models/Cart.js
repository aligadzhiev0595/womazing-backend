"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    priceSale: { type: Number, required: false },
    image: { type: Object, default: {} },
    category: { type: String, required: true },
    size: { type: String, require: true },
    color: { type: String, require: true },
    inStock: { type: Number, required: false },
});
exports.default = (0, mongoose_1.model)('Cart', CartSchema);
//# sourceMappingURL=Cart.js.map