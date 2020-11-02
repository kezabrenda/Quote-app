import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){}

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  @HostListener("mousehover") onMouseHover(){
    this.highlight(this.highlightColor || this.defaultColor || 'violet')
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.highlight("Null")
  }


  private highlight(color: string) {
      this.elem.nativeElement.style.backgroundColor = color;
  }

}
