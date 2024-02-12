import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';
import { CommentComponent } from '../../shared/comment/comment.component';
import { BlogDetailComponent } from '../../blog/blog-detail/blog-detail.component';
import { Meta } from '@angular/platform-browser';
import { IBlog } from '../../../../util/dataModel';

@Component({
  selector: 'sr-blog-detail-page',
  standalone: true,
  imports: [MarkdownWrapperComponent, CommentComponent, BlogDetailComponent],
  templateUrl: './blog-detail-page.component.html',
  styleUrl: './blog-detail-page.component.scss'
})
export class BlogDetailPageComponent implements OnInit, OnDestroy {
  constructor(private activatedRoute: ActivatedRoute, private meta: Meta) { }

  url = ''
  blog!: IBlog
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ blogs }) => {
        this.blog = blogs
      });
    this.url = `http://sarkariresulthub.in${this.activatedRoute.snapshot.url.reduce((p: string, c) => p.concat('/' + c.path), '')}`

    this.meta.addTags([
      { property: 'og:url', content: this.url },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: this.blog.title },
      { property: 'og:description', content: this.blog.description },
      { property: 'og:image', content: this.blog.organisation.logo?.path || '' }
    ])
  }

  ngOnDestroy(): void {
    // this.meta.removeTag('og:url')
    // this.meta.removeTag('og:title')
    // this.meta.removeTag('og:title')
    // this.meta.removeTag('og:description')
    // this.meta.removeTag('og:image')
  }
}