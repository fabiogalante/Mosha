import { Component } from '@angular/core';

@Component({
  selector: 'app-starts',
  template: `
      <span class="glyphicon"
            [class.glyphicon-star]="isFavorite"
            [class.glyphicon-star-empty]="!isFavorite"
            (click)="onClick()"
      ></span>
  `,

})
export class StartsComponent  {

  isFavorite = true;
  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
