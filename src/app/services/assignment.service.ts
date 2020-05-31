import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http:HttpClient) { }
  form: FormGroup = new FormGroup({
    $key:new FormControl(null),
    assignmentname: new FormControl('', Validators.required),
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
      assignmentname:'',
      candidatename:'',
      trainer:'',
      course:'',
      marks:'',
      location:'',
      year:''
    })
  }
  insertAssignment(assignment){
    return this.http.post('msau/addassignment',{
      assignmentname:assignment.assignmentname,
      candidatename:assignment.candidatename,
      trainer:assignment.trainer,
      course:assignment.course,
      marks:assignment.marks,
      location:assignment.location,
      year:assignment.year
    })      
 }
 getAssignment(){
  return this.http.get('msau/assignment')
 }
 getAssignmentByUser(name){
   return this.http.get(`msau/assignment/${name}`);    
 }
updateAssignment(user){
  console.log(user.$key)
  return this.http.put('msau/updateassignment',{
     id:user.$key,
     assignmentname:user.assignmentname,
     candidatename:user.candidatename,
     trainer:user.trainer,
     course:user.course,
     marks:user.marks,
     location:user.location,
     year:user.year     
  })
}
deleteAssignment(id:number){
     return this.http.delete(`msau/delassignment/${id}`)        
}
populateform(user){
  this.form.setValue({
    $key:user.id,
    assignmentname:user.assignmentname,
    candidatename:user.candidatename,
    trainer:user.trainer,
    course:user.course,
    marks:user.marks,
    location:user.location,
    year:user.year
  })
}
}
