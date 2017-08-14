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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var index_1 = require("../../shared/services/index");
var ChartsComponent = (function () {
    function ChartsComponent(_http, chartService) {
        this._http = _http;
        this.chartService = chartService;
        // lineChart
        this.lineChartData = [
            { data: [], label: "Series A" },
            { data: [], label: 'Series B' },
            { data: [], label: 'Series C' }
        ];
        this.lineChartLabels = [11, 1, 1, 1, 223123, 3];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(4, 7, 201,0.1)',
                borderColor: 'rgba(4, 7, 201,0.5)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(72,201,4,0.1)',
                borderColor: 'rgba(72,201,4,0.5)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(201,4,49,0.1)',
                borderColor: 'rgba(201,4,49,0.5)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.videoData = [];
        this.getChartData = function () {
            var _this = this;
            this.chartService.getChartData().subscribe(function (data) { return data[0].videoData.splice(10).map(function (x) { /*console.log(x.Time)*/ return _this.lineChartLabels.push(x.Time); }); }, function (error) { return _this.errorMessage = error; });
        };
    }
    // events
    ChartsComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    ChartsComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    ChartsComponent.prototype.ngOnInit = function () {
        //this.getChartData();
    };
    return ChartsComponent;
}());
ChartsComponent = __decorate([
    core_1.Component({
        selector: 'app-charts',
        templateUrl: './charts.component.html',
        styleUrls: ['./charts.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [http_1.Http, index_1.ChartDataService])
], ChartsComponent);
exports.ChartsComponent = ChartsComponent;
//# sourceMappingURL=charts.component.js.map