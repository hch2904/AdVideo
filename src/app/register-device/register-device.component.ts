import { Component, OnInit } from '@angular/core';
import { Device } from '../shared/models/index';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.scss'],
    animations: [routerTransition()]
})
export class RegisterDeviceComponent  {

platforms = ['I OS','WINDOWS','LINUX'];
  devices=['Mac', 'PC'];
  browsers=['SAFARI','CHROME','FIREFOX','IE'];



 model = new Device(this.platforms[0], this.devices[0],this.browsers[0],'','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newDevice() {
    this.model = new Device('', '', '','','');
  }

  constructor() { }
}
