import { Component } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  template: `
    <!--<input (keyup.enter)="onKeyUp($event)" />    -->
    <input #email (keyup.enter)="onKeyUp(email.value)" />
  `

})
export class TwoWayBindingComponent  {



  onKeyUp(email) {
    console.log(email);
  }
}
