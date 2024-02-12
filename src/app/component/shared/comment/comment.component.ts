import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'sr-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  url = environment.BaseUrl
  htmlLikeStr: string
  htmlCommentStr: string
  likeHtml: SafeHtml
commentHtml : SafeHtml
  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.url = `http://sarkariresulthub.in${this.activatedRoute.snapshot.url.reduce((p: string, c) => p.concat('/' + c.path), '')}`

    this.htmlLikeStr = `<div class="fb-like" data-href=${this.url} data-width="" data-layout="" data-action="" data-size="" data-share="true"></div>`
    this.htmlCommentStr = `<div class="fb-comments" data-href=${this.url} data-width="100%" data-numposts="50"></div>`
    
    this.likeHtml = sanitizer.bypassSecurityTrustHtml(this.htmlLikeStr)
    this.commentHtml = sanitizer.bypassSecurityTrustHtml(this.htmlCommentStr)
  }
}

