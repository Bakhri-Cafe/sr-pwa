import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { addPer } from '../../../../util/transform';

@Component({
  selector: 'sr-loader',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  @Input() loading: boolean = false;
  @Input({ transform: addPer }) loadingPercentage: string = '0vw';

}
