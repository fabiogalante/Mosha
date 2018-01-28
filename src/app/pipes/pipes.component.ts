import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    {{ course.title | uppercase | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.1-1' }} <br/>
    {{ course.price | currency:'BRL':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }}
    `

})
export class PipesComponent implements OnInit {


  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  constructor() { }

  ngOnInit() {
  }

}
