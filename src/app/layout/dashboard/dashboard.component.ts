import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Hero } from '../dashboard/hero';
import { User } from '../dashboard/user';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent  {

  powers = ['I OS','WINDOWS','LINUX'];
  devices=['Mac', 'PC'];
  browsers=['IE','SAFARI','CHROME','FIREFOX'];

  model = new Hero('Test case 1','start.att.net', this.powers[0], this.devices[0],this.browsers[1]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero('', '', '','','');
  }

  skyDog(): Hero {
    let myHero =  new Hero('', '', '','','');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }



    currentUser: User;
    users: User[] = [];

    constructor() { }

   
}
