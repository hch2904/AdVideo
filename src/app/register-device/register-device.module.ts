import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDeviceRoutingModule } from './register-device-routing.module';
import { RegisterDeviceComponent } from './register-device.component';
import { PageHeaderModule } from '../shared';
import { FormsModule }   from '@angular/forms'; 
@NgModule({
    imports: [
        CommonModule,
        RegisterDeviceRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    declarations: [RegisterDeviceComponent]
})
export class RegisterDeviceModule { }
