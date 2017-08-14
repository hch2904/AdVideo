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
var router_1 = require("@angular/router");
var index_1 = require("../shared/services/index");
var router_animations_1 = require("../router.animations");
//
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//
var LoginComponent = (function () {
    function LoginComponent(route, router, authentication) {
        this.route = route;
        this.router = router;
        this.authentication = authentication;
        this.loading = false;
        this.submitLoginForm = function (values) {
            this.loading = true;
            if (values.emailFormControl == null || values.emailFormControl == undefined || values.password == null) {
                return;
            }
            console.log(values.emailFormControl + values.password);
            if (this.authentication.login(values.emailFormControl, values.password)) {
                console.log('****');
                this.router.navigate(['']);
            }
            else {
                this.message = 'Error';
            }
            //call an http request
            // if(){
            //
            // }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new forms_1.FormGroup({
            emailFormControl: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern(EMAIL_REGEX)
            ]),
            password: new forms_1.FormControl('', forms_1.Validators.required),
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map