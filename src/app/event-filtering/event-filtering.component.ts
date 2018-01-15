import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  template: `
    <!--<input (keyup.enter)="onKeyUp($event)" />    -->
    <input #email (keyup.enter)="onKeyUp(email.value)" />
  `

})
export class EventFilteringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // onKeyUp($event) {
  //   console.log($event.target.value);
  // }

  onKeyUp(email) {
    console.log(email);
  }
}
