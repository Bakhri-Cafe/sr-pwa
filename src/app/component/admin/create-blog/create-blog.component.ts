import { Component } from '@angular/core';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../../service/microservice/blog.service';
import { BLOG_CONSTANT } from '../../../../util/constants';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { FloatingTextareaComponent } from '../../shared/type-head/floating-textarea/floating-textarea.component';
import { FloatingSelectComponent } from '../../shared/type-head/floating-select/floating-select.component';
import { IOrganisation, IType } from '../../../../util/dataModel';
import { OrganisationService } from '../../../service/microservice/organisation.service';
import { TypeService } from '../../../service/microservice/type.service';

@Component({
  selector: 'sr-create-blog',
  standalone: true,
  imports: [ FloatingTextareaComponent, FloatingSelectComponent, JsonPipe, FloatingInputComponent, MarkdownWrapperComponent, ReactiveFormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {
  BLOG_CONSTANT = BLOG_CONSTANT
  organisationData !: IOrganisation[]
  typeData !: IType[]
  blogForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    markdown: ['', Validators.required],
    description: ['', Validators.required],
    organisation: [''],
    type: [''],
    tags : ['', Validators.required]
  });
  edit: boolean = true
  constructor(private organisationService: OrganisationService, private typeService: TypeService, private fb: FormBuilder, private blogService: BlogService, private activatedRoute: ActivatedRoute) {
    // this.blogForm.valueChanges.subscribe(console.log)
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
    this.organisationService.all().subscribe(res => this.organisationData = res)
    this.typeService.all().subscribe(res => this.typeData = res)
  }

  toggleEdit() {
    this.edit = !this.edit
  }

  postBlog() {
    this.blogService.post(this.blogForm.value).subscribe(res => console.log('res', res))
  }
  charCount(text: string) {
    return text.length
  }
}