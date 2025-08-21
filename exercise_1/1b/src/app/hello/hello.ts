import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: false,
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {
  courseName:string="Angular";
  constructor(){}
  ngOnInit(){}
}
