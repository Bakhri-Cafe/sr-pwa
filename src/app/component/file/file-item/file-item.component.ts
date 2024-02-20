import { Component, Input } from '@angular/core';
import { IFile } from '../../../../util/dataModel';

@Component({
  selector: 'sr-file-item',
  standalone: true,
  imports: [],
  templateUrl: './file-item.component.html',
  styleUrl: './file-item.component.scss'
})
export class FileItemComponent {
  @Input({required: true}) file !: IFile

  copyImagePath(filePath: string){
    navigator.clipboard.writeText(filePath)
  }
}
