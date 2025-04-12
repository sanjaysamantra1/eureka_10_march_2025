import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(birthDate: string): string {
    if (!birthDate) return '';
    
    const parts = birthDate.split('-');
    const year = parseInt(parts[0]), month = parseInt(parts[1]) - 1, day = parseInt(parts[2]);
    const birthDateObj = new Date(year, month, day);
    
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    
    return `${age} years old`;
  }
}