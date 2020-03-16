"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User() {
        this.userList = [];
    }
    // Initilize cart product list
    User.prototype.intilizeData = function (userList) {
        this.userList = userList;
    };
    // get user by id
    User.prototype.getUserByID = function (userID) {
        //return this.userList.find(user => user.user_id === userID);
        var userDetail = null;
        this.userList.forEach(function (user) {
            if (user.user_id === userID) {
                userDetail = user;
            }
        });
        return userDetail;
    };
    return User;
}());
exports.User = User;
