import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'favorite',
  template: `
      <span class="glyphicon"
            [ngClass]="{
              'glyphicon-star': isFavorite,
              'glyphicon-star-empty': !isFavorite
            }"
            (click)="onClick()"
      ></span>

      <h2>{{ title }}</h2>
  `

})
export class StartsComponent  {

  @Input('is-favorite') isFavorite: boolean;
  @Input() title: string;
  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }

}
