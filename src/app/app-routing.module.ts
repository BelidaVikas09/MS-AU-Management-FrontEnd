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
import { QuizListComponent } from './Components/quiz/quiz-list/quiz-list.component';
import { McqListComponent } from './Components/mcq/mcq-list/mcq-list.component';
import { ProjectListComponent } from './Components/project/project-list/project-list.component';
import { AssignmentListComponent } from './Components/assignment/assignment-list/assignment-list.component';
import { AuthGuard } from './auth.guard';
import { TrainerListComponent } from './Components/trainer/trainer-list/trainer-list.component';
const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},    
  { path: 'login', component: LoginComponent,data: { title: 'Login Page'}},
  { path: 'home',component: AppComponent, data: {title: 'Login Page'}, canActivate:[AuthGuard]},
  { path :'menu',component:MenuComponent,data:{ title:'Menu Page'},canActivate:[AuthGuard]},
  { path :'assessment', component:AssessmentComponent, data:{ title:'Assessment'},canActivate:[AuthGuard]},
  { path :'course', component:CourseComponent, data:{ title:'Course'}, canActivate:[AuthGuard]},
  { path :'onboarding',component:OnboardingComponent,data:{ title:'Onboarding'}, canActivate:[AuthGuard]},
  { path :'candidate', component:CandidateComponent, data:{ title:'Candidate'}, canActivate:[AuthGuard] },
  { path :'opportunity', component:OpportunityComponent,data:{ title:'Oppurtunity'}, canActivate:[AuthGuard]},
  { path :'quiz', component:QuizListComponent,data:{ title:'Quiz'}, canActivate:[AuthGuard]},
  { path :'mcq', component:McqListComponent,data:{ title:'Mcq'}, canActivate:[AuthGuard]},
  { path :'assignment',component:AssignmentListComponent, data:{ title:'Assignment'}, canActivate:[AuthGuard]},
  { path :'project', component:ProjectListComponent,data:{ title:'Project'}, canActivate:[AuthGuard]},
  { path :'trainer', component:TrainerListComponent,data:{ title:'Trainer'}, canActivate:[AuthGuard]},
  { path: '**', component: LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
