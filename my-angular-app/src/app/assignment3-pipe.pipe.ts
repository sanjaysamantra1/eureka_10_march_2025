import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
  
})
export class RomanPipe implements PipeTransform {

  private romanMap: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];

  transform(value: number): string {
    if (isNaN(value) || value <= 0) {
      return '';
    }

    let roman = '';
    for (const [num, char] of this.romanMap) {
      while (value >= num) {
        roman += char;
        value -= num;
      }
    }
    return roman;
  }
}