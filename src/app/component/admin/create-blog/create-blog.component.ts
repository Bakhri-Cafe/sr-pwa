import { Component } from '@angular/core';
import { ResizableTextareaDirective } from '../../../directive/resizable-textarea.directive';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';
import {  FormBuilder,  FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../../service/microservice/blog.service';
import { markdownPlaceholder } from '../../../../util/constants';

@Component({
  selector: 'sr-create-blog',
  standalone: true,
  imports: [ResizableTextareaDirective, MarkdownWrapperComponent, ReactiveFormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {
  markdownPlaceholder = markdownPlaceholder
  blogForm: FormGroup;
  edit : boolean = true
  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      markdown: ['', Validators.required],
      description : ['this is description', Validators.required],
      organisation : ['65b75158dbd787ff64f6dd3e', Validators.required],
      type : ['65b75155dbd787ff64f6dcfb', Validators.required]
    });
  }

  toggleEdit(){
    this.edit = !this.edit
  }
  
  postBlog(){
    console.log('res')
    this.blogService.post(this.blogForm.value).subscribe(res=>console.log('res', res))
  }
}
