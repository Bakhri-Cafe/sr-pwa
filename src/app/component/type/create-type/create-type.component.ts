import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { FloatingTextareaComponent } from '../../shared/type-head/floating-textarea/floating-textarea.component';
import { FloatingSelectComponent } from '../../shared/type-head/floating-select/floating-select.component';
import { CREATE_TYPE_CONST } from '../../../../util/constants';


@Component({
  selector: 'sr-create-type',
  standalone: true,
  imports: [ReactiveFormsModule, FloatingInputComponent, FloatingTextareaComponent, FloatingSelectComponent, ReactiveFormsModule],
  templateUrl: './create-type.component.html',
  styleUrl: './create-type.component.scss'
})
export class CreateTypeComponent {
  @Output() submitForm = new EventEmitter()
  handleOnSubmit() {
    this.submitForm.emit(JSON.stringify(this.typeForm.value))
  }

  @Input({ required: true }) cat1Data !: string[]
  @Input({ required: true }) cat2Data !: (string | undefined)[]
  handleCat1keyPress($event: any) {
    const searchText = $event.target.value
    if (searchText.length < 2) {
      this.cat1DataSearch = []
    } else {
      this.cat1DataSearch = this.cat1Data.filter((cat1: string) => cat1.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    }
  }

  handleCat2keyPress($event: any) {
    const searchText = $event.target.value
    if (searchText.length < 1) {
      this.cat2DataSearch = []
    } else {
      this.cat2DataSearch = this.cat2Data.filter((cat2: string | undefined) => cat2?.includes(searchText))
    }
  }

  typeForm;
  cat1DataSearch !: string[]

  cat2DataSearch !: (string | undefined)[]
  CREATE_BLOG_CONST = CREATE_TYPE_CONST
  constructor(private fb: FormBuilder) {
    this.typeForm = this.fb.group({
      title: ['', Validators.required],
      cat1: ['', Validators.required],
      cat2: [''],
      description: ['']
    })
  }
}