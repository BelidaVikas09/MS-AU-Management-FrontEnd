import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http:HttpClient) { }
  form: FormGroup = new FormGroup({
    $key:new FormControl(null),
    name: new FormControl('', Validators.required),
    course:new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    prerequisites:new FormControl('',Validators.required),
    file:new FormControl(null,[Validators.required])
  });
  getTrainers(){
    return this.http.get('msau/trainers')
  }
  deleteTrainer(id:number){
         return this.http.delete(`msau/deltrainer/${id}`);
  }
  insertTrainer(formData:FormData):Observable<any>{
     return this.http.post('msau/addtrainer',formData); 
  }
  initializeFormgroup(){
    this.form.setValue({
      $key:null,
      name:'',
      course:'',
      description:'',
      prerequisites:'',
      file:null
    })
  }
  populateform(user){
    this.form.setValue({
      $key:user.id,
      name:user.name,
      description:user.description,
      course:user.course,
      prerequisites:user.prerequisites,
      file:user.file,
    })
  }

}
