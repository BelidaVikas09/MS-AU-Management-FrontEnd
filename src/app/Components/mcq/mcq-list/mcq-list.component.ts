import { Component, OnInit,ViewChild } from '@angular/core';
import { McqService } from 'src/app/services/mcq.service';
import {MatTableDataSource}  from '@angular/material/table'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { McqComponent } from '../mcq.component';
import { LocalStorageService } from 'angular-web-storage';
import { SocialUser } from 'angular-6-social-login';
import {Chart} from 'chart.js'
@Component({
  selector: 'app-mcq-list',
  templateUrl: './mcq-list.component.html',
  styleUrls: ['./mcq-list.component.css']
})
export class McqListComponent implements OnInit {
 componame="Assment Module";
 displayUser=true;
 displayTable=false;
 public user:any=SocialUser;
 public arr:any=[]
 labels:any=[]
 data:any=[]
 marks:any=[]
 BarChart=[]
 labelCities:any=[]
 dataCity:any=[]
 marksCity:any=[]
 BarChartCity=[]
 listdata: MatTableDataSource<any>;
 displayedColumns:string[]=['id','mcqname','candidatename','trainer','course','marks','location','year','actions']
 @ViewChild(MatSort)sort:MatSort;
 @ViewChild(MatPaginator)paginator:MatPaginator;
 searchKey:string;
 constructor(private service:McqService,
  private dialog:MatDialog,
  private noti:NotificationService,
  private Dialog:DialogService,
  private localstorage:LocalStorageService) { }

  ngOnInit(): void {
    this.user=JSON.parse(this.localstorage.get("islogged"))
    this.service.getMcqByUser(this.user.name).subscribe(resp=>{
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
      this.service.getAvgMarksByLoc().subscribe(resp=>{
        this.dataCity=resp;
        this.dataCity.map(arr=>{
         this.labelCities.push(arr.location);
         this.marksCity.push(arr.marks);
         })
         this.BarChart = new Chart('barChartcity', {
         type: 'bar',
         data: {
         labels: this.labelCities,
         datasets: [{
            label: 'Marks',
            data: this.marksCity,
            backgroundColor: 
            'rgba(255, 99, 132, 0.4)',
            borderColor: 
            'rgba(255, 99, 132, 0.2)',
            borderWidth: 0
        }]
       }, 
       options: {
         title:{
             text:"Mcq Averages over the cities.",
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
      console.log("marks and labels",this.labels, this.marks);
      this.BarChart = new Chart('barChart', {
       type: 'line',
     data: {
      labels: this.labels,
      datasets: [{
          label: 'Marks',
          data: this.marks,
          backgroundColor: 
          'rgba(153, 102, 255, 0.8)',
          fill:false,
          borderColor: 
          'rgba(153, 102, 255, 0.8)',
          borderWidth: 0
      }]
     }, 
     options: {
      title:{
          text:"Mcq Averages over the year.",
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
     this.dialog.open(McqComponent,dialogConfig)
  }
  onEdit(row){
    this.service.populateform(row)
     const dialogConfig=new MatDialogConfig();
     dialogConfig.disableClose=true;
     dialogConfig.autoFocus=true;
     dialogConfig.width="60%"
     this.dialog.open(McqComponent,dialogConfig)
  }
  onDelete(row){
    this.Dialog.openConfirmDialogMcq("Are you sure to delete this record?").afterClosed().subscribe(resp=>{
      if(resp){
       this.service.deleteMcq(row.id).subscribe(resp=>{
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
