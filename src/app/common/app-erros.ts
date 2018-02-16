export class AppError {
  constructor(public originalError?: any)  {
    console.log(`Mensagem de erro${originalError}`);
  }
}
