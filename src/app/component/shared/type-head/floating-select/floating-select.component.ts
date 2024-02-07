import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFloatingSelect } from '../../../../../util/dataModel';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sr-floating-select',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './floating-select.component.html',
  styleUrl: './floating-select.component.scss'
})
export class FloatingSelectComponent {
@Input({required: true}) CONTROL =  new FormControl()
@Input({required: true}) CONSTANTS : IFloatingSelect | undefined
@Input({required: true}) data :any
}