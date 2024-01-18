import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTodo]'
})
export class TodoDirective {

  constructor(private element: ElementRef, private render : Renderer2) { 
  }

  @HostListener('mouseenter') 
  setShadow(){
     this.render.addClass(this.element.nativeElement, 'shadow')
  }
  @HostListener('mouseout') 
  removeShadow(){
    this.render.removeClass(this.element.nativeElement, 'shadow')
  }

}
