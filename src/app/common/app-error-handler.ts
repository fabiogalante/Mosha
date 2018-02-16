import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('Ocorreu um erro ao acessar o serviço - Classe app-error-handler');
    console.log(error);
  }
}
