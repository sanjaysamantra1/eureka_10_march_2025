import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null || isNaN(value) || value <= 0) return '';
    
    const romanMap: { [key: number]: string } = {
      1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X',
      9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
    };
    
    let result = '';
    for (const key of Object.keys(romanMap).map(Number).sort((a, b) => b - a)) {
      while (value >= key) {
        result += romanMap[key];
        value -= key;
      }
    }
    return result;
  }
}
