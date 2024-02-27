import { Component, Input } from '@angular/core';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { IBlog } from '../../../../util/dataModel';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sr-blog-group',
  standalone: true,
  imports: [BlogItemComponent, CommonModule, RouterLink],
  templateUrl: './blog-group.component.html',
  styleUrl: './blog-group.component.scss'
})
export class BlogGroupComponent {
  @Input({ required: true }) blogType!: string;
  @Input() iconClass!: string;
  @Input({ required: true }) blogs!: IBlog[];
}
