import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  constructor(private elem:ElementRef) { }

  @HostListener('dblclick') onDBClicks(){
    this.textDeco('line-through')
  }
  @HostListener('click') onClicks(){
    this.textDeco('none')
  }
  
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration = action;
  }

}
