import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanRedableDate',
  standalone: true
})
export class HumanRedableDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const day = 86400000;
    const olderDate = new Date(value as string).getTime();
    const currentDate = new Date().getTime();
    const diff = olderDate - currentDate;
    let dateFormated = '';
    const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto', style: 'narrow' });
    if (Math.abs(diff) > day * 365) {
      dateFormated = formatter.format(Math.round(diff / (day * 365)), 'year');
    } else if (Math.abs(diff) > day * 30) {
      dateFormated = formatter.format(Math.round(diff / (day * 30)), 'month');
    } else if (Math.abs(diff) > day) {
      dateFormated = formatter.format(Math.round(diff / day), 'day');
    } else if (Math.abs(diff) > 3600000) {
      dateFormated = formatter.format(Math.round(diff / 3600000), 'hour');
    } else if (Math.abs(diff) > 60000) {
      dateFormated = formatter.format(Math.round(diff / 60000), 'minute');
    } else {
      dateFormated = formatter.format(Math.round(diff / 1000), 'second');
    }
    return dateFormated;
  }
}
