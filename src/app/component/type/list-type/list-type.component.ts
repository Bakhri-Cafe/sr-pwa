import { Component } from '@angular/core';
import { CreateTypeComponent } from '../create-type/create-type.component';
import { ActivatedRoute } from '@angular/router';
import { IActiveType, IPagination, IType } from '../../../../util/dataModel';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sr-list-type',
  standalone: true,
  imports: [CreateTypeComponent, NgClass],
  templateUrl: './list-type.component.html',
  styleUrl: './list-type.component.scss'
})
export class ListTypeComponent {
  constructor(private activatedRoute: ActivatedRoute) { }
  _showDescription: boolean = false
  types!: IActiveType[]
  pagination !: IPagination
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ types }) => {
        this.types = types.result.map((type: IActiveType) => ({ ...type, classes: [] }))
        this.pagination = types.pagination
      });
  }
  handleTypeClick(id: string) {
    this.types = this.types.map(type => {
      type.classes = type.classes.filter(c => c !== 'active')
      if (type._id === id) {
        type.classes[0] = 'active'
      }
      return type
    })
  }
}