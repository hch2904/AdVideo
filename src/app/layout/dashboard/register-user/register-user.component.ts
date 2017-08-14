import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl,Validators,AbstractControl,FormBuilder} from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../shared/models/index';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(user: User,fb :FormBuilder) { }

  ngOnInit() { 
  	this.registerUserForm = new FormGroup({
      usernameForm  : new FormControl('',[
                Validators.required,
                Validators.pattern(EMAIL_REGEX)]),
      password : new FormControl('',Validators.required),
	  confirmPass: new FormControl('',Validators.required),
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required)
    });
  }
  /*confirmPassValidator = function(absControl: AbstractControl){
  	console.log(absControl.value);
  	//console.log(this.registerUserForm.password);
  	return {isEqual: absControl.get('password') === absControl.get('confirmPass')};
  }*/

  registerUserForm: FormGroup;
  submitregisterUserForm = function(values){
		console.log(values);
		//make a http call 
  }


}
