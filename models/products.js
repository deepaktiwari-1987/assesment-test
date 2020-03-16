"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product() {
        this.productList = [];
    }
    // Initilize cart product list
    Product.prototype.intilizeData = function (productList) {
        this.productList = productList;
    };
    // get product by id
    Product.prototype.getProductByID = function (productID) {
        /*return this.productList.find(product => product.product_id === productID);*/
        var productDetail = null;
        this.productList.forEach(function (product) {
            if (product.product_id === productID) {
                productDetail = product;
            }
        });
        return productDetail;
    };
    return Product;
}());
exports.Product = Product;
