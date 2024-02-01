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
    if (this.elementRef.nativeElement.scrollHeight) {
      setTimeout(() => this.elementRef.nativeElement.style.height = this.srResizablefield + 'px');
    }
  }

  resize() {
    this.elementRef.nativeElement.style.height = '0';
    this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
  }
}