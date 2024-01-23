import { Component, Input } from '@angular/core';
import { IBlog } from '../../../../util/dataModel';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../../shared/avatar/avatar.component';

@Component({
  selector: 'sr-blog-item',
  standalone: true,
  imports: [RouterLink, AvatarComponent],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  @Input({ required: true }) blog!: IBlog;
}
