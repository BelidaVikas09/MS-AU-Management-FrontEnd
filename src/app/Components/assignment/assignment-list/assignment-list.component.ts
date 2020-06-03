import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource}  from '@angular/material/table'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { AssignmentService } from 'src/app/services/assignment.service';
import { AssignmentComponent } from '../assignment.component';
import { LocalStorageService } from 'angular-web-storage';
import { SocialUser } from 'angular-6-social-login';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  componame="Assignment Module" 
 public arr:any=[]
 displayUser=true;
 displayTable=false;
 labels:any=[]
 data:any=[]
 marks:any=[]
 BarChart=[]
 public user:any=SocialUser;
 listdata: MatTableDataSource<any>;
 displayedColumns:string[]=['id','assignmentname','candidatename','trainer','course','marks','location','year','actions']
 @ViewChild(MatSort)sort:MatSort;
 @ViewChild(MatPaginator)paginator:MatPaginator;
 searchKey:string;
  constructor(private service:AssignmentService,
    private dialog:MatDialog,
    private noti:NotificationService,
    private Dialog:DialogService,
    private localstorage:LocalStorageService) { }

  ngOnInit(): void {
    this.user=JSON.parse(this.localstorage.get("islogged"))
    this.service.getAssignmentByUser(this.user.name).subscribe(resp=>{
      console.log(resp)
      this.arr=resp;
      this.listdata=new MatTableDataSource(this.arr);
      this.listdata.sort=this.sort 
      this.listdata.paginator=this.paginator 
    })
    this.service.getAvgMarks().subscribe(resp=>{
      this.data=resp;
      this.data.map(arr=>{
        this.labels.push(arr.year);
        this.marks.push(arr.marks);
      })
      console.log("marks and labels",this.labels, this.marks);
      this.BarChart = new Chart('barChart', {
       type: 'bar',
     data: {
      labels: this.labels,
      datasets: [{
          label: 'Marks',
          data: this.marks,
          backgroundColor: 
          'rgba(75, 192, 192, 0.2)',
          
          borderColor: 
          'rgba(75, 192, 192, 0.2)',
          borderWidth: 0
      }]
     }, 
     options: {
      title:{
          text:"Assignment Average Marks over the year.",
          display:true,
          responsive: true,
          maintainAspectRatio: false
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
     }
     }); 
    })
  }
  onClear(){
    this.searchKey="";
    this.applyFilter(); 
  }
  applyFilter(){
    this.listdata.filter=this.searchKey.trim().toLowerCase();
  }
  onCreate(){
     const dialogConfig=new MatDialogConfig();
     dialogConfig.disableClose=true;
     dialogConfig.autoFocus=true;
     dialogConfig.width="60%"
     this.dialog.open(AssignmentComponent,dialogConfig)
  }
  onEdit(row){
    this.service.populateform(row)
     const dialogConfig=new MatDialogConfig();
     dialogConfig.disableClose=true;
     dialogConfig.autoFocus=true;
     dialogConfig.width="60%"
     this.dialog.open(AssignmentComponent,dialogConfig)
  }
  onDelete(row){
    this.Dialog.openConfirmDialogMcq("Are you sure to delete this record?").afterClosed().subscribe(resp=>{
      if(resp){
       this.service.deleteAssignment(row.id).subscribe(resp=>{
         this.noti.warn("Deleted Record Successfuly")
         console.log(resp);
         setTimeout(()=>{},3000);
         location.reload();
       })   
      }
   })
  }
  userTable(){
    this.displayUser=true;
    this.displayTable=false;    
   } 
   allTable(){
     this.displayTable=true;
     this.displayUser=false;
   } 
}
