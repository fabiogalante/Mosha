import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import axios from 'axios';
import {AppError} from '../common/app-erros';
import {NotfoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadInput(error.json()));
        }
        return Observable.throw(new AppError(error.json()));
      });
  }

  putPost(post) {
    // Put envia o objeto inteiro
    // {"userId":1,"id":1,"title":"sunt aut facere repeptio reprehenderit",
    // "body":"utem sunt rem eveniet architecto"}
    return this.http.put(`${this.url}/${post.id}`, JSON.stringify(post));
  }

  patchPost(post) {
    // Patch envia somente alguns dados do objeto
    // {"isRead":true}
    return this.http.patch(`${this.url}/${post.id}`, JSON.stringify({isRead: true}));
  }

  deletePost(post) {
    return this.http.delete(`${this.url}/${post.id}`)
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotfoundError(error));
        }
        return Observable.throw(new AppError(error));
      });
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
