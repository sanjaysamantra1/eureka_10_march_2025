import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone: true
})
export class SalutationPipe implements PipeTransform {
  transform(name: string, gender: string): string {
    if (!name || !gender) return name;

    const title = gender.toLowerCase() === 'male' ? 'Mr.' : 'Miss.';
    return `${title} ${name}`;
  }
}
