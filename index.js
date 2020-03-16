"use strict";
exports.__esModule = true;
var cart_product_1 = require("./models/cart-product");
var sample_data_1 = require("./constants/sample.data");
// Initilizing cart product data
var cartProduct = new cart_product_1.CartProduct();
var sampleCartProducts = sample_data_1["default"].cartProducts;
cartProduct.intilizeData(sampleCartProducts);
var allCartProducts = cartProduct.fetchAllCartProductsByUserID(1);
console.log(allCartProducts);
