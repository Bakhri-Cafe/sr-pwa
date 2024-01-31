import { Component, Input } from '@angular/core';
import { IBlog } from '../../../../util/dataModel';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../../shared/avatar/avatar.component';
import { CharLimitpipe } from '../../../pipe/char-limit.pipe';

@Component({
  selector: 'sr-blog-item',
  standalone: true,
  imports: [RouterLink, AvatarComponent, CharLimitpipe],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  @Input({ required: true }) blog!: IBlog;
}
