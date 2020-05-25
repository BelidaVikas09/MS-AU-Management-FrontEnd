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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
