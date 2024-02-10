import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFloatingInput, IType } from '../../../../../util/dataModel';
import { NgClass } from '@angular/common';
import { filterArrayFromArray } from '../../../../../util/transform';

@Component({
  selector: 'sr-multi-select',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent implements OnChanges {
  _data !: IType[]
  @Output() selectItemEmmiter = new EventEmitter();

  @Input({ required: true }) CONTROL = new FormControl()
  @Input({ required: true }) CONSTANTS !: IFloatingInput
  @Input({ required: true }) data !: IType[]
  @Input({ required: true }) selectedTags: IType[] = []

  searchResult: IType[] = []

  ngOnChanges(changes: SimpleChanges): void {
    this._data = this.data
    this._data = filterArrayFromArray(this.data, this.selectedTags)
  }

  handleKeyUp($event: Event) {
    const element = ($event.target as HTMLInputElement)
    if (element.value.length < 2) {
      this.searchResult = []
    } else {
      this.searchResult = this._data.filter(x => x.title.toLowerCase().includes(element.value.toLowerCase()))
    }
  }

  handleSelect(tag: IType) {
    if (this.selectedTags.filter(x => x._id === tag._id).length > 0) {
      this.selectedTags = this.selectedTags.filter(x => x._id !== tag._id)
    } else {
      this.selectedTags = [...this.selectedTags, tag]
      this.searchResult = filterArrayFromArray(this.searchResult, [tag])
    }
    this._data = filterArrayFromArray(this.data, this.selectedTags)
    this.selectItemEmmiter.emit(JSON.stringify(this.selectedTags))
  }
} 