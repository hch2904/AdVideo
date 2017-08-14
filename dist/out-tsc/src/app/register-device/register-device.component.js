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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../shared/models/index");
var router_animations_1 = require("../router.animations");
var RegisterDeviceComponent = (function () {
    function RegisterDeviceComponent() {
        this.platforms = ['I OS', 'WINDOWS', 'LINUX'];
        this.devices = ['Mac', 'PC'];
        this.browsers = ['SAFARI', 'CHROME', 'FIREFOX', 'IE'];
        this.model = new index_1.Device(this.platforms[0], this.devices[0], this.browsers[0], '', '');
        this.submitted = false;
    }
    RegisterDeviceComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(RegisterDeviceComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    RegisterDeviceComponent.prototype.newDevice = function () {
        this.model = new index_1.Device('', '', '', '', '');
    };
    return RegisterDeviceComponent;
}());
RegisterDeviceComponent = __decorate([
    core_1.Component({
        selector: 'app-register-device',
        templateUrl: './register-device.component.html',
        styleUrls: ['./register-device.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [])
], RegisterDeviceComponent);
exports.RegisterDeviceComponent = RegisterDeviceComponent;
//# sourceMappingURL=register-device.component.js.map