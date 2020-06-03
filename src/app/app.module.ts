import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { MenuComponent } from './Components/menu/menu.component';
import { AssessmentComponent } from './Components/assessment/assessment.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OpportunityComponent } from './Components/opportunity/opportunity.component';
import { CourseComponent } from './Components/course/course.component';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { OnboardingComponent } from './Components/onboarding/onboarding.component';
import { HttpClientModule } from '@angular/common/http';
import { GenericNavComponent } from './Components/generic-nav/generic-nav.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ModalLoginComponent } from './Components/modal-login/modal-login.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { McqComponent } from './Components/mcq/mcq.component';
import { ProjectComponent } from './Components/project/project.component';
import { AssignmentComponent } from './Components/assignment/assignment.component';
import { QuizService } from './services/quiz.service';
import { QuizListComponent } from './Components/quiz/quiz-list/quiz-list.component';
import { MatConfirmDialogComponent } from './Components/mat-confirm-dialog/mat-confirm-dialog.component';
import { McqListComponent } from './Components/mcq/mcq-list/mcq-list.component';
import { AssignmentListComponent } from './Components/assignment/assignment-list/assignment-list.component';
import { ProjectListComponent } from './Components/project/project-list/project-list.component';
import { QuizListAllComponent } from './Components/quiz/quiz-list-all/quiz-list-all.component';
import { McqListAllComponent } from './Components/mcq/mcq-list-all/mcq-list-all.component';
import { AssignmentListAllComponent } from './Components/assignment/assignment-list-all/assignment-list-all.component';
import { ProjectListAllComponent } from './Components/project/project-list-all/project-list-all.component';
import { DisplayTotalMarksComponent } from './Components/display-total-marks/display-total-marks.component';
import { AuthGuard } from './auth.guard';
import { TrainerComponent } from './Components/trainer/trainer.component';
import { TrainerListComponent } from './Components/trainer/trainer-list/trainer-list.component';
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
  [
  {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('461123909427-m0rth5hk8qnidbjkkkaajmp2gka3715o.apps.googleusercontent.com')
  }
  ]
  );
  return config;
  }
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AssessmentComponent,
    NavbarComponent,
    HomeNavComponent,
    OpportunityComponent,
    CourseComponent,
    CandidateComponent,
    OnboardingComponent,
    GenericNavComponent,
    ModalLoginComponent,
    QuizComponent,
    McqComponent,
    ProjectComponent,
    AssignmentComponent,
    QuizListComponent,
    MatConfirmDialogComponent,
    McqListComponent,
    AssignmentListComponent,
    ProjectListComponent,
    QuizListAllComponent,
    McqListAllComponent,
    AssignmentListAllComponent,
    ProjectListAllComponent,
    DisplayTotalMarksComponent,
    TrainerComponent,
    TrainerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatSnackBarModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
    QuizService ,
    AuthGuard
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
  ],
  entryComponents: [QuizComponent,MatConfirmDialogComponent, McqComponent,AssignmentComponent,ProjectComponent,TrainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
