import { Component, Input } from '@angular/core';
import { ResizableTextareaDirective } from '../../../directive/resizable-textarea.directive';
interface option {
  name: string
  desc: string
}
@Component({
  selector: 'sr-multi-select',
  standalone: true,
  imports: [ResizableTextareaDirective],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})


export class MultiSelectComponent {

  @Input() c_id !: string
  @Input() c_placeHolder !: string

  selected: option[] = []
  searchResult: option[] = []
  searchList: option[] = [
    { name: 'Rahul', desc: 'this is desc' },
    { name: 'Rahul1', desc: 'this is desc' },
    { name: 'Rahul11', desc: 'this is desc' },
    { name: 'Rahul111', desc: 'this is desc' },
    { name: 'Rahul1111', desc: 'this is desc' },
    { name: 'Rahul11111', desc: 'this is desc' },
    { name: 'Rahul111111', desc: 'this is desc' },
    { name: 'Rahul1111111', desc: 'this is desc' }
  ]

  handleChecked(item: option) {
    this.selected.push(item)
    console.log(this.selected)
  }
  search($event: any) {
    console.log($event.target.value)
    this.searchResult = this.searchList.filter(v => v.name.includes($event.target.value))
  }
}