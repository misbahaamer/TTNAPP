import { Candidate } from './../../models/candidate.model';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { CandidatesTableService } from './../../services/candidates-table.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
 // import { CandidatesTableDataSource, CandidatesTableItem } from './candidates-table-datasource';



@Component({
  selector: 'app-candidates-table',
  templateUrl: './candidates-table.component.html',
  styleUrls: ['./candidates-table.component.css']
})
export class CandidatesTableComponent implements  AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Candidate>;
  dataSource = new CandidateTableDataSource(this.candidatetableService);
  displayedColumns = ['id', 'name', 'status', 'marketingPhone', 'marketingEmail', 'personalPhone', 'personalEmail'];
  searchKey: any;

  /**
   *
   */
  constructor(private candidatetableService: CandidatesTableService) {  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  ngOnInit() {
    this.candidatetableService.getCandidates().subscribe(response =>{
      if (!response) {
        return;
      }
      
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}

export class CandidateTableDataSource extends DataSource<any> {
  
  sort: MatSort;
  paginator: MatPaginator;
  /**
   *
   */
  constructor(private candidatetableService: CandidatesTableService) {
    super();
  }
    connect(): Observable<Candidate[]> {
      return this.candidatetableService.getCandidates();
    }

    disconnect() {}

   
}

