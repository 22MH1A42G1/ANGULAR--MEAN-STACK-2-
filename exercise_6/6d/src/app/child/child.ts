import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
@Input() title!: string;
ngOnChanges(changes: any): void {
 console.log('changes in child:' + JSON.stringify(changes));
 }
}
