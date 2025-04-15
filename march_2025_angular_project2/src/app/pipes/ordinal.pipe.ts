import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {
  transform(input: number) {
    if (input.toLocaleString().at(-1) == '1' && (![11, 12, 13].includes(input))) {
      return input + 'st';
    } else if (input.toLocaleString().at(-1) == '2' && (![11, 12, 13].includes(input))) {
      return input + 'nd';
    } else if (input.toLocaleString().at(-1) == '3' && (![11, 12, 13].includes(input))) {
      return input + 'rd';
    } else if ([11, 12, 13].includes(input)) {
      return input + 'th';
    } else {
      return input + 'th';
    }
  }
}
