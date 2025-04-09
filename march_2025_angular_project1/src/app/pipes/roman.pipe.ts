import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman',
  standalone: true
})
export class RomanPipe implements PipeTransform {
  transform(value: number): string {
    if (!value || value <= 0) return '';

    const map: { [key: number]: string } = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    };

    let result = '';

    for (const num of Object.keys(map).map(Number).sort((a, b) => b - a)) {
      while (value >= num) {
        result += map[num];
        value -= num;
      }
    }

    return result;
  }
}
