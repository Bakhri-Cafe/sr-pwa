import { Component, Input } from '@angular/core';
import { IBlog } from '../../../../util/dataModel';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';

@Component({
  selector: 'sr-blog-detail',
  standalone: true,
  imports: [MarkdownWrapperComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  @Input({required : true}) blog !: IBlog
}
