import { Component, OnInit,ViewChild} from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import {MatTableDataSource}  from '@angular/material/table'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
@Component({
  selector: 'app-quiz-list-all',
  templateUrl: './quiz-list-all.component.html',
  styleUrls: ['./quiz-list-all.component.css']
})
export class QuizListAllComponent implements OnInit {
 public arr:any=[]
 listdata: MatTableDataSource<any>;
 displayedColumns:string[]=['id','quizname','candidatename','trainer','course','marks','location','year']
 @ViewChild(MatSort)sort:MatSort;
 @ViewChild(MatPaginator)paginator:MatPaginator;
 searchKey:string;
  constructor(private service:QuizService,
    private dialog:MatDialog,
    private noti:NotificationService,
    private Dialog:DialogService) { }

  ngOnInit(): void {
    this.service.getQuiz().subscribe(resp=>{
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
