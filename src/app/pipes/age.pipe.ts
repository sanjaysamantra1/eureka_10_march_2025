import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    if(!value) return '';
    const currentYear = new Date().getFullYear();
    const dobYear = new Date(value).getFullYear();
    const age = currentYear - dobYear;
    return age + ' years old';
  }

}
