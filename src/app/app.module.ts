import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';


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
import { PipesComponent } from './pipes/pipes.component';
import { CurtomPipesComponent } from './curtom-pipes/curtom-pipes.component';
import {SummaryPipe} from './summary.pipe';
import { StartsComponent } from './starts/starts.component';
import { CaptionlettersComponent } from './captionletters/captionletters.component';
import { TitleCasePipe } from './title-case.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormBootstrapComponent } from './form-bootstrap/form-bootstrap.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import {HttpModule} from '@angular/http';
import {PostService} from './services/post.service';


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
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CursosService,
    // AuthorService
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
