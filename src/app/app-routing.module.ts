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

const routes: Routes = [

  {    
    path: '',    
    redirectTo: 'login',    
    pathMatch: 'full',    
  },    
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },
  {    
    path: 'home',    
    component: AppComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },
  {
    path :'menu',
    component:MenuComponent,
    data:{
      title:'Menu Page'
    }  
  },
  {
    path :'assessment',
    component:AssessmentComponent,
    data:{
      title:'Assessment'
    }  
  },
  {
    path :'course',
    component:CourseComponent,
    data:{
      title:'Course'
    }  
  }
  ,
  {
    path :'onboarding',
    component:OnboardingComponent,
    data:{
      title:'Onboarding'
    }  
  }
  ,
  {
    path :'candidate',
    component:CandidateComponent,
    data:{
      title:'Candidate'
    }  
  }
  ,
  {
    path :'opportunity',
    component:OpportunityComponent,
    data:{
      title:'Oppurtunity'
    }  
  }
  ,{
    path: '**',
    component: LoginComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
