import { Component, VERSION } from '@angular/core';
import { Derived } from './abstarct.class';
import { MixinFunction } from './mixin.function';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends MixinFunction() {
  name = 'Angular ' + VERSION.major;
  a = 10;
  b = 20;
  constructor() {
    super();
    const d = new Derived();
    d.showName();
    console.log(this.add(this.a, this.b));
  }
}
