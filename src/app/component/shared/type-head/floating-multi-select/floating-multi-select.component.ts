import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFloatingInput, IType } from '../../../../../util/dataModel';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sr-floating-multi-select',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './floating-multi-select.component.html',
  styleUrl: './floating-multi-select.component.scss'
})
export class FloatingMultiSelectComponent {
  @Input({ required: true }) CONTROL = new FormControl()
  @Input({ required: true }) CONSTANTS !: IFloatingInput
  @Input({ required: true }) data: any

  selecttedTags !: IType[]

  handleSearch($event: any) {
    console.log("event", $event, this.CONTROL.value)
    // const elementValue = $event.targat.value
    // this.selecttedTags = this.data.filter((tag: IType) => tag.title.includes(elementValue))
  }
}