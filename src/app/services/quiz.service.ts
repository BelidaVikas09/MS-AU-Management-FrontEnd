import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
  form: FormGroup = new FormGroup({
    $key:new FormControl(null),
    quizname: new FormControl('', Validators.required),
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
      quizname:'',
      candidatename:'',
      trainer:'',
      course:'',
      marks:'',
      location:'',
      year:''
    })
  }
  insertQuiz(quizname:string,candidatename:string,trainer:string,course:string,marks:number,year:number,location:string){
     return this.http.post('msau/addquiz',{
       quizname:quizname,
       candidatename:candidatename,
       trainer:trainer,
       course:course,
       marks:marks,
       location:location,
       year:year
     })      
  }
  getQuiz(){
    return this.http.get('msau/quiz')
  }
  updateQuiz(user){
    console.log(user.$key)
    return this.http.put('msau/updatequiz',{
       id:user.$key,
       quizname:user.quizname,
       candidatename:user.candidatename,
       trainer:user.trainer,
       course:user.course,
       marks:user.marks,
       location:user.location,
       year:user.year     
    })
  }
  deleteQuiz(id:number){
       return this.http.delete(`msau/delquiz/${id}`)        
  }
  populateform(user){
    this.form.setValue({
      $key:user.id,
      quizname:user.quizname,
      candidatename:user.candidatename,
      trainer:user.trainer,
      course:user.course,
      marks:user.marks,
      location:user.location,
      year:user.year
    })
  }
  getQuizByUser(name){
      return this.http.get(`msau/quiz/${name}`)     
  }
}
