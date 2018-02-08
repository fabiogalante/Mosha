import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
       this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {

    // Patch envia somente alguns dados do objeto
    // {"isRead":true}
    this.http.patch(`${this.url}/${post.id}`, JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response.json());
      });

    // Put envia o objeto inteiro
    // {"userId":1,"id":1,"title":"sunt aut facere repeptio reprehenderit",
    // "body":"utem sunt rem eveniet architecto"}
    this.http.put(`${this.url}/${post.id}`, JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.http.delete(`${this.url}/${post.id}`)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
