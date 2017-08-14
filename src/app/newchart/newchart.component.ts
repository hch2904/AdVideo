import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { HttpModule,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { ChartDataService } from '../shared/services/index';
@Component({
  selector: 'app-chart',
     animations: [routerTransition()],
   
    styles: [`
      chart {
        display: block;
      }
    `],
    template: `<chart [options]="options" (load) = "saveChart($event.context)"></chart>
    <br>
     `

})
export class NewchartComponent implements OnInit {

    constructor(private _http: HttpModule,private chartService: ChartDataService) {  }
    ngOnInit() {
       this.options = {
              chart:{zoomType:'xy'},
              series: [],
              title : { text : 'Video Parameters' },
              xAxis: {categories:this.currentTimeOFchart},
            };
      this.getChartDataComp();
    }
    public options: Object;  
    public chart: Object;
    public currentTimeOFchart: Array<any>=[];
    public saveChart(chart) {
      this.chart = chart;
    }
    public manageData = function(data){
      let fps = [];
      let time = [];
      let decodedFrame= [];
      var currentTime = [];
      let bufferedVideo = [];
      let droppedframe=[];
      let arr = [];
      let zoneValue = [{value: 24,color: '#f7a35c'},{value: 23,color: '#7cb5ec'},{color: '#90ed7d'}]
      console.log(data);

      data.map(function(x){
        this.arr.push(x.currentTime) ;
      },this)
      for(let i=0;i<data.length;i++){
        this.currentTimeOFchart.push(parseInt(data[i].currentTime));
        fps.push(parseInt(data[i].FPS));
        decodedFrame.push(parseInt(data[i].Decodedframe));
        droppedframe.push(parseInt(data[i].Droppedframe));
        bufferedVideo.push(parseInt(data[i].Buffered));
      }
      this.chart.addSeries({name:"FPS",data:fps},true);
      this.chart.addSeries({name:"Decoded Frame",data:decodedFrame},true);
      this.chart.addSeries({name:"Dropped Frame",data:droppedframe},true);
      this.chart.addSeries({name:"Buffered Video",data:bufferedVideo},true);
      this.chart.redraw();
    }
    public getChartDataComp = function(){
      this.chartService.getChartData().subscribe( data => this.manageData(data[data.length-1].videoData),
                error => this.errorMessage = <any>error);
    }
    
}
