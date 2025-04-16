import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employees'
})
export class EmployeesPipe implements PipeTransform {

  transform(employees: any[], searchTerm: string): any[] {
    if (!employees || !searchTerm) {
      return employees;
    }
    return employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
