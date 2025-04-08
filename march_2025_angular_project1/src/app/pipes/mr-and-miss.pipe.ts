import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mrAndMiss'
})
export class MrAndMissPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (!name || !gender) return name;
    return gender.toLowerCase() === 'm' ? `Mr. ${name}` : `Miss. ${name}`;
  }
}