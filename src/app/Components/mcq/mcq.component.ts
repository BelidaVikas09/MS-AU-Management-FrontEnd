import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { McqService } from 'src/app/services/mcq.service';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent implements OnInit {

  constructor(public service:McqService,
    public dialogref:MatDialogRef<McqComponent>,
    public noti:NotificationService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value){
       console.log("inserting quiz")
       this.service.insertMcq(this.service.form.value).subscribe(resp=>{
      console.log(resp)
      this.noti.success("Record Added SuccessFully")
      location.reload();
    })}
    else{
      console.log("updating quiz")
       this.service.updateMcq(this.service.form.value).subscribe(resp=>{
         console.log(resp);
         this.noti.success("Record Updated SuccessFully!")
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
