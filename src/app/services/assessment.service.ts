import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor() { }
  form: FormGroup = new FormGroup({
    quizWeightage: new FormControl('',[Validators.required, Validators.min(0.1), Validators.max(0.5)]),
    mcqWeightage: new FormControl('',[Validators.required, Validators.min(0.1), Validators.max(0.5)]),
    assignmentWeightage: new FormControl('',[Validators.required, Validators.min(0.1), Validators.max(0.5)]),
    projectWeightage: new FormControl('',[Validators.required, Validators.min(0.1), Validators.max(0.5)]),
  });
}
