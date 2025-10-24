import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  standalone: false,
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList {
  courses = [ 
    { courseId: 1, courseName: "Node JS" }, 
    { courseId: 2, courseName: "Typescript" }, 
    { courseId: 3, courseName: "Angular" }, 
    { courseId: 4, courseName: "React JS" } 
  ]; 
}
