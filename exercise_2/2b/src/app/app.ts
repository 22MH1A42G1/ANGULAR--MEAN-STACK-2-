import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2b');
  courses: any[] = [ 
{ id: 1, name: 'TypeScript' }, 
{ id: 2, name: 'Angular' }, 
{ id: 3, name: 'Node JS' }, 
{ id: 1, name: 'TypeScript' } 
];
}
