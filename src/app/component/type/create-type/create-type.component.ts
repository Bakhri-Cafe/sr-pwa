import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { FloatingTextareaComponent } from '../../shared/type-head/floating-textarea/floating-textarea.component';
import { FloatingSelectComponent } from '../../shared/type-head/floating-select/floating-select.component';
import { CREATE_BLOG_CONST } from '../../../../util/constants';

@Component({
  selector: 'sr-create-type',
  standalone: true,
  imports: [ReactiveFormsModule, FloatingInputComponent, FloatingTextareaComponent, FloatingSelectComponent],
  templateUrl: './create-type.component.html',
  styleUrl: './create-type.component.scss'
})
export class CreateTypeComponent {
  typeForm;
  cat1Data !: string[]
  cat2Data !: string[]
  CREATE_BLOG_CONST = CREATE_BLOG_CONST
  constructor(private fb: FormBuilder) {
    this.typeForm = this.fb.group({
      title: ['', Validators.required],
      cat1: ['', Validators.required],
      cat2: [''],
      description: ['']
    })
  }
}

