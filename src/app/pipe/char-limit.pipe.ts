import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charLimit',
  standalone: true
})
export class CharLimitpipe implements PipeTransform {

  transform(value: string, chars: number): unknown {
    return value.slice(0,chars);
  }

}
