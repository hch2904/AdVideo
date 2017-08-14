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
var router_animations_1 = require("../router.animations");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var index_1 = require("../shared/services/index");
var NewchartComponent = (function () {
    function NewchartComponent(_http, chartService) {
        this._http = _http;
        this.chartService = chartService;
        this.currentTimeOFchart = [];
        this.manageData = function (data) {
            var fps = [];
            var time = [];
            var decodedFrame = [];
            var currentTime = [];
            var bufferedVideo = [];
            var droppedframe = [];
            var zoneValue = [{ value: 24, color: '#f7a35c' }, { value: 23, color: '#7cb5ec' }, { color: '#90ed7d' }];
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                this.currentTimeOFchart.push(parseInt(data[i].currentTime));
                fps.push(parseInt(data[i].FPS));
                decodedFrame.push(parseInt(data[i].Decodedframe));
                droppedframe.push(parseInt(data[i].Droppedframe));
                bufferedVideo.push(parseInt(data[i].Buffered));
            }
            this.chart.addSeries({ name: "FPS", data: fps }, true);
            this.chart.addSeries({ name: "Decoded Frame", data: decodedFrame }, true);
            this.chart.addSeries({ name: "Dropped Frame", data: droppedframe }, true);
            this.chart.addSeries({ name: "Buffered Video", data: bufferedVideo }, true);
            this.chart.redraw();
        };
        this.getChartDataComp = function () {
            var _this = this;
            this.chartService.getChartData().subscribe(function (data) { return _this.manageData(data[data.length - 1].videoData); }, function (error) { return _this.errorMessage = error; });
        };
    }
    NewchartComponent.prototype.ngOnInit = function () {
        this.options = {
            chart: { zoomType: 'xy' },
            series: [],
            title: { text: 'Video Parameters' },
            xAxis: { categories: this.currentTimeOFchart },
        };
        this.getChartDataComp();
    };
    NewchartComponent.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    return NewchartComponent;
}());
NewchartComponent = __decorate([
    core_1.Component({
        selector: 'app-chart',
        animations: [router_animations_1.routerTransition()],
        styles: ["\n      chart {\n        display: block;\n      }\n    "],
        template: "<chart [options]=\"options\" (load) = \"saveChart($event.context)\"></chart>\n    <br>\n     "
    }),
    __metadata("design:paramtypes", [http_1.HttpModule, index_1.ChartDataService])
], NewchartComponent);
exports.NewchartComponent = NewchartComponent;
//# sourceMappingURL=newchart.component.js.map