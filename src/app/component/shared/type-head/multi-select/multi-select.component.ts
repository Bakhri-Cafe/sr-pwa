import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFloatingInput, IType } from '../../../../../util/dataModel';
import { NgClass } from '@angular/common';
import { createContext } from 'vm';

@Component({
  selector: 'sr-multi-select',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent implements OnInit {


  @Input({ required: true }) CONTROL = new FormControl()
  @Input({ required: true }) CONSTANTS !: IFloatingInput
  @Input({ required: true }) data !: IType[]
  @Input({ required: true }) selectedTags: IType[] = []
  @Output() selectItemEmmiter = new EventEmitter();

  _searchResult: IType[] = []
  _selectedItems: IType[] = []
  _data: IType[] = []

  ngOnInit(): void {
    this._selectedItems = this.selectedTags
    this._data = this.data
  }

  handleKeyUp($event: Event) {
    const element = ($event.target as HTMLInputElement)
    if (element.value.length < 2) {
      this._searchResult = []
    } else {
      this._searchResult = this._data.filter(x => x.title.includes(element.value))
    }
  }

  handleSelect(tag: IType) {
    if (this._selectedItems.includes(tag)) {
      this._selectedItems = [...this._selectedItems.filter(x => x._id != tag._id)]

      if (!this._data.includes(tag)) {
        createContext
      }
    } else {
      this._selectedItems = [...this._selectedItems, tag]
      this._data = [...this._data.filter(x => x._id !== tag._id)]
    }
    this.selectItemEmmiter.emit(JSON.stringify(this._selectedItems))
  }
}