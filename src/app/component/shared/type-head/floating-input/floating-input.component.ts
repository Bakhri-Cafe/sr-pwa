import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFloatingInput } from '../../../../../util/dataModel';
import { ResizableTextareaDirective } from '../../../../directive/resizable-textarea.directive';

@Component({
  selector: 'floating-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, ResizableTextareaDirective],
  templateUrl: './floating-input.component.html',
  styleUrl: './floating-input.component.scss'
})
export class FloatingInputComponent {
  @Input({ required: true }) CONTROL = new FormControl()
  @Input({ required: true }) CONSTANTS !: IFloatingInput
}
