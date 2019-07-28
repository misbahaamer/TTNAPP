import { CandidatesTableService } from './services/candidates-table.service';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
   MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
   MatInputModule, MatDialogModule, MatAutocompleteModule } from '@angular/material';
import { CandidatesTableComponent } from './candidates/candidates-table/candidates-table.component';







@NgModule({
  declarations: [
    AppComponent,

    MainNavComponent,

    CandidatesTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
  providers: [
    CandidatesTableService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
