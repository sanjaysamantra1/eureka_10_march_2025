import { Component, OnInit } from '@angular/core';
import { EmployeesCrudService } from '../../service/employees-crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees-crud.component.html',
  styleUrls: ['./employees-crud.component.css']
})
export class EmployeesCrudComponent implements OnInit {
  employees: any[] = [];
  isLoading = false;
  isEditing = false;
  currentEmployeeId: string | null = null;

  employeeForm = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    sal: ''
  };

  constructor(private employeesService: EmployeesCrudService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.isLoading = true;
    this.employeesService.getEmployees().subscribe({
      next: (data: any) => {
        this.employees = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching employees:', error);
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (!this.employeeForm.firstName || !this.employeeForm.email) {
      alert('First Name and Email are required!');
      return;
    }

    if (this.isEditing && this.currentEmployeeId) {
      this.employeesService.updateEmployee(this.currentEmployeeId, this.employeeForm)
        .subscribe({
          next: (updatedEmployee) => {
            console.log('Update response:', updatedEmployee);
            this.loadEmployees();
            this.resetForm();
          },
          error: (error) => {
            console.error('Update error:', error);
            alert('Error updating employee. Check console for details.');
          }
        });
    } else {
      this.employeesService.addEmployee(this.employeeForm).subscribe({
        next: () => {
          this.loadEmployees();
          this.resetForm();
        },
        error: (error) => console.error('Error adding employee:', error)
      });
    }
  }

  onEdit(employee: any): void {
    console.log('Editing employee:', employee);
    this.isEditing = true;
    this.currentEmployeeId = employee.id;
    this.employeeForm = {
      id: employee.id,
      firstName: employee.firstName || '',
      lastName: employee.lastName || '',
      email: employee.email || '',
      gender: employee.gender || '',
      sal: employee.sal || ''
    };
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeesService.deleteEmployee(id).subscribe({
        next: () => this.loadEmployees(),
        error: (error) => console.error('Error deleting employee:', error)
      });
    }
  }

  resetForm(): void {
    this.employeeForm = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      sal: ''
    };
    this.isEditing = false;
    this.currentEmployeeId = null;
  }
}