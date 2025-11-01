import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  standalone: false,
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList {
  courses = [ 
{ courseId: 1, courseName: 'Node JS' }, 
{ courseId: 2, courseName: 'Typescript' }, 
{ courseId: 3, courseName: 'Angular' }, 
{ courseId: 4, courseName: 'React JS' }, 
]; 
course!: any[]; 
@Input() set cName(name: string) { 
this.course = []; 
for (var i = 0; i < this.courses.length; i++) { 
if (this.courses[i].courseName === name) { 
this.course.push(this.courses[i]); 
} 
} 
} 

}
