"use strict";
exports.__esModule = true;
var Discount = /** @class */ (function () {
    function Discount() {
        this.discountList = Array();
    }
    // Initilize cart product list
    Discount.prototype.intilizeData = function (discountList) {
        this.discountList = discountList;
    };
    // get product by id
    Discount.prototype.getDiscountByUserType = function (userTypeID) {
        /*return this.discountList.find(
          discount => discount.user_type_id === userTypeID
        );*/
        var discountDetail = null;
        this.discountList.forEach(function (discount) {
            if (discount.user_type_id === userTypeID) {
                discountDetail = discount;
            }
        });
        return discountDetail;
    };
    return Discount;
}());
exports.Discount = Discount;
