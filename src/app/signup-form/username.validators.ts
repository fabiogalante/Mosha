import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    return (control.value as string).indexOf(' ') >= 0 ? {cannotContainSpace: true} : null;
  }
}
