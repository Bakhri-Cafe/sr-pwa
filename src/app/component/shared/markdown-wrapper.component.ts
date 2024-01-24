import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'markdown-wrapper',
  standalone: true,
  imports: [MarkdownComponent],
  template: `
      <markdown emoji katex [data]="data"/> a
  `,
  providers: [
    provideMarkdown(),
  ],
})
export class MarkdownWrapperComponent {
  @Input() data!: string;
}
