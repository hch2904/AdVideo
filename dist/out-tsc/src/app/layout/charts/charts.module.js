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
var ng2_charts_1 = require("ng2-charts");
var http_1 = require("@angular/http");
var charts_routing_module_1 = require("./charts-routing.module");
var charts_component_1 = require("./charts.component");
var shared_1 = require("../../shared");
var newchart_component_1 = require("app/newchart/newchart.component");
var index_1 = require("../../shared/services/index");
var angular2_highcharts_1 = require("angular2-highcharts");
var HighchartsService_1 = require("angular2-highcharts/dist/HighchartsService");
function highchartsFactory() {
    return require('highcharts');
}
exports.highchartsFactory = highchartsFactory;
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ng2_charts_1.ChartsModule,
            charts_routing_module_1.ChartsRoutingModule,
            shared_1.PageHeaderModule,
            angular2_highcharts_1.ChartModule,
            http_1.HttpModule
        ],
        providers: [{
                provide: HighchartsService_1.HighchartsStatic,
                useFactory: highchartsFactory
            }, index_1.ChartDataService],
        declarations: [charts_component_1.ChartsComponent,
            newchart_component_1.NewchartComponent
        ]
    })
], ChartsModule);
exports.ChartsModule = ChartsModule;
//# sourceMappingURL=charts.module.js.map