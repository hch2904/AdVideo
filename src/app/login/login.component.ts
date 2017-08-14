import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/services/index';
import { routerTransition } from '../router.animations';
//
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
      animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService,
  ) { }
  loading: boolean = false;
  loginForm;
  ngOnInit() {
    this.loginForm = new FormGroup({
      emailFormControl  : new FormControl('',[
                Validators.required,
                Validators.pattern(EMAIL_REGEX)]),
      password : new FormControl('',Validators.required),
    });
  }
  submitLoginForm = function(values){
    this.loading = true;
    if(values.emailFormControl == null || values.emailFormControl == undefined || values.password ==null  ){
      return;
    }
    console.log(values.emailFormControl+values.password);
    if(this.authentication.login(values.emailFormControl,values.password)){
        console.log('****')
        this.router.navigate(['']);
    }else{
        this.message = 'Error';
    }
    //call an http request
    // if(){
    //
    // }

  }
}
