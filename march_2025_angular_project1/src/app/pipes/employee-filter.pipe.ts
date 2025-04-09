import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter',
  standalone: true
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(employees: any[], searchText: string): any[] {
    if (!searchText || !employees) return employees;

    return employees.filter(emp =>
      emp.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
