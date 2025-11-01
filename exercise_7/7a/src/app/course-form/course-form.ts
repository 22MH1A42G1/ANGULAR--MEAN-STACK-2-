import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-form',
  standalone: false,
  templateUrl: './course-form.html',
  styleUrls: ['./course-form.css']
})
export class CourseForm {
  course = new Course(1, 'Angular', '5 days'); 
  submitted = false; 
  onSubmit() { this.submitted = true; } 
}
