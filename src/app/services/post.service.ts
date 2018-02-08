import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import axios from 'axios';


@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
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
    return this.http.delete(`${this.url}/${post.id}`);
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
