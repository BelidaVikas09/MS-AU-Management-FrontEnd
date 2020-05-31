import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(public service:ProjectService,
    public dialogref:MatDialogRef<ProjectComponent>,
    public noti:NotificationService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value){
       console.log("inserting Project Record")
       this.service.insertProject(this.service.form.value).subscribe(resp=>{
      console.log(resp)
      this.noti.success("Record Added SuccessFully")
      location.reload();
    })}
    else{
      console.log("updating Project Record")
       this.service.updateProject(this.service.form.value).subscribe(resp=>{
         console.log(resp);
         this.noti.success("Record Updated SuccessFully!")
         setTimeout(()=>{console.log("hhhh")},5000);
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
