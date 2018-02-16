import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {AppError} from '../common/app-erros';
import {NotfoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    input.value = '';

    this.service.create(post)
      .subscribe(response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.SetErrors(error.originalError);
            alert('Registro excluído');
          }
          else throw error;
        });
  }

  updatePost(post) {

    this.service.update(post)
      .subscribe(response => {
        console.log(response.json());
      });

    this.service.put(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotfoundError) {
            alert('Este registro já foi excluído - 404');
          }
          else throw error;
        });
  }

  testAxios() {
    this.service.testAxios();
  }
}
