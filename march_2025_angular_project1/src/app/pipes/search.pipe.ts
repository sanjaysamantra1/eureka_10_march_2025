import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(employees: any[], searchText: string): any[] {
    if (!employees || !searchText) return employees;

    searchText = searchText.toLowerCase();
    
    return employees.filter(emp =>
      emp.name.toLowerCase().includes(searchText) ||
      emp.position.toLowerCase().includes(searchText)
    );
  }
}