import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2a');
  isAuthenticated!: boolean;
  submitted = false;

  userName!: string;
  onSubmit(name: string, password: string) {
    this.submitted = true;
    this.userName = name;
    if (name === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
}