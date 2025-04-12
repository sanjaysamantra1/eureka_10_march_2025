import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null || isNaN(value)) return '';

    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = value % 100;
    const suffix = (v >= 11 && v <= 13) ? 'th' :
      suffixes[v % 10] || 'th';

    return value + suffix;
  }
}
