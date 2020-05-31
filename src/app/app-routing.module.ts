import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './Components/menu/menu.component';
import { AppComponent } from './app.component';
import { AssessmentComponent } from './Components/assessment/assessment.component';
import { CourseComponent } from './Components/course/course.component';
import { OpportunityComponent } from './Components/opportunity/opportunity.component';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { OnboardingComponent } from './Components/onboarding/onboarding.component';
import { AssignmentComponent } from './Components/assignment/assignment.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { McqComponent } from './Components/mcq/mcq.component';
import { ProjectComponent } from './Components/project/project.component';
import { QuizListComponent } from './Components/quiz/quiz-list/quiz-list.component';
import { McqListComponent } from './Components/mcq/mcq-list/mcq-list.component';
import { ProjectListComponent } from './Components/project/project-list/project-list.component';
import { AssignmentListComponent } from './Components/assignment/assignment-list/assignment-list.component';
const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},    
  { path: 'login', component: LoginComponent,data: { title: 'Login Page'}},
  { path: 'home',component: AppComponent, data: {title: 'Login Page'}},
  { path :'menu',component:MenuComponent,data:{ title:'Menu Page'}},
  { path :'assessment', component:AssessmentComponent, data:{ title:'Assessment'}},
  { path :'course', component:CourseComponent, data:{ title:'Course'}},
  { path :'onboarding',component:OnboardingComponent,data:{ title:'Onboarding'}},
  { path :'candidate', component:CandidateComponent, data:{ title:'Candidate'} },
  { path :'opportunity', component:OpportunityComponent,data:{ title:'Oppurtunity'}},
  { path :'quiz', component:QuizListComponent,data:{ title:'Quiz'}},
  { path :'mcq', component:McqListComponent,data:{ title:'Mcq'}},
  { path :'assignment',component:AssignmentListComponent, data:{ title:'Assignment'}},
  { path :'project', component:ProjectListComponent,data:{ title:'Project'}},
  { path: '**', component: LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
