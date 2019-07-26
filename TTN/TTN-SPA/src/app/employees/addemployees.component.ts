import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { EmployeeService } from './employees.service';

@Component({
    selector: 'app-addemployees',
    templateUrl: './addemployees.component.html'
})

export class AddEmployeesComponent {
    options: string[] = ['GC EAD', 'OPT', 'OPT STEM', 'Citizen'];
    constructor(
        private service: EmployeeService,
        private dialogRef: MatDialogRef<AddEmployeesComponent>) {}
        onSubmit() {
            if (this.service.form.valid) {
                this.dialogRef.close();
                console.log(this.service.getEmployees());
            }
          }

    onNoClick(): void {
        this.service.form.reset();
        this.dialogRef.close();
      }
}
