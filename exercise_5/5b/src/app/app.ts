import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('5b');
  title =  'product details'; 
  productCode = 'PROD_P001'; 
  productName = 'Apple MPTT2 MacBook Pro'; 
  productPrice = 217021; 
  purchaseDate = '1/17/2018'; 
  productTax = '0.1'; 
  productRating = 4.92; 
}
