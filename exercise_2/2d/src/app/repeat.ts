import { Directive } from '@angular/core';
import { TemplateRef,ViewContainerRef,Input} from '@angular/core'; 

@Directive({
  selector: '[appRepeat]',
  standalone: false,
  exportAs: 'repeat'
})
export class Repeat {
    private views: import('@angular/core').EmbeddedViewRef<any>[] = [];

    constructor(private templatRref:TemplateRef<any>,private viewContainer:ViewContainerRef){}

  /** Accept number or string from template - template type checking can pass string when attribute is present without value. */
  @Input() set appRepeat(count: number | string | undefined){ 
    const n = Number(count) || 0;
    this.viewContainer.clear();
    this.views = [];
    for(let i=0;i<n;i++){ 
      const v = this.viewContainer.createEmbeddedView(this.templatRref);
      this.views.push(v as import('@angular/core').EmbeddedViewRef<any>);
    } 
  }

  // Method used by template reference #rd
  repeatElement(count: number | string){
    this.appRepeat = count as any;
  }

  // Method used by template reference #ct to change text content of created views
  changeElementText(count: number | string){
    const text = `Changed text: ${count}`;
    for(const v of this.views){
      for(const node of v.rootNodes as any[]){
        try{
          if(node && typeof node.textContent === 'string'){
            node.textContent = text;
          }
        }catch(e){ /* ignore DOM write errors in server environments */ }
      }
    }
  }
}