import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';
import { CommentComponent } from '../../shared/comment/comment.component';

@Component({
  selector: 'sr-blog-detail-page',
  standalone: true,
  imports: [MarkdownWrapperComponent, CommentComponent],
  templateUrl: './blog-detail-page.component.html',
  styleUrl: './blog-detail-page.component.scss'
})
export class BlogDetailPageComponent {
  constructor(private activatedRoute: ActivatedRoute) { }
  blog: any
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({blogs}) => {
        this.blog = blogs
      });
  }
}