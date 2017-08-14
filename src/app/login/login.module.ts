import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MdInputModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../shared/services/index';
import { User } from '../shared/models/index';
import { MdCardModule } from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MaterialModule,
        MdInputModule,
        ReactiveFormsModule,
        MdCardModule
    ],
    declarations: [LoginComponent],
    providers: [AuthenticationService,User],
})
export class LoginModule {
}
