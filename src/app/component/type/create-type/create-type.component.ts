import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { FloatingTextareaComponent } from '../../shared/type-head/floating-textarea/floating-textarea.component';
import { FloatingSelectComponent } from '../../shared/type-head/floating-select/floating-select.component';
import { CREATE_TYPE_CONST } from '../../../../util/constants';
import { ToastService } from '../../../service/toast.service';


@Component({
  selector: 'sr-create-type',
  standalone: true,
  imports: [ReactiveFormsModule, FloatingInputComponent, FloatingTextareaComponent, FloatingSelectComponent, ReactiveFormsModule],
  templateUrl: './create-type.component.html',
  styleUrl: './create-type.component.scss'
})
export class CreateTypeComponent {
  constructor(private fb: FormBuilder, private toastService: ToastService) {
    this.typeForm = this.fb.group({
      title: ['', Validators.required],
      cat1: ['', Validators.required],
      cat2: [''],
      description: ['']
    })
  }
  @Output() submitForm = new EventEmitter()
  @Output() triggerClosePopup = new EventEmitter()
  handleOnSubmit() {
    this.submitForm.emit(JSON.stringify(this.typeForm.value))
  }

  @Input({ required: true }) cat1Data !: string[]
  @Input({ required: true }) cat2Data !: (string | undefined)[]
  handleCat1keyPress($event: any) {
    this.cat1searchText = $event.target.value
    if (this.cat1searchText.length < 2) {
      this.cat1DataSearch = []
    } else {
      this.cat1DataSearch = this.cat1Data.filter((cat1: string) => cat1.toLocaleLowerCase().includes(this.cat1searchText.toLocaleLowerCase()))
    }
  }

  handleCat2keyPress($event: any) {
    this.cat2searchText = $event.target.value
    if ((this.cat2searchText ?? '').length < 1) {
      this.cat2DataSearch = []
    } else {
      this.cat2DataSearch = this.cat2Data.filter((cat2: string | undefined) => cat2?.includes((this.cat2searchText ?? '').toLocaleLowerCase()))
    }
  }

  typeForm;
  cat1DataSearch !: string[]
  cat1searchText !: string
  cat2DataSearch !: (string | undefined)[]
  cat2searchText !: string | undefined

  CREATE_BLOG_CONST = CREATE_TYPE_CONST

  selectCat1(item: string) {
    this.typeForm.patchValue({ cat1: item })
    this.cat1DataSearch = []
  }
  selectCat2(item: string | undefined) {
    this.typeForm.patchValue({ cat2: item })
    this.cat2DataSearch = []
  }
}