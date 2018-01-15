import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author',
  template:
      `
    <!--Sendo um array usar length-->
    <h1>{{ autores.length }} Authors</h1>
    
    <ul>
      <li *ngFor="let autor of autores">
        {{ autor }}
      </li>
    </ul>
 `
})
export class AuthorComponent implements OnInit {

  autores;
  constructor(service: AuthorService) {
    this.autores = service.getAutor();
  }

  ngOnInit() {
  }

}
