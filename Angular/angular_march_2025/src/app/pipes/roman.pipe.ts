import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {
  private romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  transform(value: number): string {
    if (isNaN(value) || value < 1 || value > 3999) {
      return value.toString();
    }
    
    let result = '';
    for (const numeral of this.romanNumerals) {
      while (value >= numeral.value) {
        result += numeral.symbol;
        value -= numeral.value;
      }
    }
    return result;
  }
}