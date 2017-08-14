import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/index';
@Injectable()
export class AuthenticationService {
    constructor(
      private http: Http,
      private user: User,
    ) {
      user.firstName = 'admin';
      user.id =1;
      user.lastName = 'admin';
      user.username = 'admin@abc.com',
      user.password = 'admin';
    }
    login(username: string, password: string) {
        /*return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });*/
        //Create an API request overhere
        //localStorage.addItem('currentUser');
        if(username==this.user.username && password==this.user.password){
            localStorage.setItem('currentUser',JSON.stringify(this.user));
            console.log(localStorage.getItem('currentUser'));
            return true;

        }else{
          return false;
        }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
