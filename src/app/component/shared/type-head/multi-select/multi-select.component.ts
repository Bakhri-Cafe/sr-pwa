import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFloatingInput, IType } from '../../../../../util/dataModel';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sr-multi-select',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent {

  @Input({ required: true }) CONTROL = new FormControl()
  @Input({ required: true }) CONSTANTS !: IFloatingInput
  @Input({ required: true }) data !: IType[]

  @Output() selectItemEmmiter = new EventEmitter();

  searchResult: IType[] = []
  selectedItems: IType[] = []

  handleKeyUp($event: Event) {
    const element = ($event.target as HTMLInputElement)
    if (element.value.length < 2) {
      this.searchResult = []
    } else {
      this.searchResult = this.data.filter(x => x.title.includes(element.value))
    }
  }

  handleSelect(tag: IType) {
    const tagExists = this.selectedItems.filter(x => x._id == tag._id)
    if (tagExists.length > 0) {
      this.selectedItems = [...this.selectedItems.filter(x => x._id != tag._id)]
      this.data = [...this.data, tag]
      this.searchResult = [...this.searchResult, tag]
    } else {
      this.selectedItems = [...this.selectedItems, tag]
      this.data = [...this.data.filter(x => x._id !== tag._id)]
      this.searchResult = [...this.searchResult.filter(x => x._id !== tag._id)]
    }
    this.selectItemEmmiter.emit(JSON.stringify(this.selectedItems))
  }
}