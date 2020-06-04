import { Component, OnInit,ViewChild } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import {MatTableDataSource}  from '@angular/material/table'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { TrainerComponent } from '../trainer.component';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {
  componame="Assessment Module"
  public arr:any=[]
  listdata: MatTableDataSource<any>;
  displayedColumns:string[]=['id','name','course','description','prerequisites','file','actions']
  @ViewChild(MatSort)sort:MatSort;
  @ViewChild(MatPaginator)paginator:MatPaginator;
  searchKey:string;

  constructor(private dialog:MatDialog,
    private noti:NotificationService,
    private Dialog:DialogService,
    private service:TrainerService) { }

  ngOnInit(): void {
    this.service.getTrainers().subscribe(resp=>{
      console.log(resp)
      this.arr=resp;
      this.listdata=new MatTableDataSource(this.arr);
      this.listdata.sort=this.sort 
      this.listdata.paginator=this.paginator 
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
    this.dialog.open(TrainerComponent,dialogConfig)
 }
 onEdit(row){
   this.service.populateform(row)
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%"
    this.dialog.open(TrainerComponent,dialogConfig)
 }
 onDelete(row){
  this.Dialog.openConfirmDialog("Are you sure to delete this record?").afterClosed().subscribe(resp=>{
    if(resp){
     this.service.deleteTrainer(row.id).subscribe(resp=>{
       this.noti.warn("Deleted Record Successfuly")
       console.log(resp);
       location.reload();
     })   
    }
 })
}
base64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
}

download(data) {
  const byteArray = this.base64ToArrayBuffer(data.file);
  const type=this.arr.filter(arr=>{
          return arr.id===data.id; 
        })
  const blob = new Blob([byteArray], { type:type[0].filetype });
  const url = window.URL.createObjectURL(blob);
  saveAs(blob,type[0].filename);
  window.open(url);
}
}
