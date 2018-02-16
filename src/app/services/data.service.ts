import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import axios from 'axios';
import {AppError} from '../common/app-erros';
import {NotfoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) {
  }

  getAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    // return Observable.throw(new AppError());

    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  put(resource) {
    // Put envia o objeto inteiro
    // {"userId":1,"id":1,"title":"sunt aut facere repeptio reprehenderit",
    // "body":"utem sunt rem eveniet architecto"}
    return this.http.put(`${this.url}/${resource.id}`, JSON.stringify(resource))
      .catch(this.handleError);
  }

  update(resource) {
    // Patch envia somente alguns dados do objeto
    // {"isRead":true}
    return this.http.patch(`${this.url}/${resource.id}`, JSON.stringify({isRead: true}))
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' +  id)
      .map(response => response.json())
      .catch(this.handleError);
    // `${this.url}/${id}`
  }

  private handleError(error: Response) {

    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return Observable.throw(new NotfoundError(error));
    }
    return Observable.throw(new AppError(error));
  }

  testAxios() {
    axios.get(this.url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
