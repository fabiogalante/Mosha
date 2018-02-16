import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {AppError} from '../common/app-erros';
import {NotfoundError} from '../common/not-found-error';


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
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      }, error => {
        alert('Ocorreu um erro ao acessar o serviço');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof NotfoundError) {
            // this.form.SetErrors(error.json());
            alert('Registro excluído');
          }
          else {
            alert('Ocorreu um erro');
            console.log(error);
          }
        }
      );
  }

  updatePost(post) {

    this.service.patchPost(post)
      .subscribe(response => {
        console.log(response.json());
      });

    this.service.putPost(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(
        () => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotfoundError) {
            alert('Este registro já foi excluído - 404');
          }
          else {
            alert('Ocorreu um erro ao acessar o serviço');
            console.log(error);
          }
        });
  }

  testAxios() {
    this.service.testAxios();
  }
}
