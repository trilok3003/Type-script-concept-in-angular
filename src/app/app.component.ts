import { Component, VERSION } from '@angular/core';
import { Derived } from './abstarct.class';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor() {
    const d = new Derived();
    d.showName();
  }
}

