import { Component, Input } from '@angular/core';
import { ResizableTextareaDirective } from '../../../../directive/resizable-textarea.directive';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFloatingTextarea } from '../../../../../util/dataModel';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sr-floating-textarea',
  standalone: true,
  imports: [ResizableTextareaDirective, ReactiveFormsModule, NgClass],
  templateUrl: './floating-textarea.component.html',
  styleUrl: './floating-textarea.component.scss'
})
export class FloatingTextareaComponent {
  @Input({ required: true }) CONTROL = new FormControl()
  @Input({ required: true }) CONSTANTS !: IFloatingTextarea
}
