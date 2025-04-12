import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {
  transform(name: string, gender: string): string {
    if (!name) return '';
    return gender.toLowerCase() === 'male' ? `Mr. ${name}` : `Miss. ${name}`;
  }
}