import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent  {
  task = {
    title: 'Titulo da tarefa',
    assignee: {
      name: null
    }
  };
}
