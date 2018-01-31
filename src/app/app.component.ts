import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    title: 'Title vindo do app.componente',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs) {
    console.log('onFavoriteChanged app.component.ts', eventArgs);
  }

}
