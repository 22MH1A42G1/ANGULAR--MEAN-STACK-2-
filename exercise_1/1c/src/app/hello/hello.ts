import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: false,
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello  implements OnInit {
  courseName = "Angular";
  constructor() { }
  ngOnInit() { }
  changeName() {
    this.courseName = "TypeScript";
  }
}
