import { NgModule } from '@angular/core';
 import { CommonModule } from'@angular/common'; 
 import { FormsModule }   from '@angular/forms'; 

import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
     ChatComponent
} from './components';
import { StatModule } from '../../shared';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        FormsModule,
        StatModule,
 
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
    ]
})
export class DashboardModule { }
