import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class McqService {

  constructor(private http:HttpClient) { }
  form: FormGroup = new FormGroup({
    $key:new FormControl(null),
    mcqname: new FormControl('', Validators.required),
    candidatename:new FormControl('',Validators.required),
    trainer: new FormControl('',Validators.required),
    course:new FormControl('',Validators.required),
    marks:new FormControl('',[Validators.required,Validators.max(100), Validators.min(0)]),
    location:new FormControl('',Validators.required),
    year:new FormControl('',[Validators.required,Validators.max(2020), Validators.min(2010)]),
  });
  initializeFormgroup(){
    this.form.setValue({
      $key:null,
      mcqname:'',
      candidatename:'',
      trainer:'',
      course:'',
      marks:'',
      location:'',
      year:''
    })
  }
  insertMcq(mcq){
    return this.http.post('msau/addmcq',{
      mcqname:mcq.mcqname,
      candidatename:mcq.candidatename,
      trainer:mcq.trainer,
      course:mcq.course,
      marks:mcq.marks,
      location:mcq.location,
      year:mcq.year
    })      
 }
 getMcq(){
  return this.http.get('msau/mcq')
 }
 getMcqByUser(name){
   return this.http.get(`msau/mcq/${name}`);
 }
updateMcq(user){
  console.log(user.$key)
  return this.http.put('msau/updatemcq',{
     id:user.$key,
     mcqname:user.mcqname,
     candidatename:user.candidatename,
     trainer:user.trainer,
     course:user.course,
     marks:user.marks,
     location:user.location,
     year:user.year     
  })
}
deleteMcq(id:number){
     return this.http.delete(`msau/delmcq/${id}`)        
}
populateform(user){
  this.form.setValue({
    $key:user.id,
    mcqname:user.mcqname,
    candidatename:user.candidatename,
    trainer:user.trainer,
    course:user.course,
    marks:user.marks,
    location:user.location,
    year:user.year
  })
}
}
