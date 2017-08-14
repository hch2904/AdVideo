"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var login_routing_module_1 = require("./login-routing.module");
var login_component_1 = require("./login.component");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var forms_1 = require("@angular/forms");
var index_1 = require("../shared/services/index");
var index_2 = require("../shared/models/index");
var material_3 = require("@angular/material");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            login_routing_module_1.LoginRoutingModule,
            material_2.MaterialModule,
            material_1.MdInputModule,
            forms_1.ReactiveFormsModule,
            material_3.MdCardModule
        ],
        declarations: [login_component_1.LoginComponent],
        providers: [index_1.AuthenticationService, index_2.User],
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map