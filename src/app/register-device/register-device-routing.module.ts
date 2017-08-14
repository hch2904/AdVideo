import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterDeviceComponent } from './register-device.component';

const routes: Routes = [
    { path: '', component: RegisterDeviceComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterDeviceRoutingModule { }