import { Component } from '@angular/core';
import { ResizableTextareaDirective } from '../../../directive/resizable-textarea.directive';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'sr-create-blog',
  standalone: true,
  imports: [ResizableTextareaDirective, MarkdownWrapperComponent, ReactiveFormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {
  blogForm: FormGroup;
  edit : boolean = true
  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      markdown: ['', Validators.required],
    });
  }

  toggleEdit(){
    this.edit = !this.edit
  }
}
