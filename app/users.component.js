"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.x = "";
    }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'my-users',
        template: "    \n    <ul class=\"users\">\n      <li *ngFor=\"let user of users\" [class.selected]=\"user === selectedUser\" (click)=\"onSelect(user)\">\n        <span class=\"badge\">{{user.id}}</span>) {{user.name}}\n      </li>\n    </ul>\n    <user-detail [user]=\"selectedUser\"></user-detail>\n  ",
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map