import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  form: FormGroup = new FormGroup({
    $key:new FormControl(null),
    projectname: new FormControl('', Validators.required),
    candidatename:new FormControl('',Validators.required),
    trainer: new FormControl('',Validators.required),
    course:new FormControl('',Validators.required),
    buildmarks:new FormControl('',[Validators.required,Validators.max(30), Validators.min(0)]),
    testingmarks:new FormControl('',[Validators.required,Validators.max(30), Validators.min(0)]),
    processmarks:new FormControl('',[Validators.required,Validators.max(40), Validators.min(0)]),
    location:new FormControl('',Validators.required),
    year:new FormControl('',[Validators.required,Validators.max(2020), Validators.min(2010)]),
  });
  initializeFormgroup(){
    this.form.setValue({
      $key:null,
      projectname:'',
      candidatename:'',
      trainer:'',
      course:'',
      buildmarks:'',
      testingmarks:'',
      processmarks:'',
      location:'',
      year:''
    })
  }
  insertProject(project){
    return this.http.post('msau/addProject',{
      projname:project.projectname,
      candidatename:project.candidatename,
      trainer:project.trainer,
      course:project.course,
      buildmarks:project.buildmarks,
      testingmarks:project.testingmarks,
      processmarks:project.processmarks,
      location:project.location,
      year:project.year
    })      
 }
 getProject(){
  return this.http.get('msau/Project')
 }
 getProjectByUser(name){
  return this.http.get(`msau/Project/${name}`);
 }
 getAvgMarks(){
  return this.http.get('msau/projectavg');
}
getAvgMarksByLoc(){
  return this.http.get('msau/projectavgbyloc');
}
updateProject(project){
  console.log(project.$key)
  return this.http.put('msau/updateProject',{
      id:project.$key,
      projname:project.projectname,
      candidatename:project.candidatename,
      trainer:project.trainer,
      course:project.course,
      buildmarks:project.buildmarks,
      testingmarks:project.testingmarks,
      processmarks:project.processmarks,
      location:project.location,
      year:project.year   
  })
}
deleteProject(id:number){
     return this.http.delete(`msau/delProject/${id}`)        
}
populateform(user){
  this.form.setValue({
    $key:user.id,
    projectname:user.projname,
    candidatename:user.candidatename,
    trainer:user.trainer,
    course:user.course,
    buildmarks:user.buildmarks,
    testingmarks:user.testingmarks,
    processmarks:user.processmarks,
    location:user.location,
    year:user.year
  })
}}
