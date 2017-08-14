import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { ChartDataService } from '../../shared/services/index';
@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
   errorMessage: String;

     constructor(private _http: Http,private chartService: ChartDataService){
     }
    // lineChart
    public lineChartData: Array<any> = [
        { data: [], label: "Series A" },
        { data: [], label: 'Series B' },
        { data: [], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = [11,1,1,1,223123,3];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {   
            // grey
            backgroundColor: 'rgba(4, 7, 201,0.1)',
            borderColor: 'rgba(4, 7, 201,0.5)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(72,201,4,0.1)',
            borderColor: 'rgba(72,201,4,0.5)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(201,4,49,0.1)',
            borderColor: 'rgba(201,4,49,0.5)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ]; 
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    public videoData: Array<any> =[];
    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
    ngOnInit() {
        //this.getChartData();
    }
    public getChartData = function(){
        this.chartService.getChartData().subscribe(
                data => data[0].videoData.splice(10).map((x)=> /*console.log(x.Time)*/this.lineChartLabels.push(x.Time)),
                error => this.errorMessage = <any>error
            );
        
    }
}
