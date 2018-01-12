import { Component } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  template: `
    <!--<input (keyup.enter)="onKeyUp($event)" />    -->
    <!--<input #email (keyup.enter)="onKeyUp(email.value)" />-->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `

})
export class TwoWayBindingComponent  {

  email = 'fgamans@hotmail.com'

  onKeyUp(email) {
    console.log(this.email);
  }
}
