import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  imports: [],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  outputs : ["nameEvent"]
})
export class EmployeeAddComponent {

  nameEvent = new EventEmitter;
  submittingEmpDetails(empID:any,empFirstName:any,empLasttName:any,empDep:any,empSal:any,empHiredate:any){
    const addedEmp = [empID.value,empFirstName.value,empLasttName.value,empDep.value,empSal.value,empHiredate.value]
    this.nameEvent.emit(addedEmp)
  }
}
