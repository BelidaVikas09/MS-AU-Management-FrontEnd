import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OpportunityComponent } from './Components/opportunity/opportunity.component';
import { CourseComponent } from './Components/course/course.component';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { OnboardingComponent } from './Components/onboarding/onboarding.component';
import { HttpClientModule } from '@angular/common/http';
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
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
