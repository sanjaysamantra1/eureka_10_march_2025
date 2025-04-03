import { Pipe, PipeTransform } from '@angular/core';

interface Employee {
  name: string;
  gender: string;
}

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {
  transform(employee: Employee): string {
    if (!employee) return '';
    
    const prefix = employee.gender.toLowerCase() === 'male' ? 'Mr.' : 'Miss.';
    return `${prefix} ${employee.name}`;
  }
}