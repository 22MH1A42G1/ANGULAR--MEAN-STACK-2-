import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMessage]',
  standalone: false
})
export class Message {
  
  @Input('appMessage') message!: string; 
  constructor(private el: ElementRef, private renderer: Renderer2) { 
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
  } 
  @HostListener('click') onClick() { 
    this.el.nativeElement.innerHTML = this.message; 
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red'); 
  } 
}
