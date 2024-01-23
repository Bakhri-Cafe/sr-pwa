import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sr-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  pagtinations !: (string | number)[]
  @Input({required: true})
  currentPage: number = 1
  @Input({required: true})
  totalRecord = 1
  numberOfPages!: number

  @Output()
  getDataEmitter = new EventEmitter<number>()

  ngOnInit(): void {
    this.currentPage = Number(this.currentPage)
    this.numberOfPages = Math.ceil(this.totalRecord / 20)
    this.pagtinations = this.paginationGen(this.currentPage, this.numberOfPages)
  }

  paginationGen(c: number, m: number) {
    var current = c,
      last = m,
      delta = 4,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || i >= left && i < right) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }

  paginationClickHandler(pageNumber: string | number) {
    if (Number(pageNumber) >= 1 && Number(pageNumber) <= this.numberOfPages)
      this.currentPage = Number(pageNumber)
    this.pagtinations = this.paginationGen(this.currentPage, this.numberOfPages)
    this.getDataEmitter.emit(this.currentPage)
  }
}