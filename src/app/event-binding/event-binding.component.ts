import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div (click)="onDivClicked()">
      <button class="btn btn-danger" (click)="onSave($event)">Save</button>
    </div>
  `
})
export class EventBindingComponent implements OnInit {

  onSave($event) {

    $event.stopPropagation();
    console.log($event);
  }

  onDivClicked() {
    console.log("Div was clicked");
  }

  constructor() { }

  ngOnInit() {
  }

}
