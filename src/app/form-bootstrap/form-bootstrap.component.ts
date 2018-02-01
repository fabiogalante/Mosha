import {Component} from '@angular/core';

@Component({
  selector: 'app-form-bootstrap',
  templateUrl: './form-bootstrap.component.html',
  styleUrls: ['./form-bootstrap.component.css']
})
export class FormBootstrapComponent {

  log(firstName) {
    console.log(firstName);
  }

  submit(f) {
    console.log(f);
  }

}
