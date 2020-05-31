import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource}  from '@angular/material/table'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { McqService } from 'src/app/services/mcq.service';

@Component({
  selector: 'app-mcq-list-all',
  templateUrl: './mcq-list-all.component.html',
  styleUrls: ['./mcq-list-all.component.css']
})
export class McqListAllComponent implements OnInit {
  public arr:any=[]
  listdata: MatTableDataSource<any>;
  displayedColumns:string[]=['id','mcqname','candidatename','trainer','course','marks','location','year']
  @ViewChild(MatSort)sort:MatSort;
  @ViewChild(MatPaginator)paginator:MatPaginator;
  searchKey:string;
  constructor(private service:McqService) { }

  ngOnInit(): void {
    this.service.getMcq().subscribe(resp=>{
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
