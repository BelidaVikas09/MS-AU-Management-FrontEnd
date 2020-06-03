import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/app/services/assessment.service';
import { LocalStorageService } from 'angular-web-storage';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  componame="Assessment Module"
  displayTable=true;
  displayForm=false;
  constructor(public service:AssessmentService,
    private localstorage:LocalStorageService,
    private noti:NotificationService) { }
  ngOnInit(): void {
  }
  ondisplayTable(){
    this.displayTable=true;
    this.displayForm=false;
  }
  onDisplayForm(){
    this.displayTable=false;
    this.displayForm=true;
  }
  onClear(){
    this.service.form.reset();
 }
 wait=(timeout)=> {
  return new Promise(resolve => {
      setTimeout(resolve, timeout);
  });
}
 async onSubmit(){
  if(this.service.form.valid){
      const obj={
        'quizWeightage':this.service.form.value.quizWeightage,
        'mcqWeightage':this.service.form.value.mcqWeightage,
        'assignmentWeightage':this.service.form.value.assignmentWeightage,
        'projectWeightage':this.service.form.value.projectWeightage
      }
      this.localstorage.set('weight',JSON.stringify(obj)); 
      this.noti.success('Updated weightage successfully!');
      await this.wait(2000);
      this.displayForm=false;
      this.displayTable=true;  
  }   
 }
}
