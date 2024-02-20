import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { EventTypes } from '../../../../util/dataModel';
import { fromEvent, take } from 'rxjs';
import { NgClass } from '@angular/common';
import { Toast } from 'bootstrap';
@Component({
  selector: 'sr-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  @Output() disposeEvent = new EventEmitter();

  @ViewChild('toastElement', { static: true })
  toastEl!: ElementRef;

  @Input()
  type!: EventTypes;

  @Input()
  title!: string;

  @Input()
  message!: string;

  toast!: Toast;

  constructor(){

  }

  ngOnInit() {
    this.show();
  }

  show() {
    this.toast = new Toast(
      this.toastEl.nativeElement,
      this.type === EventTypes.Error
        ? {
            autohide: false,
          }
        : {
            delay: 5000,
          }
    );

    fromEvent(this.toastEl.nativeElement, 'hidden.bs.toast')
      .pipe(take(1))
      .subscribe(() => this.hide());

    this.toast.show();
  }

  hide() {
    this.toast.dispose();
    this.disposeEvent.emit('');
  }
}