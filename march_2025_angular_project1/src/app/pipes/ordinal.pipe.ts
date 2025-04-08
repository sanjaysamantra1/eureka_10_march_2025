import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) {
      return '';
    }

    let suffix = 'th';
    const mod100 = value % 100;

    // Special case for 11, 12, 13 (e.g., 11th, 12th, 13th)
    if (mod100 < 11 || mod100 > 13) {
      const mod10 = value % 10;
      switch (mod10) {
        case 1:
          suffix = 'st';
          break;
        case 2:
          suffix = 'nd';
          break;
        case 3:
          suffix = 'rd';
          break;
        default:
          suffix = 'th';
          break;
      }
    }

    return `${value}${suffix}`;
  }
}
