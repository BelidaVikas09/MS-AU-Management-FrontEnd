import { Component, OnInit,ViewChild} from '@angular/core';
import { DisplayMarksService } from 'src/app/services/display-marks.service';
import {MatTableDataSource}  from '@angular/material/table'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { LocalStorageService } from 'angular-web-storage';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-display-total-marks',
  templateUrl: './display-total-marks.component.html',
  styleUrls: ['./display-total-marks.component.css']
})
export class DisplayTotalMarksComponent implements OnInit {
  public arr:any=[]
  BarChart=[];
  userdata={};
  weightage:any={
    quz:0.2,
    mcq:0.3,
    assignment:0.1,
    project:0.4
  }
  listdata: MatTableDataSource<any>;
  displayedColumns:string[]=['name','quizMarks','mcqMarks','assignmentMarks','projectMarks','totalPercentage']
  constructor(public service:DisplayMarksService,
    private localstorage:LocalStorageService) { }
  @ViewChild(MatSort)sort:MatSort;
  @ViewChild(MatPaginator)paginator:MatPaginator;             
  weight=JSON.parse(this.localstorage.get('weight')); 
  user=JSON.parse(this.localstorage.get('islogged'))
  ngOnInit(): void {
   
    if(this.weight){
      this.weightage={
        quz: this.weight.quizWeightage,
        mcq:this.weight.mcqWeightage ,
        assignment:this.weight.assignmentWeightage ,
        project:this.weight.projectWeightage 
      }
    }
    this.service.getallMarks().subscribe(resp=>{
      this.arr=resp;
      this.arr.map(item=>{
        let percent=this.weight ?(item.quizMarks *this.weight.quizWeightage+item.mcqMarks*this.weight.mcqWeightage+item.assignmentMarks*this.weight.assignmentWeightage+item.projectMarks*this.weight.projectWeightage) :(item.quizMarks * (0.2) + item.assignmentMarks* ( 0.3 )+item.mcqMarks*(0.10)+item.projectMarks*(0.40))
        item.totalPercentage= percent
      })
      console.log("this is the array",this.arr);
      this.listdata=new MatTableDataSource(this.arr);
      this.listdata.sort=this.sort 
      this.listdata.paginator=this.paginator 
      this.userdata=this.arr.filter(arr=>
        arr.name==this.user.name
      )
      console.log("Object data",this.userdata);
      this.BarChart = new Chart('barChart', {
        type: 'bar',
      data: {
       labels: ["Quiz", "Mcq", "Assignment", "Project", "totalPercentage"],
       datasets: [{
           label: 'Marks',
           data: Object.values(this.userdata[0]).slice(1),
           backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
           ],
           borderColor: [
               'rgba(255,99,132,1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
           ],
           borderWidth: 1
       }]
      }, 
      options: {
       title:{
           text:"Your Progress in different Assessments",
           display:true
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
 
}
