import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource}  from '@angular/material/table'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectComponent } from '../project.component';
import { LocalStorageService } from 'angular-web-storage';
import { SocialUser } from 'angular-6-social-login';
import {Chart} from 'chart.js'
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
 componame="Assessment Module" 
 displayUser=true;
 displayTable=false;
 public user:any=SocialUser;
 public arr:any=[]
 labels:any=[]
 data:any=[]
 marks:any=[]
 BarChart=[]
 listdata: MatTableDataSource<any>;
 displayedColumns:string[]=['id','projname','candidatename','trainer','course','buildmarks','testingmarks','processmarks','location','year','actions']
 @ViewChild(MatSort)sort:MatSort;
 @ViewChild(MatPaginator)paginator:MatPaginator;
 searchKey:string;
  constructor(private service:ProjectService,
    private dialog:MatDialog,
    private noti:NotificationService,
    private Dialog:DialogService,
    private localstorage:LocalStorageService) { }
  ngOnInit(): void {
    this.user=JSON.parse(this.localstorage.get("islogged"))
    this.service.getProjectByUser(this.user.name).subscribe(resp=>{
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
        this.marks.push(arr.processmarks);
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
          'rgba(255, 206, 86, 0.2)',
          
          borderColor: 
          'rgba(255, 206, 86, 0.2)',
          borderWidth: 0
      }]
     }, 
     options: {
      title:{
          text:"Project Averages over the year.",
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
     this.dialog.open(ProjectComponent,dialogConfig)
  }
  onEdit(row){
    this.service.populateform(row)
     const dialogConfig=new MatDialogConfig();
     dialogConfig.disableClose=true;
     dialogConfig.autoFocus=true;
     dialogConfig.width="60%"
     this.dialog.open(ProjectComponent,dialogConfig)
  }
  onDelete(row){
    this.Dialog.openConfirmDialogMcq("Are you sure to delete this record?").afterClosed().subscribe(resp=>{
      if(resp){
       this.service.deleteProject(row.id).subscribe(resp=>{
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
