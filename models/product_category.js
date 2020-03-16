"use strict";
exports.__esModule = true;
var ProductCategory = /** @class */ (function () {
    function ProductCategory() {
        this.productCategoryList = [];
    }
    // Initilize cart product category list
    ProductCategory.prototype.intilizeData = function (productCategoryList) {
        this.productCategoryList = productCategoryList;
    };
    // get product category by id
    ProductCategory.prototype.getProductCategoryByCategoryID = function (categoryID) {
        /*return this.productCategoryList.find(
          category => category.category_id === categoryID
        );*/
        var productCategoryDetail = null;
        this.productCategoryList.forEach(function (productCategory) {
            if (productCategory.category_id === categoryID) {
                productCategoryDetail = productCategory;
            }
        });
        return productCategoryDetail;
    };
    return ProductCategory;
}());
exports.ProductCategory = ProductCategory;
