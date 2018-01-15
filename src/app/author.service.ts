import {Injectable} from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() {
  }

  getAutor() {
    return ['author1', 'author2', 'auhtor3'];
  }
}
