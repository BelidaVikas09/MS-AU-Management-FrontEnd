import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource}  from '@angular/material/table'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { AssignmentService } from 'src/app/services/assignment.service';
@Component({
  selector: 'app-assignment-list-all',
  templateUrl: './assignment-list-all.component.html',
  styleUrls: ['./assignment-list-all.component.css']
})
export class AssignmentListAllComponent implements OnInit {
  public arr:any=[]
  listdata: MatTableDataSource<any>;
  displayedColumns:string[]=['id','assignmentname','candidatename','trainer','course','marks','location','year']
  @ViewChild(MatSort)sort:MatSort;
  @ViewChild(MatPaginator)paginator:MatPaginator;
  searchKey:string;
  constructor(private service:AssignmentService) { }

  ngOnInit(): void {
    this.service.getAssignment().subscribe(resp=>{
      console.log(resp)
      this.arr=resp;
      this.listdata=new MatTableDataSource(this.arr);
      this.listdata.sort=this.sort 
      this.listdata.paginator=this.paginator 
    })
  }
  onClear(){
    this.searchKey="";
    this.applyFilter(); 
  }
  applyFilter(){
    this.listdata.filter=this.searchKey.trim().toLowerCase();
  }
}
