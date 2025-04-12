import { CommonModule } from '@angular/common';
import { Component, 
 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-worker-crud',
  standalone: true,
  imports: [CommonModule
    , FormsModule],
  templateUrl: './worker-crud.component.html',
  styleUrls: ['./worker-crud.component.css']
})
export class WorkerCRUDComponent {
  workers = [
    { id: 1, name: 'John Construction', role: 'Laborer', shift: 'Morning', hourlyWage: 18.50 },
    { id: 2, name: 'Jane Builder', role: 'Foreman', shift: 'Afternoon', hourlyWage: 25.75 },
    { id: 3, name: 'Mike Electrician', role: 'Electrician', shift: 'Night', hourlyWage: 22.00 }
  ];

  newWorker: any = {
    id: null,
    name: '',
    role: 'Laborer',
    shift: 'Morning',
    hourlyWage: 15.00
  };

  availableRoles = ['Laborer', 'Carpenter', 'Electrician', 'Plumber', 'Foreman', 'Supervisor'];
  availableShifts = ['Morning', 'Afternoon', 'Night', 'Overtime'];

  viewWorkerDetails(worker: any) {
    Swal.fire({
      title: 'Worker Details',
      html: `
        <p><strong>ID:</strong> ${worker.id}</p>
        <p><strong>Name:</strong> ${worker.name}</p>
        <p><strong>Role:</strong> ${worker.role}</p>
        <p><strong>Shift:</strong> ${worker.shift}</p>
        <p><strong>Hourly Wage:</strong> $${worker.hourlyWage.toFixed(2)}</p>
      `,
      icon: 'info',
      confirmButtonText: 'Close'
    });
  }

  deleteWorker(worker: any) {
    Swal.fire({
      title: 'Confirm Removal',
      text: 'Are you sure you want to remove this worker?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Remove'
    }).then((result) => {
      if (result.isConfirmed) {
        this.workers = this.workers.filter(w => w.id !== worker.id);
        this.showAlert('Worker removed successfully');
      }
    });
  }

  addWorker() {
    // Validate form
    if (!this.newWorker.name || !this.newWorker.role || !this.newWorker.shift) {
      this.showAlert('Please fill all required fields', 'error');
      return;
    }

    // Generate new ID
    const newId = this.workers.length > 0 
      ? Math.max(...this.workers.map(w => w.id)) + 1 
      : 1;
    
    const workerToAdd = {
      ...this.newWorker,
      id: newId,
      hourlyWage: Number(this.newWorker.hourlyWage)
    };
    
    this.workers.push(workerToAdd);
    this.resetForm();
    this.showAlert('Worker added successfully');
  }

  private resetForm() {
    this.newWorker = {
      id: null,
      name: '',
      role: 'Laborer',
      shift: 'Morning',
      hourlyWage: 15.00
    };
  }

  private showAlert(message: string, icon: 'success' | 'error' = 'success') {
    Swal.fire({
      position: 'top-end',
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: 3000
    });
  }
}