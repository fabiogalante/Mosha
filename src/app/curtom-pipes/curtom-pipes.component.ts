import { Component } from '@angular/core';

@Component({
  selector: 'app-curtom-pipes',
  template: `
      {{ text | summary:10 }}
  `
})
export class CurtomPipesComponent {

  text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Ut ornare erat sit amet consectetur mollis. Donec nunc nulla,
    placerat id ipsum nec, condimentum imperdiet ligula.
  `;
}
