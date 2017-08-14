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
var forms_1 = require("@angular/forms");
var index_1 = require("../../../shared/models/index");
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var RegisterUserComponent = (function () {
    function RegisterUserComponent(user, fb) {
        this.submitregisterUserForm = function (values) {
            console.log(values);
            //make a http call 
        };
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
        this.registerUserForm = new forms_1.FormGroup({
            usernameForm: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern(EMAIL_REGEX)
            ]),
            password: new forms_1.FormControl('', forms_1.Validators.required),
            confirmPass: new forms_1.FormControl('', forms_1.Validators.required),
            firstname: new forms_1.FormControl('', forms_1.Validators.required),
            lastname: new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    return RegisterUserComponent;
}());
RegisterUserComponent = __decorate([
    core_1.Component({
        selector: 'app-register-user',
        templateUrl: './register-user.component.html',
        styleUrls: ['./register-user.component.scss']
    }),
    __metadata("design:paramtypes", [index_1.User, forms_1.FormBuilder])
], RegisterUserComponent);
exports.RegisterUserComponent = RegisterUserComponent;
//# sourceMappingURL=register-user.component.js.map