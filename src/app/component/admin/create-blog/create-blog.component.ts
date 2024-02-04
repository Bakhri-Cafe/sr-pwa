import { Component } from '@angular/core';
import { ResizableTextareaDirective } from '../../../directive/resizable-textarea.directive';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../../service/microservice/blog.service';
import { BLOG_CONSTANT } from '../../../../util/constants';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'sr-create-blog',
  standalone: true,
  imports: [ResizableTextareaDirective,JsonPipe, MarkdownWrapperComponent, ReactiveFormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {
  BLOG_CONSTANT = BLOG_CONSTANT
  blogForm: FormGroup;
  edit: boolean = true
  constructor(private fb: FormBuilder, private blogService: BlogService, private activatedRoute: ActivatedRoute) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      markdown: ['', Validators.required],
      description: ['', Validators.required],
      organisation: [''],
      type: ['']
    });
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ blog }) => {
        console.log('blogs', blog.title)
        if (blog) {
          this.blogForm.setValue(
            {
              title: blog.title,
              markdown: blog.markdown,
              description: blog.description,
              organisation: "...",
              type: "..."
            })
        }
      });
  }

  toggleEdit() {
    this.edit = !this.edit
  }

  postBlog() {
    console.log('res')
    this.blogService.post(this.blogForm.value).subscribe(res => console.log('res', res))
  }
  charCount(text: string) {
    return text.length
  }
}