import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDetailComponent } from '../../blog/blog-detail/blog-detail.component';
import { IBlog } from '../../../../util/dataModel';
import { markdownPlaceholder } from '../../../../util/constants';

@Component({
  selector: 'sr-edit-blog',
  standalone: true,
  imports: [BlogDetailComponent],
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.scss'
})
export class EditBlogComponent {
  constructor(private activatedRoute: ActivatedRoute) { }
  markdownPlaceholder: string = markdownPlaceholder
  blog!: IBlog
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({blog}) => {
        this.blog = blog
      });
  }
  
}
