import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import { CursosComponent } from './cursos/cursos.component';
import {CursosService} from './cursos/cursos.service';
import { AuthorComponent } from './author/author.component';
import {AuthorService} from './author.service';
import { PropertyBindingComponent } from './property-binding/property-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CursosComponent,
    AuthorComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CursosService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
