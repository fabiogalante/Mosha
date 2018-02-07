import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required)
  });


  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  onSave($event) {

    let teste = 10;
    let teste2 = teste;

    console.log(teste2);

    console.log($event);
  }
}


