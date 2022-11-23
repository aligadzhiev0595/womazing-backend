"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    priceSale: { type: Number, required: true },
    image: { type: Object, default: {} },
    category: { type: String, required: true },
    size: { type: Array, default: [] },
    colors: { type: Array, default: [] },
    inStock: { type: Number, required: true },
});
exports.default = (0, mongoose_1.model)('Product', ProductSchema);
//# sourceMappingURL=Product.js.map