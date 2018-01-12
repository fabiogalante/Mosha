import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import { CursosComponent } from './cursos/cursos.component';
import {CursosService} from './cursos/cursos.service';
import { AuthorComponent } from './author/author.component';
import {AuthorService} from './author.service';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import {TwoWayBindingComponent} from './two-way-binding/two-way-bindig.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CursosComponent,
    AuthorComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CursosService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
