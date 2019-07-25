import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { EXAMPLE_DATA1, SubmissionsItem } from './submissions-datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { AddSubmissionsComponent } from './addsubmissions.component';
import { SubmissionService } from './submissions.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class SubmissionsComponent implements AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<SubmissionsItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'id', 'rep', 'vendor', 'primeVendor', 'client', 'vendorPerson',
   'vendorContact', 'primeVendorPerson', 'primeVendorContact', 'role',
   'status', 'reasonOnDecision', 'actions'];
  dataSource = new MatTableDataSource<SubmissionsItem>(EXAMPLE_DATA1);
  selection = new SelectionModel<SubmissionsItem>(true, []);
  expandedElement: SubmissionsItem | null;

  removeSelectedRows() {
    this.selection.selected.forEach(item => {
       const index: number = this.dataSource.data.findIndex(d => d === item);
       console.log(this.dataSource.data.findIndex(d => d === item));
       this.dataSource.data.splice(index, 1);
       this.dataSource = new MatTableDataSource<SubmissionsItem>(this.dataSource.data);
      setTimeout(() => {
        this.ngAfterViewInit();
      });
     });
     this.selection = new SelectionModel<SubmissionsItem>(true, []);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: SubmissionsItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  constructor(private service: SubmissionService,
              public dialog: MatDialog) {}

  openDialog(): void {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    const dialogRef = this.dialog.open(AddSubmissionsComponent, dialogconfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.service.form.value);
      if (this.service.form.valid) {
      this.dataSource.data.push(this.service.form.value);
      this.service.form.reset();
      setTimeout(() => {
        this.ngAfterViewInit();
      });
    }
    });
  }

  onEdit(row) {
    this.service.populateForm(row);
    this.selection = new SelectionModel<SubmissionsItem>(true, []);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddSubmissionsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.service.form.value);
      if (this.service.form.valid) {
        this.selection.selected.forEach(item => {
          const index: number = this.dataSource.data.findIndex(d => d === item);
          console.log(this.dataSource.data.findIndex(d => d === item));
          this.dataSource.data.splice(index, 1, this.service.form.value);
          this.dataSource = new MatTableDataSource<SubmissionsItem>(this.dataSource.data);
        });
      this.service.form.reset();
      setTimeout(() => {
        this.ngAfterViewInit();
      });
      this.selection = new SelectionModel<SubmissionsItem>(true, []);
    }
    this.selection = new SelectionModel<SubmissionsItem>(true, []);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
