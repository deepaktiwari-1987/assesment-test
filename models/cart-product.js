"use strict";
exports.__esModule = true;
var sample_data_1 = require("../constants/sample.data");
var discount_1 = require("../models/discount");
var product_category_1 = require("../models/product_category");
var products_1 = require("../models/products");
var user_1 = require("../models/user");
var user_type_1 = require("../models/user_type");
var CartProduct = /** @class */ (function () {
    function CartProduct() {
        this.cartProductsList = [];
        this.discountObj = new discount_1.Discount();
        this.productObj = new products_1.Product();
        this.userObj = new user_1.User();
        this.productCategoryObj = new product_category_1.ProductCategory();
        this.userTypeObj = new user_type_1.UserType();
        var sampleUserTypes = sample_data_1["default"].userTypes;
        this.userTypeObj.intilizeData(sampleUserTypes);
        // Initilizing product data
        var sampleProducts = sample_data_1["default"].products;
        this.productObj.intilizeData(sampleProducts);
        // Initilizing discount data
        var sampleDiscounts = sample_data_1["default"].discounts;
        this.discountObj.intilizeData(sampleDiscounts);
        // Initilizing user data
        var sampleUsers = sample_data_1["default"].users;
        this.userObj.intilizeData(sampleUsers);
        // Initilizing category data
        var sampleProductCategories = sample_data_1["default"].categories;
        this.productCategoryObj.intilizeData(sampleProductCategories);
    }
    // Initilize cart product list
    CartProduct.prototype.intilizeData = function (cartProductList) {
        this.cartProductsList = cartProductList;
    };
    // fetch all cart products
    CartProduct.prototype.fetchAllCartProductsByUserID = function (userId) {
        var _this = this;
        //let userCartProducts = [];
        var totalPrice = 0;
        var totalDiscount = 0;
        var discountedPrice = 0;
        var nonDiscountPrice = 0;
        this.cartProductsList.forEach(function (cartData) {
            if (cartData.user_id === userId) {
                var productDetail = _this.productObj.getProductByID(cartData.product_id);
                var productCategoryDetail = _this.productCategoryObj.getProductCategoryByCategoryID(productDetail.category_id);
                //totalPrice += productDetail.product_price;
                if (productCategoryDetail.category_name !== 'groceries') {
                    discountedPrice += productDetail.product_price;
                }
                else {
                    nonDiscountPrice += productDetail.product_price;
                }
            }
        });
        var userDetail = this.userObj.getUserByID(userId);
        var userTypeDetail = this.userTypeObj.getUserTypeByID(userDetail.user_type_id);
        var discountDetail = this.discountObj.getDiscountByUserType(userDetail.user_type_id);
        var totalFlatDiscount = Math.floor((discountedPrice / 100) * 5);
        if (userTypeDetail.user_type === 'Customer') {
            var joinDate = new Date(userDetail.join_date);
            var currentDate = new Date();
            var timeDiff = Math.abs(currentDate.getTime() - joinDate.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            totalDiscount =
                totalFlatDiscount +
                    ((discountedPrice - totalFlatDiscount) *
                        discountDetail.discount_percentage) /
                        100;
        }
        else {
            totalDiscount = totalFlatDiscount;
        }
        return {
            totalPrice: discountedPrice + nonDiscountPrice,
            totalDiscount: totalDiscount,
            finalPrice: discountedPrice + nonDiscountPrice - totalDiscount
        };
    };
    return CartProduct;
}());
exports.CartProduct = CartProduct;
