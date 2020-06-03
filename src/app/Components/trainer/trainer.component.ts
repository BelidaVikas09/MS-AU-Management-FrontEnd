import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(public noti:NotificationService,
    public dialogref:MatDialogRef<TrainerComponent>,
    public service:TrainerService
    ) { }

  ngOnInit(): void {
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormgroup();
 }
onSubmit(){
  //TO-DO trigger the backend api to send the data.
  if(this.service.form.valid){
    var formData=new FormData();
    formData.append("name",this.service.form.get("name").value);
    formData.append("course",this.service.form.get("course").value);
    formData.append("prerequisites",this.service.form.get("prerequisites").value);
    formData.append("description",this.service.form.get("description").value);
    formData.append("file",this.service.form.get("file").value);
    this.service.insertTrainer(formData).subscribe(resp=>{
      console.log("hoooray",resp);
      this.noti.success("created record successfully");
    }) 
  }
}
 onClose(){
  this.service.form.reset();
  this.service.initializeFormgroup();
  this.dialogref.close();
 }
 uploadFile(event){
  const File = (event.target as HTMLInputElement).files[0];
  this.service.form.patchValue({
    file:File
  })
  this.service.form.get('file').updateValueAndValidity()
 }


}
