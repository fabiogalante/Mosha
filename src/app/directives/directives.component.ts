import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' }
  ];

  onChange(course) {
    course.name = 'UPDATE';
  }
  onAdd() {
    this.courses.push({ id: 5, name: 'course5' });
  }

  // The splice() method adds/removes items to/from an array, and returns the removed item(s).

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

}
