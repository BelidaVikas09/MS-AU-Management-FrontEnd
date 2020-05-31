import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { AssignmentService } from 'src/app/services/assignment.service';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(public service:AssignmentService,
    public dialogref:MatDialogRef<AssignmentComponent>,
    public noti:NotificationService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value){
       console.log("inserting assignment")
       this.service.insertAssignment(this.service.form.value).subscribe(resp=>{
      console.log(resp)
      this.noti.success("Record Added SuccessFully")
      location.reload();
    })}
    else{
      console.log("updating assignment")
       this.service.updateAssignment(this.service.form.value).subscribe(resp=>{
         console.log(resp);
         this.noti.success("Record updated SuccessFully")
         location.reload();
       })
    }
    this.onClose();
   }
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormgroup();
    this.noti.success("Record Added SuccessFully")
  }
  onClose(){
    this.service.form.reset();
    this.service.initializeFormgroup();
    this.dialogref.close();
  }
 
}
