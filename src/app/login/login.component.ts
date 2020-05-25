import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  public user:any
  constructor(private socialAuthService: AuthService) { }

  ngOnInit(): void {
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider=GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      this.user=userData 
      console.log(userData);                
    });
    }

}
