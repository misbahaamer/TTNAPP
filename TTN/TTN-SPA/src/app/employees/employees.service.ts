import { EmployeesItem } from './employees-datasource';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class EmployeeService implements OnInit {
    array: EmployeesItem[];
    public EXAMPLE_DATA: EmployeesItem[];
    employees: any[];
    constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    personalPhone: new FormControl('', [Validators.minLength(10), Validators.required]),
    marketingPhone: new FormControl('', [Validators.minLength(10), Validators.required]),
    personalEmail: new FormControl('', Validators.email),
    marketingEmail: new FormControl('', Validators.email),
    status: new FormControl('', [Validators.required, this.requireMatch]),
    id: new FormControl('', Validators.required)
  });

initializeFormGroup() {
    this.form.setValue({
      name: '',
      personalPhone: '',
      marketingPhone: '',
      personalEmail: '',
      marketingEmail: '',
      status: '',
      id: ''
    });
  }
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.http.get('http://localhost:5000/api/employees').subscribe((response: Array<EmployeesItem>) => {
      this.EXAMPLE_DATA = this.array.concat(response);
      console.log(this.EXAMPLE_DATA);
    }, error => {
      console.log(error);
    });
  }


populateForm(employee) {
    this.form.setValue(employee);
  }

requireMatch(control: FormControl): ValidationErrors | null {
    const selection: any = control.value;
    if (!(selection === 'GC EAD' || selection === 'OPT' || selection === 'OPT STEM' || selection === 'Citizen')) {
      return { requireMatch: true };
    }
    return null;
  }
}
