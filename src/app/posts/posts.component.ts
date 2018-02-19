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
    this.service.getAll();
  }


  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          // this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          this.posts.splice(0,1);

          if (error instanceof BadInput) {
            // this.form.SetErrors(error.originalError);
            alert('Registro excluído');
          }
          else throw error;
        });
  }

  updatePost(post) {

    this.service.update(post)
      .subscribe(
        updatedPost => {
        console.log(updatedPost);
      });

    this.service.put(post)
      .subscribe(
        putPost => {
        console.log(putPost);
      });
  }

  deletePost(post) {
    this.service.delete(post.id);
  }

  testAxios() {
    this.service.testAxios();
  }
}
