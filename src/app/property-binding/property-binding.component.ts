import {Component} from '@angular/core';

@Component({
  selector: 'property-binding',
  styles: ['table, tr, td  { border: 1px solid black; }'] ,
  template: `
    <h2>{{ title }}</h2>
    <table>    
      <tr>
        <td>February</td>
        <td>$80</td>
      </tr>
      <tr>
        <td [attr.colspan]="colSpan">Sum: $180</td>
      </tr>
      <tr>
        <td [attr.colspan]="colSpan">teste</td>
      </tr>
    </table>
    
    <button class="btn btn-primary" [class.active]="isActive">Teste</button>
    
    <button [style.backgroundColor]="isActive ? 'blue' : 'red'">Teste</button>
  `
})

export class PropertyBindingComponent {
  title = 'lita de cursos';
  colSpan = 2;
  isActive = false;


}
