import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[srResizablefield]',
  standalone: true
})
export class ResizableTextareaDirective implements OnInit {

  @Input() srResizablefield = 0;
  constructor(private elementRef: ElementRef) { }
  @HostListener(':input')
  onInput() {
    this.resize();
  }

  ngOnInit() {
    this.resize()
  }

  resize() {
    const elementScrollHeight = this.elementRef.nativeElement.scrollHeight
    if (elementScrollHeight < this.srResizablefield) {

      this.elementRef.nativeElement.style.height = this.srResizablefield + 'px';
    } else {
      this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
    }
  }
}