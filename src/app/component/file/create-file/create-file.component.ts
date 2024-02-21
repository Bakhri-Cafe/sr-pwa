import { Component, OnInit } from '@angular/core';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { FloatingTextareaComponent } from '../../shared/type-head/floating-textarea/floating-textarea.component';
import { FILE_CONSTANT } from '../../../../util/constants';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FileService } from '../../../service/microservice/file.service';
import { ToastService } from '../../../service/toast.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sr-create-file',
  standalone: true,
  imports: [NgClass,FloatingInputComponent, FloatingTextareaComponent, ReactiveFormsModule],
  templateUrl: './create-file.component.html',
  styleUrl: './create-file.component.scss'
})
export class CreateFileComponent implements OnInit {
  FILE_CONSTANT = FILE_CONSTANT
  id!: string;
  defaultImage = 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/470.jpg'
  fileForm;
  constructor(private fb: FormBuilder, private activateRoute: ActivatedRoute, 
    private fileService: FileService, private toastService: ToastService,
    private router: Router) {
      
    this.fileForm = this.fb.group({
      name: ['', Validators.required],
      path: ['', Validators.required],
      description: ''
    })
  }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id']
    if (this.id) {
      this.fileService.get(this.id).subscribe((res) => {
        this.fileForm.patchValue(res)
      })
    }
  }
  submitHandler() {
    this.fileService.post(this.fileForm.value).subscribe((res) => {
      this.toastService.showSuccessToast('Success', 'File created successfully')
      this.router.navigateByUrl('/admin/files')
    })
  }
  updateHandler() {
    this.fileService.put(this.id, this.fileForm.value).subscribe((res) => {
      this.toastService.showSuccessToast('Success', 'File updated successfully')
      this.router.navigateByUrl('/admin/files')
    })
  }
}