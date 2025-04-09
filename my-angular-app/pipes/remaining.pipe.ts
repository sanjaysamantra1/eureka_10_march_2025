import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {
  transform(value: string): number {
    return 100 - (value ? value.length : 0);
  }
}