import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    return (control.value as string).indexOf(' ') >= 0 ? {cannotContainSpace: true} : null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh')
          resolve({ shouldBeUnique: true });
        else
          resolve(null);
      }, 2000);
    });
  }
}
