import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('5a');
  title = 'product details'; 
  productCode = 'PROD_P001'; 
  productName = 'Laptop'; 
}
