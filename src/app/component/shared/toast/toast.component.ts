import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sr-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
    @Input({required: true}) toast!: { title : string, message: string, type: string, show: boolean };

    constructor() {
        setTimeout(() => {
          this.toast.show = false;
        }, 10000);
    }
}
