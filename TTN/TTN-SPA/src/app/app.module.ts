import { EmployeeComponent } from './employee/employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
   MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
   MatInputModule, MatDialogModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeesComponent } from './employees/addemployees.component';
import { EmployeeService } from './employees/employees.service';
import { SubmissionsComponent } from './submissions/submissions.component';
import { AddSubmissionsComponent } from './submissions/addsubmissions.component';
import { SubmissionService } from './submissions/submissions.service';
import { TraineeComponent } from './trainee/trainee.component';
import { AddTraineeComponent } from './trainee/addtrainee.component';
import { TraineeService } from './trainee/trainee.service';




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    EmployeesComponent,
    AddEmployeesComponent,
    SubmissionsComponent,
    AddSubmissionsComponent,
    TraineeComponent,
    AddTraineeComponent,
    EmployeeComponent
    
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'employee', component: EmployeeComponent},
      { path: 'employees', component: EmployeesComponent},
      { path: 'submissions', component: SubmissionsComponent},
      { path: 'trainee', component: TraineeComponent},
    ]),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService, SubmissionService, TraineeService],
  bootstrap: [AppComponent],
  entryComponents: [AddEmployeesComponent, AddSubmissionsComponent, AddTraineeComponent]
})
export class AppModule { }
