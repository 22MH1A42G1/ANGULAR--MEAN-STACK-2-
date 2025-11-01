import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App  implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  protected readonly title = signal('6d');
   data = 'Angular';
 ngOnInit() {
 console.log('Init');
 }
 ngDoCheck(): void {
 console.log('Change detected');
 }
 ngAfterContentInit(): void {
 console.log('After content init');
 }
 ngAfterContentChecked(): void {
 console.log('After content checked');
 }
 ngAfterViewInit(): void {
 console.log('After view init');
 }
 ngAfterViewChecked(): void {
 console.log('After view checked');
 }
 ngOnDestroy(): void {
 console.log('Destroy');
 }
}
