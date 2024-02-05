import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFloatingInput } from '../../../../../util/dataModel';

@Component({
  selector: 'floating-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './floating-input.component.html',
  styleUrl: './floating-input.component.scss'
})
export class FloatingInputComponent {
  @Input({required: true}) CONTROL = new FormControl()
  @Input({required: true}) CONSTANTS !: IFloatingInput
}
