import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: any[], searchTerm: string): any[] {
    
    searchTerm = searchTerm.toLowerCase();
    return employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.position.toLowerCase().includes(searchTerm)
    );
  }

}
