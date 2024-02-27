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
}
