import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saluation'
})
export class SaluationPipe implements PipeTransform {

  transform(value: string, gender: string): string {
    return gender === 'male' ? 'Mr. ' + value : 'Miss. ' + value;
  }

}
