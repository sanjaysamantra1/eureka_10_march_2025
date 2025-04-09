import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender === 'Male') {
      return 'Mr. ' + name;
    } else if (gender === 'Female') {
      return 'Ms. ' + name;
    } else {
      return name;
    }
  }
}