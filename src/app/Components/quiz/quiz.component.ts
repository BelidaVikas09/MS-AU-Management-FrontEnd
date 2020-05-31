import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { QuizService } from 'src/app/services/quiz.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
   
  constructor(public service:QuizService, public noti:NotificationService,
    public dialogref:MatDialogRef<QuizComponent >) { }

  ngOnInit(): void {
  }
  onClear(){
     this.service.form.reset();
     this.service.initializeFormgroup();
     this.noti.success("Record Added SuccessFully")
  }
 onSubmit(){
   if(this.service.form.valid){
     if(!this.service.form.get('$key').value){
      console.log("inserting quiz")
     this.service.insertQuiz(this.service.form.value.quizname,this.service.form.value.candidatename,this.service.form.value.trainer,this.service.form.value.course,this.service.form.value.marks,this.service.form.value.year,this.service.form.value.location).subscribe(resp=>{
     console.log(resp)
     this.noti.success("Record Added SuccessFully")
     location.reload();
   })}
   else{
     console.log("updating quiz")
      this.service.updateQuiz(this.service.form.value).subscribe(resp=>{
        console.log(resp);
        this.noti.success("Updated SuccessFully!")
        location.reload()
      })
   }
   this.onClose();
  }
 }
 onClose(){
   this.service.form.reset();
   this.service.initializeFormgroup();
   this.dialogref.close();
 }

}
