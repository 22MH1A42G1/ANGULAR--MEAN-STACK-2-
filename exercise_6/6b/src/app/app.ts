import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('6b');
  message!: string; 
courseReg(courseName: string) { 
this.message = `Your registration for ${courseName} is successful`; 
} 
}
