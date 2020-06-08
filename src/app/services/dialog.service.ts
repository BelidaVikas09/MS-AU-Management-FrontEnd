import { Injectable } from '@angular/core';
import { MatConfirmDialogComponent } from '../Components/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
  openConfirmDialog(msg){
    return this.dialog.open(MatConfirmDialogComponent,{
      width:'390px',
      panelClass:'confirm-dialog-container',
      disableClose:true,
      position:{top:"10px"},
      data:{
        message:msg
      }
    })
  }
  openConfirmDialogMcq(msg){
    return this.dialog.open(MatConfirmDialogComponent,{
      width:'390px',
      panelClass:'confirm-dialog-container',
      disableClose:true,
      position:{top:"10px"},
      data:{
        message:msg
      }
    })
  }
}