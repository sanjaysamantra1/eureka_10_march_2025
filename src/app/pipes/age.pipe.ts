import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
  
})
export class AgePipe implements PipeTransform {

  transform(birthDate: string ): number {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }
}
