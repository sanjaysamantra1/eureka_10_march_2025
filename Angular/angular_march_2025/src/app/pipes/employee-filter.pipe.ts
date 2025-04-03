import { Pipe, PipeTransform } from '@angular/core';

interface Employee {
  name: string;
  position: string;
  department: string;
}

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(employees: Employee[], searchText: string): Employee[] {
    if (!employees) return [];
    if (!searchText) return employees;
    
    searchText = searchText.toLowerCase();
    
    return employees.filter(emp => 
      emp.name.toLowerCase().includes(searchText) ||
      emp.position.toLowerCase().includes(searchText) ||
      emp.department.toLowerCase().includes(searchText)
    );
  }
}