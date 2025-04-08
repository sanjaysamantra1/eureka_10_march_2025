import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number): string {
    if (typeof value !== 'number') return value;
    
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const modulo100 = value % 100;
    const modulo10 = value % 10;

    if (modulo100 >= 11 && modulo100 <= 13) {
      return value + 'th';
    }

    return value + (suffixes[modulo10] || suffixes[0]);
  }
}
