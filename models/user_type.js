"use strict";
exports.__esModule = true;
var UserType = /** @class */ (function () {
    function UserType() {
        this.userTypeList = [];
    }
    // Initilize cart user type list
    UserType.prototype.intilizeData = function (userTypeList) {
        this.userTypeList = userTypeList;
    };
    // get product by id
    UserType.prototype.getUserTypeByID = function (userTypeID) {
        /*return this.userTypeList.find(
          product => product.user_type_id === userTypeID
        );*/
        var userTypeDetail = null;
        this.userTypeList.forEach(function (userType) {
            if (userType.user_type_id === userTypeID) {
                userTypeDetail = userType;
            }
        });
        return userTypeDetail;
    };
    return UserType;
}());
exports.UserType = UserType;
