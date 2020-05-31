import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource}  from '@angular/material/table'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list-all',
  templateUrl: './project-list-all.component.html',
  styleUrls: ['./project-list-all.component.css']
})
export class ProjectListAllComponent implements OnInit {
  public arr:any=[]
  listdata: MatTableDataSource<any>;
  displayedColumns:string[]=['id','projname','candidatename','trainer','course','buildmarks','testingmarks','processmarks','location','year']
  @ViewChild(MatSort)sort:MatSort;
  @ViewChild(MatPaginator)paginator:MatPaginator;
  searchKey:string;
  constructor(private service:ProjectService){ }


  ngOnInit(): void {
    this.service.getProject().subscribe(resp=>{
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
