import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sr-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input({ required: true }) modelId: string = '';
  @Input({ required: true }) title: string = '';

  close() {
    document.body.classList.remove('modal-open');
    const element = document.getElementById(this.modelId);
    if (element) {
      element.classList.remove('show');
      element.style.display = 'none';
    }
    document.querySelector('.modal-backdrop')?.remove();
  }
  open() {
    document.body.classList.add('modal-open');
    const element = document.getElementById(this.modelId);
    if (element) {
      element.classList.add('show');
      element.style.display = 'block';
    }
    document.body.appendChild(document.createElement('div')).classList.add('modal-backdrop', 'fade', 'show');
  }
}
