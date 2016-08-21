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
var core_1 = require("angular2/core");
var StaticComponent = (function () {
    function StaticComponent() {
    }
    StaticComponent.prototype.ngOnInit = function () {
        this.message = "The 'static.html' was used as the Angular2 'templateUrl'. There is a 'message' property bound to the <blockqoute> element.";
    };
    StaticComponent = __decorate([
        core_1.Component({
            selector: "static",
            templateUrl: "app/components/static.html"
        }), 
        __metadata('design:paramtypes', [])
    ], StaticComponent);
    return StaticComponent;
}());
exports.StaticComponent = StaticComponent;
//# sourceMappingURL=static.component.js.map