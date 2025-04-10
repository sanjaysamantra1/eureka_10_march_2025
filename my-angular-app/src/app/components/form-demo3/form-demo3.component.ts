import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-demo3',
  imports: [ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form-demo3.component.html',
  styleUrl: './form-demo3.component.css'
})
export class FormDemo3Component {
  empForm!: FormGroup;
registerForm: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.empForm = this.fb.group({
      employees: this.fb.array([])
    });
  }

  getAllEmployees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  createNewEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }

  addEmployee() {
    this.getAllEmployees().push(this.createNewEmployee());
  }

  removeEmployee(empIndex: number) {
    this.getAllEmployees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.getAllEmployees().at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({skill: '',exp: ''});
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }
}