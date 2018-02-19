import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorHandler, NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
// import { CursosComponent } from './cursos/cursos.component';
import {CursosService} from './cursos/cursos.service';
// import { AuthorComponent } from './author/author.component';
// import {AuthorService} from './author.service';
// import { PropertyBindingComponent } from './property-binding/property-binding.component';
// import { EventBindingComponent } from './event-binding/event-binding.component';
// import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import {TwoWayBindingComponent} from './two-way-binding/two-way-bindig.component';
import {PipesComponent} from './pipes/pipes.component';
import {CurtomPipesComponent} from './curtom-pipes/curtom-pipes.component';
import {SummaryPipe} from './summary.pipe';
import {StartsComponent} from './starts/starts.component';
import {CaptionlettersComponent} from './captionletters/captionletters.component';
import {TitleCasePipe} from './title-case.pipe';
import {FavoriteComponent} from './favorite/favorite.component';
import {DirectivesComponent} from './directives/directives.component';
import {FormBootstrapComponent} from './form-bootstrap/form-bootstrap.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {PostsComponent} from './posts/posts.component';
import {HttpModule} from '@angular/http';
import {PostService} from './services/post.service';
import {AppErrorHandler} from './common/app-error-handler';
import {GithubFollowersService} from './services/github-followers.service';
import {GithubFollowersComponent} from './github-followers/github-followers.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {GithubProfileComponent} from './github-profile/github-profile.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    // CursosComponent,
    // AuthorComponent,
    // PropertyBindingComponent,
    // EventBindingComponent,
    // EventFilteringComponent,
    TwoWayBindingComponent,
    PipesComponent,
    CurtomPipesComponent,
    SummaryPipe,
    StartsComponent,
    CaptionlettersComponent,
    TitleCasePipe,
    FavoriteComponent,
    DirectivesComponent,
    FormBootstrapComponent,
    SignupFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    CursosService,
    // AuthorService
    PostService,
    FormsModule,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
