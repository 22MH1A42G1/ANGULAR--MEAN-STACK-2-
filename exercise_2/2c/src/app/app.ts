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
  protected readonly title = signal('2c');
  c=0; 
  nextChoice(){ 
    this.c++; 
    if(this.c>6){   
      this.c=0;
    } 
  }
}
