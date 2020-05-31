import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
  SocialUser
} from 'angular-6-social-login';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LocalStorageService } from 'angular-web-storage';
import { ViewportScroller } from '@angular/common';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:any =SocialUser;
  constructor(private socialAuthService: AuthService,
    private router: Router,
    private loginservice:LoginService,
    private localstorage:LocalStorageService,
    private viewportScroller: ViewportScroller
    ) { }

  ngOnInit(): void {
  
    if(this.localstorage.get("islogged")){
      this.router.navigate(['/menu']);
    }
  }
   
  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
  
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider=GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      this.user=userData 
      this.loginservice.addUser(4,this.user.name, this.user.email,this.user.image).subscribe(resp=>{
        this.localstorage.set("islogged",JSON.stringify(this.user));
        console.log(userData);
        this.user? this.router.navigate(['/menu']):this.router.navigate(['/login'])  
      })
                   
    });
    }

  

}
