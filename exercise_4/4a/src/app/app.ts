import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  // `styleUrls` is the correct property for an array of stylesheet paths
  styleUrls: ['./app.css']
})
export class App {
  // make the signal public so the template/test can access it
  imgUrl = 'assets/logo.png';
}