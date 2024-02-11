import { Component, Input } from '@angular/core';
import { IBlog } from '../../../../util/dataModel';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';
import { SocialMediaComponent } from '../../shared/social-media/social-media.component';
import { CommentComponent } from '../../shared/comment/comment.component';

@Component({
  selector: 'sr-blog-detail',
  standalone: true,
  imports: [MarkdownWrapperComponent, SocialMediaComponent, CommentComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  @Input({required : true}) blog !: IBlog
}
