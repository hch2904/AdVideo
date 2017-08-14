import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import {NewchartComponent } from 'app/newchart/newchart.component'; 
import { ChartDataService } from '../../shared/services/index';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        ChartsRoutingModule,
        PageHeaderModule,
        ChartModule,
        HttpModule
    ],
      providers: [{
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },ChartDataService],
    declarations: [ChartsComponent,
    NewchartComponent
    ]
})
export class ChartsModule { }
