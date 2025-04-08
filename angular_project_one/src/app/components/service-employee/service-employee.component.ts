import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-service-employee',
  imports: [],
  templateUrl: './service-employee.component.html',
  styleUrl: './service-employee.component.css'
})
export class ServiceEmployeeComponent {

  selectedEmployees:any = []
      constructor(private empService: EmployeeService){ }

      ngOnInit(){
        this.selectedEmployees = this.empService.totalEmployees();
      }

      selectedEmployee(event:any){
        switch(event.target.value){
          case "all":
            this.selectedEmployees = this.empService.totalEmployees();
            break;
          case "male":
          this.selectedEmployees = this.empService.maleEmployees();
          break;
          case "female":
          this.selectedEmployees = this.empService.feMaleEmployees();
          break;
        }
      }
}
