import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFloatingSelect } from '../../../../../util/dataModel';
import { JsonPipe, NgClass, NgStyle } from '@angular/common';
import { AvatarComponent } from '../../avatar/avatar.component';

@Component({
  selector: 'sr-floating-select',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, JsonPipe, AvatarComponent, NgStyle],
  templateUrl: './floating-select.component.html',
  styleUrl: './floating-select.component.scss'
})
export class FloatingSelectComponent {

  @Input({ required: true }) CONTROL = new FormControl()
  @Input({ required: true }) CONSTANTS: IFloatingSelect | undefined
  @Input({ required: true }) data: any
  @Input() selectedItem: any

  @Output() selectItemEmmiter = new EventEmitter();

  changeEmitter($event: any) {
    alert('emitting' + JSON.stringify($event))
    this.selectItemEmmiter.emit(JSON.stringify(this.data.filter((x: any) => x._id === $event.target.value)[0]))
  }
}