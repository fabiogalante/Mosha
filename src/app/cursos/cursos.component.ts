import {Component, OnInit} from '@angular/core';
import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  template: `
    <h2>
      {{ title }}
    </h2>

    <ul>
      <li *ngFor="let curso of cursos">
        {{ curso }}
      </li>
    </ul>

    <h3>{{ getTitle() }}</h3>
  `


})
export class CursosComponent implements OnInit {

  title = 'Lista de cursos2';
  cursos;

  constructor(service: CursosService) {
    this.cursos = service.getCursos();
  }

  getTitle() {
    return this.title;
  }

  ngOnInit() {
  }

}
