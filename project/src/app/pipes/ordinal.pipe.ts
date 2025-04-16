import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return value.toString();

    const suffix = ['th', 'st', 'nd', 'rd'];
    const valueString = value.toString();
    const lastDigit = parseInt(valueString.charAt(valueString.length - 1));

    if (value >= 11 && value <= 13) {
      return `${value}th`;
    } else {
      return `${value}${suffix[lastDigit] || 'th'}`;
    }
  }



}
