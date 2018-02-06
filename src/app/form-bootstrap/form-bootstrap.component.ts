import {Component} from '@angular/core';

@Component({
  selector: 'app-form-bootstrap',
  templateUrl: './form-bootstrap.component.html',
  styleUrls: ['./form-bootstrap.component.css']
})
export class FormBootstrapComponent {

  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Fone'},
    { id: 3, name: 'Celular'},
    { id: 4, name: 'Correios'},
  ];

  log(firstName) {
    console.log(firstName);
  }

  submit(f) {
    console.log(f);
  }
}
