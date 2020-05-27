import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
  SocialUser
} from 'angular-6-social-login';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LocalStorageService } from 'angular-web-storage';
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
    private localstorage:LocalStorageService
    ) { }

  ngOnInit(): void {
    if(this.localstorage.get("islogged")){
      this.router.navigate(['/menu']);
    }
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider=GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      this.user=userData 
      this.loginservice.addUser(4,this.user.name, this.user.email,this.user.image).subscribe(resp=>{
        this.localstorage.set("islogged",this.user);
        console.log(userData);
        this.user? this.router.navigate(['/menu']):this.router.navigate(['/login'])  
      })
                   
    });
    }

}
