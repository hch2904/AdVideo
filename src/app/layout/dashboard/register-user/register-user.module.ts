import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserRoutingModule } from './register-user-routing';
import { RegisterUserComponent } from './register-user.component';
import { PageHeaderModule } from '../../../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { User } from '../../../shared/models/index';

@NgModule({
    imports: [
        CommonModule,
        RegisterUserRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
		MdInputModule,
		MaterialModule,
    ],
    declarations: [RegisterUserComponent],
    providers: [User]

})
export class RegisterUserModule { }