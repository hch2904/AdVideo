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
var router_animations_1 = require("../../router.animations");
var hero_1 = require("../dashboard/hero");
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.powers = ['I OS', 'WINDOWS', 'LINUX'];
        this.devices = ['Mac', 'PC'];
        this.browsers = ['IE', 'SAFARI', 'CHROME', 'FIREFOX'];
        this.model = new hero_1.Hero('Test case 1', 'start.att.net', this.powers[0], this.devices[0], this.browsers[1]);
        this.submitted = false;
        this.users = [];
    }
    DashboardComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(DashboardComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.newHero = function () {
        this.model = new hero_1.Hero('', '', '', '', '');
    };
    DashboardComponent.prototype.skyDog = function () {
        var myHero = new hero_1.Hero('', '', '', '', '');
        console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
        return myHero;
    };
    //////// NOT SHOWN IN DOCS ////////
    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    DashboardComponent.prototype.showFormControls = function (form) {
        return form && form.controls['name'] &&
            form.controls['name'].value; // Dr. IQ
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map