"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var register_user_routing_1 = require("./register-user-routing");
var register_user_component_1 = require("./register-user.component");
var shared_1 = require("../../../shared");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var index_1 = require("../../../shared/models/index");
var RegisterUserModule = (function () {
    function RegisterUserModule() {
    }
    return RegisterUserModule;
}());
RegisterUserModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            register_user_routing_1.RegisterUserRoutingModule,
            shared_1.PageHeaderModule,
            forms_1.ReactiveFormsModule,
            material_1.MdInputModule,
            material_2.MaterialModule,
        ],
        declarations: [register_user_component_1.RegisterUserComponent],
        providers: [index_1.User]
    })
], RegisterUserModule);
exports.RegisterUserModule = RegisterUserModule;
//# sourceMappingURL=register-user.module.js.map