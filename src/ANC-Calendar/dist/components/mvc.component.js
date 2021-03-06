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
var MvcComponent = (function () {
    function MvcComponent() {
    }
    MvcComponent.prototype.ngOnInit = function () {
        this.message = "The '/partial/message' path was used as the Angular2 'templateUrl'. However, this routes through the 'PartialController' hitting the 'Message' action and is served after standard MVC pre-processing. Likewise, there is a 'message' property bound to the <blockqoute> element.";
    };
    MvcComponent = __decorate([
        core_1.Component({
            selector: "mvc",
            templateUrl: "/partial/message"
        }), 
        __metadata('design:paramtypes', [])
    ], MvcComponent);
    return MvcComponent;
}());
exports.MvcComponent = MvcComponent;
//# sourceMappingURL=mvc.component.js.map